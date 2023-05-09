import { NextResponse } from "next/server";
import client from "@/redis";
import { Redis } from "ioredis";
import { Message } from "@/typings";
import { serverPusher } from "@/pusher";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export async function POST(
  req: Request
) {
  const res = await req.json();

  const  message  = res.Message;

  const newMessage = {
    ...message,
    //Replace the timestamp of the user to the timestamp of the server
    created_at: Date.now(),
  };

  //push to upstash redis db
  await client.hset("messages", message.id, JSON.stringify(newMessage));
  serverPusher.trigger('messages', 'new-message', newMessage)

  return NextResponse.json({ message: newMessage });
}

import { NextResponse } from "next/server";
import client from "@/redis";
import { Message } from "@/typings";

export async function GET(req: Request) {
  const messagesRes = await client.hvals("messages");

//   console.log(messagesRes, 'HERE<<<<<<')
  const messages: Message[] = messagesRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => a.created_at - b.created_at);

  return NextResponse.json({ messages });
}

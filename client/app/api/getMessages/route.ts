import { NextResponse } from "next/server";
import client from "@/redis";
import { Message } from "@/typings";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export async function GET(
  req: Request
) {
  const res = await req.json();

  const messagesRes = await client.hvals('messages')

  console.log(messagesRes, "MESSAGE RES HERE BRUDDA")
  
  const messages: Message[] = messagesRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at)

  return NextResponse.json({ messages });
}

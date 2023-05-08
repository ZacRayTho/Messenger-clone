import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/redis";
import { Redis } from "ioredis";
import { Message } from "@/typings";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  console.log(req.body, "HERE API");
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method not allowed" });
    return;
  }

  const { message } = req.body;
console.log(message, "WHAT ABOUT HERE")
  const newMessage = {
    ...message,
    //Replace the timestamp of the user to the timestamp of the server
    created_at: Date.now(),
  };

  //push to upstash redis db
  await client.hset("messages", message.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage });
}

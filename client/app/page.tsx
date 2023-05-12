import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import client from "@/redis";
import { Message } from "@/typings";

export default async function Home() {
 
  async function ServerMessages() {
    const messagesRes = await client.hvals("messages");
  
  //   console.log(messagesRes, 'HERE<<<<<<')
    const messages: Message[] = messagesRes
      .map((message) => JSON.parse(message))
      .sort((a, b) => a.created_at - b.created_at);
  
    
    return { messages };
  }

  const data = await ServerMessages();

  const messages: Message[] = data.messages;

  return (
    <main>
      <MessageList  initialMessages={messages}/>
      <ChatInput />
    </main>
  );
}

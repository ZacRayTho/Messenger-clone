import Image from "next/image";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default async function Home() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => 
    console.log(res, 'HERE>>m<>m'),
    // res.json()
  );

  // console.log(data, "HERE>>>")

  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}

import Header from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession();
  console.log(session)

  return (
    <html lang="en">
      <head>
        <title>Messenger</title>
      </head>
      <body className={inter.className}>
        <Header />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}

import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "auth/signin",
  },
});

export { handler as GET , handler as POST };

// export async function GET(
//     request: Request,
//     {
//       params,
//     }: {
//       params: { nextauth: string };
//     },
//   ) {
//     const slug = params.nextauth; // 'a', 'b', or 'c'
//     console.log(slug, "SLUG")
//   }

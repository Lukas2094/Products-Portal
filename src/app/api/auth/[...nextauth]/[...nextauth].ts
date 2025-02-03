// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: { label: "Username", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 if (
//                     credentials?.username === "Codako" &&
//                     credentials?.password === "Teste123@"
//                 ) {
//                     return { id: "1", name: "Codako" };
//                 }
//                 return null;
//             },
//         }),
//     ],
//     pages: {
//         signIn: "/login",
//     },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt"; // Importando a tipagem JWT

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "Codako" &&
          credentials?.password === "Teste123@"
        ) {
          return { id: "1", name: "Codako" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // Tipando a variável `token` com JWT
    async jwt({ token, account }: { token: JWT, account: any }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: JWT }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };

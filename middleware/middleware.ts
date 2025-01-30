import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/login", // 🔒 Redireciona para a página de login
    },
});

export const config = {
    matcher: ["/products/:path*"], // 🔒 Protege todas as subrotas de /products
};

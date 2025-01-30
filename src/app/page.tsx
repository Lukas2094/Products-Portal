import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/[...nextauth]"; // Configurações do NextAuth
import { redirect } from "next/navigation";

// Função principal da página
export default async function HomePage() {
  // Verifica a sessão do usuário usando o NextAuth
  const session = await getServerSession(authOptions);

  // Se o usuário estiver autenticado, redireciona para /products
  if (session) {
    redirect("/products");
  }

  // Se o usuário não estiver autenticado, renderiza a página de boas-vindas
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Bem-vindo ao Portal de Produtos</h1>
      <p className="mt-4 text-gray-600">Faça login para acessar a listagem de produtos.</p>
      <a
        href="/login"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Acessar Login
      </a>
    </main>
  );
}

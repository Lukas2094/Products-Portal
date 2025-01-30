"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (!result?.error) {
            router.push("/products");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-12 p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-md mb-4"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded-md mb-4"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Login
            </button>
        </form>
    );
}

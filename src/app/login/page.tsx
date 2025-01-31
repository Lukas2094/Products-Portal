"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TextField, Button, Container, Card, CardContent, Typography, CircularProgress, Alert } from "@mui/material";
import Image from "next/image";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);  
    const [isClient, setIsClient] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        setIsClient(true); 
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 

        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        setLoading(false);

        if (!result?.error) {
            router.push("/products"); 
        } else {
            setError("Nome de usuário ou senha incorretos."); 
        }
    };

    if (!isClient) {
        return null; 
    }

    return (
        <Container maxWidth="sm" className="flex justify-center items-center min-h-screen">
            <Card className="!shadow-lg w-full flex flex-col justify-between items-center !rounded-lg ">
                <Typography variant="h4" className="mb-4 p-6 text-center !font-bold text-blue-950">
                    Faça login para acessar a listagem de produtos
                </Typography>           
                <CardContent className="p-6 w-full flex justify-center items-center flex-col">
                    <Image
                        width={150}
                        height={100}
                        quality={100}
                        className="mb-4"
                        alt="car-sale"
                        src={"/images/gif/carSale-unscreen.gif"}
                    />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                        {error && <Alert severity="error" className="mb-4">{error}</Alert>}
                        
                        <TextField
                            label="Insira seu nome de usuário"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Insira sua senha"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="!font-bold !h-11 !text-base !rounded-xl"
                            fullWidth
                            disabled={loading} 
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />  
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}

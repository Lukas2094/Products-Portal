"use client";

import { motion } from "framer-motion";
import { Container, Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen">
      {/* Animação do Box principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-5 flex items-center justify-center flex-col"
      >
        {/* Imagem animada */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            width={300}
            height={200}
            quality={100}
            className="mb-4"
            alt="car-sale"
            src={"/images/gif/carSale-unscreen.gif"}
          />
        </motion.div>

        {/* Título animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography className="!text-6xl font-bold">
            Bem-vindo ao Nosso Portal de Produtos
          </Typography>
        </motion.div>

        {/* Parágrafo animado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-blue-900 text-lg"
        >
          Faça login para acessar a listagem de produtos.
        </motion.p>
      </motion.div>

      {/* Botão animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <Button
          href="/login"
          className="mt-6 !bg-blue-500 !text-white !font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Acessar Login
        </Button>
      </motion.div>
    </Container>
  );
}

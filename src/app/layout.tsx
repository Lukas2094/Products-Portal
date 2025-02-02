import type { Metadata  } from "next";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

export const metadata: Metadata = {
    title: "Products Portal",
    description: "Products Portal App Login",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
          <body style={{backgroundColor: "#FFF8E1"}}>
              <CssBaseline />
              {children}
            </body>
        </html>
    );
}

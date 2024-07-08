import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/header";

import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import { CustomerProvider } from "@/contexts/customer-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Desk - Gerenciamento",
  description: "Gerencie seus clientes e atendimentos de forma fácil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <CustomerProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </CustomerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

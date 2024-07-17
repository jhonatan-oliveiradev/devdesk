import { ThemeProvider } from "@/components/theme-provider";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/header";

import { AuthProvider } from "@/providers/auth";
import { CustomerProvider } from "@/contexts/customer-context";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { ModalProvider } from "@/providers/modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bitDESK - Gerencie de forma inteligente",
  description:
    "A plataforma definitiva de gerenciamento de clientes e chamados.",
  keywords: [
    "gerenciamento",
    "helpdesk",
    "gerenciamento de clientes e chamados",
  ],
  openGraph: {
    title: "bitDESK - Dashboard",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={nunito.className}>
        <AuthProvider>
          <CustomerProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ModalProvider>
                <Header />
                <main>{children}</main>
                <Toaster />
              </ModalProvider>
            </ThemeProvider>
          </CustomerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

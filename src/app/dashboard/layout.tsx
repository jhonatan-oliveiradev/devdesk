import { Metadata } from "next";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "bitDESK - Dashboard",
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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

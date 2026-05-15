import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Bhalla | AI Student & Developer",
  description: "Portfolio of Ayush Bhalla, an AI Engineering student, Data Analyst, and Creative Developer building modern, intelligent web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.className} bg-[#030014] text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <CustomCursor />
        <Navbar />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

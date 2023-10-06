import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextAuthProvider } from "@/lib/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive Ecommerce",
  description: "Ecommerce website built with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}

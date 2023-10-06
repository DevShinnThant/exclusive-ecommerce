import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { NextAuthProvider } from "@/lib/providers/SessionProvider";
import QueryProvider from "@/lib/providers/QueryProvider";

const poppins = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <body className={poppins.className}>
        <NextAuthProvider>
          <QueryProvider>
            <div className="flex min-h-screen flex-col">{children}</div>
          </QueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

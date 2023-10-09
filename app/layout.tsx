import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/lib/providers/QueryProvider";
import ToastProvider from "@/lib/providers/ToastProvider";

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
        <QueryProvider>
          <div className="flex min-h-screen bg-background flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </QueryProvider>
        <ToastProvider />
      </body>
    </html>
  );
}

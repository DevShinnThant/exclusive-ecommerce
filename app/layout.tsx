import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import QueryProvider from "@/lib/providers/QueryProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RecoilProvider from "@/lib/providers/RecoilProvider";

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
        <div className="flex min-h-screen bg-background flex-col">
          <QueryProvider>
            <RecoilProvider>
              <Navbar />
              {children}
            </RecoilProvider>
            <ToastProvider />
            <Footer />
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}

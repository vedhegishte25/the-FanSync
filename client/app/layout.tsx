import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FanSync",
  description: "Live scores for Football and Cricket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
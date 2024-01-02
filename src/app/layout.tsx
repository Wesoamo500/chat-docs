import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { PropsWithChildren } from "react";
import "react-loading-skeleton/dist/skeleton.css"
import "simplebar-react/dist/simplebar.min.css"
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InDocs",
  description: "Interact, chat with your favorite docs",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen, font-sans, antialiased, grainy",
            inter.className
          )}
        >
          <Toaster/>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}

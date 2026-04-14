import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/app/ui/fonts";
import NavBar from "@/app/ui/home/navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Budgefy",
  description: "Simplify your budgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${lato.className} antialiased min-h-screen`}>
        <div>
          <NavBar />
        </div>

        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}

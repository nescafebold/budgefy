import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/app/ui/fonts";
import ConditionalNavBar from "@/app/ui/home/condiotionalnavbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
      <body className={`${lato.className} antialiased min-h-screen bg-[#FFFFF8]`}>
        <div>
          <ConditionalNavBar />
        </div>

        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}

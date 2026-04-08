import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";

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
    <html lang="en">
      <body className={`${lato.className} antialiased min-h-screen`}>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}

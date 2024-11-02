import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boxful - Envíos en tiempo récord para empresas.",
  description: "Envíos en tiempo récord para empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Providers } from "@/Store/Providers";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  display: "swap",
  subsets: ["latin"],
});

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
      <body className={`antialiased ${albertSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/Store/Providers";
import TopBar from "@/app/Components/TopBar";
import "react-toastify/dist/ReactToastify.css";
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
        <Providers>
          <div className="overflow-y-scroll w-screen h-screen antialiased text-white">
            <TopBar />
            {children}

            <ToastContainer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

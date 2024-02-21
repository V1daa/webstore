import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/navbar/main";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web store",
  description: "Web game store with best prices!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

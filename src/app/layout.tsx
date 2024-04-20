import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "./_components/NavBar/nav-bar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Semey New School",
  description: "Semey New School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

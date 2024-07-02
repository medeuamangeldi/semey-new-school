import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "../_components/NavBar/nav-bar.component";
import Footer from "../_components/Footer/footer.component";
import ReduxProvider from "../_store/redux-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Semey New School",
  description: "Semey New School",
};

export const viewport: Viewport = {
  themeColor: "#7c1120",
};

export default function RootLayout({ children, params: { locale } }: any) {
  const messages = useMessages();
  return (
    <html lang="ru">
      <ReduxProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body className={inter.className}>
            <NavBar />
            <Suspense>{children}</Suspense>
            <Footer />
          </body>
        </NextIntlClientProvider>
      </ReduxProvider>
    </html>
  );
}

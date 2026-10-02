import type { Metadata, Viewport } from "next";
import "./globals.scss";
import ReduxProvider from "../_store/redux-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import SchoolShell from "../_components/SchoolSite/shell";
export const metadata: Metadata = {
  title: {
    default: "Semey New School — Школа нового поколения",
    template: "%s | Semey New School",
  },
  description:
    "Semey New School — школа полного дня в Семее. Раскрываем потенциал каждого ребёнка через знания, творчество и заботу.",
};
export const viewport: Viewport = { themeColor: "#721d32" };
export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SchoolShell>{children}</SchoolShell>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

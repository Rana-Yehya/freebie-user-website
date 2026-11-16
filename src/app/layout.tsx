import type { Metadata } from "next";
import { Marhey } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/header";
import ErrorBoundary from "./custom-error-boundary";
import { LanguageProvider } from "@/components/shared/language-provider";

const marhey = Marhey({
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Freebie",
    default: "Freebie — Happiness, Always Here",
  },
  description: "Thoughtful gifts and lasting stainless steel keepsakes, made to spread happiness with a little Freebie feeling."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      data-darkreader-proxy-injected="true"
      className={`${marhey.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header isAuthenticated={false} />
          <ErrorBoundary title="Error">{children}</ErrorBoundary>
        </LanguageProvider>
      </body>
    </html>
  );
}

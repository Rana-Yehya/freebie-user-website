import type { Metadata } from "next";
import { Marhey } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import ErrorBoundary from "./custom-error-boundary";

const marhey = Marhey({
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Freebie Gifts",
    default: "Home | Freebie Gifts",
  },
  description: "Freebie Gifts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${marhey.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <ErrorBoundary title="Error">{children}</ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}

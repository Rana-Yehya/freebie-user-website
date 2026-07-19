import type { Metadata } from "next";
import { Marhey } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import ErrorBoundary from "./custom-error-boundary";
import checkAuth from "./check-auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await checkAuth();

  return (
    <html
      suppressHydrationWarning
      data-darkreader-proxy-injected="true"
      className={`${marhey.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Header isAuthenticated={isAuthenticated} />
        <ErrorBoundary title="Error">{children}</ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}

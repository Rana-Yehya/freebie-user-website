import type { Metadata } from "next";
import { Marhey } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

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

        {children}
        <Footer />
      </body>
    </html>
  );
}

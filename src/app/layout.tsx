import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const drukWide = localFont({
  src: "./fonts/DrukWide-Bold.ttf",
  variable: "--font-druk-wide",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Oasis Travel",
  description: "Travel Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${drukWide.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

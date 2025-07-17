import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/hooks/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AMLBot - Comprehensive AML Compliance Solutions for Crypto",
  description:
    "AMLBot is your go-to solution for comprehensive AML compliance in the crypto space. We provide advanced tools and services to help businesses meet regulatory requirements and ensure secure transactions.",
  icons: {
    icon: "/favicon.ico", // default favicon
    shortcut: "/favicon-32x32.png", // optional
    apple: "/apple-touch-icon.png", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

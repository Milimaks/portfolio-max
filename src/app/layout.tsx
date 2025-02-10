import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Telugu, Jua } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["telugu"],
});

const jua = Jua({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faure Maxime - Frontend Developer",
  description: "Personal website of Faure Maxime, a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekTelugu.variable} ${jua.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

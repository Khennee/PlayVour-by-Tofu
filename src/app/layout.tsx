import type { Metadata } from "next";
import { Geist, Geist_Mono, Carter_One } from "next/font/google"; // Import Carter One font
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const carterOne = Carter_One({
  variable: "--font-carter-one",  // Defining a variable for the font
  weight: "400",                  // Defining the required weight
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${carterOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

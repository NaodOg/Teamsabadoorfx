import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TeamsabadoorFX",
  description: "Stage effect machine, Wrist band and access, Glow Gear, Staff essentials and VIP experience",
  icons: {
    icon: [
      { url: "/FX LOGO.png", sizes: "192x192" },
      { url: "/FX LOGO.png", sizes: "32x32" },
      { url: "/FX LOGO.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}

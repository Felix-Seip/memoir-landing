import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memoir — Your life, remembered",
  description: "The journaling app that makes the habit stick. Voice-first, flexible streaks, and a beautiful highlight reel of your year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

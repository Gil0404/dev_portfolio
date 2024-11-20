import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mainfont = localFont({
  src: "./fonts/SFUIText-Bold.ttf",
  variable: "--font-main",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Gilbert Garcia",
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
        className={`${mainfont.variable} font-main scroll-smooth overflow-x-hidden bg-neutral antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

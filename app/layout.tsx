import type { Metadata } from "next";
import { Averia_Gruesa_Libre, Quicksand } from "next/font/google";
import "./globals.css";

const averiaGruesaLibre = Averia_Gruesa_Libre({
  variable: "--font-averia-gruesa-libre",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NextGen",
  description: "StreetWear Clothing Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${averiaGruesaLibre.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

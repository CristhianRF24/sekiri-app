import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sekiri-app.vercel.app/"),
  title: "Pagina Cristhian Rocha F",
  description: "Esta página es para un proyecto de mi pasantía usando Next.js 14",
  openGraph: {
    title: 'Pagina Cristhian Rocha F',
    description: 'Esta página es para un proyecto de mi pasantía usando Next.js 14',
    url: 'https://sekiri-app.vercel.app/',
    siteName: 'Dev Blog',
    images: [
      {
        url: '/img/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Descripción de la imagen',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><Header/></header>
        {children}
      </body>
    </html>
  );
}

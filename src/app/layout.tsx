import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pagina Cristhian Rocha F",
  description: "esta pagina es para un proyecto de mi pasantia usando Next.js 14",
  openGraph: {
    title: 'Pagina Cristhian Rocha F',
    description: 'esta pagina es para un proyecto de mi pasantia usando Next.js 14',
    url: 'https://misitioweb.com',
    siteName: 'Pagina Cristhian Rocha F',
    images: [
      {
        url: '/img/opengraph.jpg',
        width: 800,
        height: 600,
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

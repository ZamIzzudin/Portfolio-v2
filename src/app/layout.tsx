/** @format */

import Navbar from "@/comp/Navbar";
import LoadingPage from "@/comp/LoadingPage";
import Head from "next/head";

import { Montserrat } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import "swiper/css/bundle";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Azzam Izzudin Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.GA_TRACK_ID}
        />
        <link rel="icon" href="/favicon.gif" />
      </head>
      <body className={montserrat.className}>
        {/* <LoadingPage /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}

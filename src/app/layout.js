"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Shoe Store",
  description: "Created with Next.js and tailwind css",
};

import store from "@/store/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}

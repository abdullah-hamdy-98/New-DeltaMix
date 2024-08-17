import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../public/css/bootstrap.min.css";
import "../../public/css/fancybox.min.css";
import "../../public/css/odometer.min.css";
import "../../public/css/swiper.min.css";
import "./globals.css";
import '../../node_modules/lineicons/web-font/lineicons.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "دلتا ميكس للخرسانة الجاهزة",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
        <ToastContainer theme="dark" position="bottom-center" />
      </body>
    </html>
  );
}

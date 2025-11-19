import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FEGORS Ltd | Professional Eco-Friendly Cleaning Services in Scotland",
  description: "FEGORS provides professional residential and commercial cleaning using sustainable, water-only technology. Serving Scotland with modern, eco-friendly cleaning solutions.",
  keywords: "cleaning services Scotland, eco-friendly cleaning, commercial cleaning, residential cleaning, water-based cleaning, sustainable cleaning, office cleaning, house cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

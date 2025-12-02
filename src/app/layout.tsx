import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UIC CBA AI Council",
  description: "UIC College of Business Administration AI Council - Exploring the intersection of AI and business education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

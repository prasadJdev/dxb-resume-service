import type { Metadata } from "next";

import { Libre_Baskerville, Raleway } from "next/font/google";
import "./globals.css";

const libre_Baskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"], variable: "--baskerville" });

const raleway = Raleway({ subsets: ["latin"], variable: "--raleway" });

export const metadata: Metadata = {
  title: "DXB Project",
  description: "Resume Service Project",
};

export default function RootLayout({
  header,
  children,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${libre_Baskerville.variable} ${raleway.variable} antialiased`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Libre_Baskerville, Raleway } from "next/font/google";
import "./globals.css";

const libre_Baskerville = Libre_Baskerville({ weight: "700", subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DXB Project",
  description: "Resume Service Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libre_Baskerville.className} ${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}

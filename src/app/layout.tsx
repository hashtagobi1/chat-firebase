import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientWrapper from "@/providers/QueryClientWrapper";
import ToasterWrapper from "@/providers/ToasterWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hey.XYZ - Chat Demo",
  description: "Created by @obiwritescode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <QueryClientWrapper>
        <html lang="en">
          <body className={inter.className}>
            <ToasterWrapper />
            {children}
          </body>
        </html>
      </QueryClientWrapper>
    </ClerkProvider>
  );
}

import "./globals.css";

import CharacterProvider from "@/context/CharacterContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CharacterProvider>
      <html lang="en" className={`bg-gray-100`}>
        <body className="antialiased">{children}</body>
      </html>
    </CharacterProvider>
  );
}

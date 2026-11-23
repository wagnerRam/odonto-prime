
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odonto Prime | Clínica Odontológica",
  description:
    "Odonto Prime: cuidado, saúde e estética do sorriso. Conheça nossos tratamentos e agende sua avaliação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

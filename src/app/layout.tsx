import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.converix.de"),
  title: "Converix — Authentischer Dialog. Qualifizierte Termine. Mehr Vertrauen.",
  description:
    "Converix verwandelt Interessenten in qualifizierte Termine durch authentischen Dialog, interkulturelle Kompetenz und über 30 Jahre Erfahrung im direkten Kundenkontakt. Für Coaches, Agenturen und Online-Marketer.",
  keywords: [
    "Converix",
    "Chat Setting",
    "Appointment Setting",
    "Leadgenerierung",
    "Coach Marketing",
    "Agentur Wachstum",
    "Online Marketing",
    "Terminbuchung",
    "Kundenbeziehungen",
  ],
  authors: [{ name: "Ertan Çelik", url: "https://www.converix.de" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Converix — Authentischer Dialog. Qualifizierte Termine. Mehr Vertrauen.",
    description:
      "Professionelles Chat- und Appointment-Setting für Coaches, Agenturen und Online-Marketer. Authentisch, interkulturell, erfahren.",
    type: "website",
    url: "https://www.converix.de",
    siteName: "Converix",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
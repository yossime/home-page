import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/content";
import "./globals.css";

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Full-stack developer in Jerusalem building Hebrew-first, RTL-aware products — TypeScript, React, and Node.js end to end, down to industrial Modbus systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yossi Mendelovitz — Full-Stack Developer",
  description,
  openGraph: {
    title: "Yossi Mendelovitz — Full-Stack Developer",
    description,
    url: "/",
    siteName: "Yossi Mendelovitz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yossi Mendelovitz — Full-Stack Developer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#131722" },
  ],
};

/**
 * Runs before first paint: resolves the stored theme (or the OS preference)
 * and stamps it on <html>, so there is no flash of the wrong theme.
 */
const themeInit = `(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t !== "light" && t !== "dark") {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = "light";
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${frankRuhl.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}

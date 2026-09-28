import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { SmoothScrollProvider } from "@/lib/scroll/SmoothScrollProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TabTitleMarquee } from "@/components/TabTitleMarquee";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Advantage Networks — Elevate your Connectivity";
const description =
  "Advantage Networks distributes consumer electronics exclusively through private, invite-only member networks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.advantage-net.com"),
  title,
  description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title,
    description,
    url: "https://www.advantage-net.com",
    siteName: "Advantage Networks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="grain relative font-body antialiased">
        <TabTitleMarquee />
        <LanguageProvider>
          <SmoothScrollProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

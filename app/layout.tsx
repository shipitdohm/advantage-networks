import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { SmoothScrollProvider } from "@/lib/scroll/SmoothScrollProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advantage Networks — Private-network distribution for consumer electronics",
  description:
    "Advantage Networks distributes consumer electronics exclusively through private, invite-only member networks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grain relative font-body antialiased">
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

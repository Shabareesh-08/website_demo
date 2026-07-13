import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ClaimChatbot } from "@/components/chatbot/claim-chatbot";

const newsreader = localFont({
  src: [
    { path: "../fonts/Newsreader-Variable.ttf", style: "normal" },
    { path: "../fonts/Newsreader-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Variable.ttf", style: "normal" },
    { path: "../fonts/Inter-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.expertinsuranceclaims.com"),
  title: {
    default: "Health & Insurance Claim Rejection Support | Expert Insurance Claims",
    template: "%s | Expert Insurance Claims",
  },
  description:
    "Has your health insurance claim been rejected because of a pre-existing condition? Expert Insurance Claims helps you appeal, fight and win your claim. Call +91 99850 60600.",
  keywords: [
    "insurance claim rejection",
    "health insurance claim rejected",
    "pre-existing condition claim",
    "insurance claim appeal",
    "rejected insurance claim help",
    "Expert Claim Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Expert Insurance Claims",
    title: "Health & Insurance Claim Rejection Support | Expert Insurance Claims",
    description:
      "Has your health insurance claim been rejected because of a pre-existing condition? Expert Insurance Claims helps you appeal, fight and win your claim.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-neutral-0 text-ink-900 antialiased">
        <Navbar />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
        <ClaimChatbot />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "./more.css";

export const metadata: Metadata = { metadataBase: new URL("https://mayankpaswan.dev"), title: { default: "Mayank Paswan — Software Engineer · AI Engineer · Builder", template: "%s — Mayank Paswan" }, description: "Software Engineer and AI Engineer building AI-powered products and production systems across web, backend, and cloud.", alternates: { canonical: "/" }, openGraph: { title: "Mayank Paswan — Software Engineer · AI Engineer · Builder", description: "AI-powered products and production systems across web, backend, and cloud.", url: "/", siteName: "Mayank Paswan", type: "website" }, twitter: { card: "summary_large_image", title: "Mayank Paswan — Software Engineer · AI Engineer · Builder", description: "AI-powered products and production systems across web, backend, and cloud." } };
export const viewport: Viewport = { themeColor: "#08090b", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: "Mayank Paswan", url: "https://mayankpaswan.dev", jobTitle: "Software Engineer", alumniOf: { "@type": "CollegeOrUniversity", name: "IIT Kharagpur" }, sameAs: ["https://github.com/logitlens", "https://www.linkedin.com/in/mayank-paswan-a340bb216/"] };
  return <html lang="en"><body><a className="skip-link" href="#content">Skip to content</a><Navigation />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} /></body></html>;
}

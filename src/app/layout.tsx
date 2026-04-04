import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arya-packers.vercel.app"),
  title: {
    default: "Arya Packers and Movers | Best Packers & Movers in Kamothe, Navi Mumbai",
    template: "%s | Arya Packers and Movers",
  },
  description:
    "Arya Packers and Movers - Trusted & affordable packing and moving services in Kamothe, Navi Mumbai. Household shifting, office relocation, safe transportation. Serving Panvel, Kharghar, Taloja & all Navi Mumbai. Call now for free quote!",
  keywords: [
    "packers and movers in Kamothe",
    "packers and movers Navi Mumbai",
    "movers and packers Panvel",
    "household shifting Kamothe",
    "office relocation Navi Mumbai",
    "packing services Kharghar",
    "movers Taloja",
    "best packers and movers near me",
    "affordable moving services Navi Mumbai",
    "safe packing and moving Kamothe",
    "relocation services Navi Mumbai",
    "Arya Packers and Movers",
  ],
  authors: [{ name: "Arya Packers and Movers" }],
  creator: "Arya Packers and Movers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arya-packers.vercel.app",
    siteName: "Arya Packers and Movers",
    title: "Arya Packers and Movers | Best Packers & Movers in Kamothe, Navi Mumbai",
    description:
      "Trusted & affordable packing and moving services in Kamothe, Navi Mumbai. Safe household shifting, office relocation & transportation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arya Packers and Movers - Professional Moving Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Packers and Movers | Kamothe, Navi Mumbai",
    description: "Professional packing & moving services. Safe, fast & affordable.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://arya-packers.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Arya Packers and Movers",
  description:
    "Trusted and professional packing and moving services in Kamothe, Navi Mumbai. Household shifting, office relocation, and transportation.",
  url: "https://arya-packers.vercel.app",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kamothe",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "410209",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.0178",
    longitude: "73.0962",
  },
  areaServed: [
    { "@type": "City", name: "Kamothe" },
    { "@type": "City", name: "Panvel" },
    { "@type": "City", name: "Kharghar" },
    { "@type": "City", name: "Taloja" },
    { "@type": "City", name: "Navi Mumbai" },
  ],
  serviceType: [
    "Household Shifting",
    "Office Relocation",
    "Packing Services",
    "Transportation",
    "Loading and Unloading",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "250",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

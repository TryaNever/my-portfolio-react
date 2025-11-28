import Script from "next/script";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
export const metadata = {
  title: "Portfolio - Alexis Pernette",
  description:
    "Portfolio d'Alexis Pernette, développeur web basé à Paris. Passionné de code et recherchant une alternance.",
  verification: {
    google: "xJLOqp7HUQQkwC2zOdyY7rtaqh1tG6FDFC7Z75fyT78",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="bg-[#151515] text-white overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="relative min-h-screen text-white overflow-x-hidden flex flex-col items-center">
        <Script id="jsonld" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alexis Pernette",
              "jobTitle": "Développeur Web",
              "url": "https://alexispernette.fr",
              "sameAs": [
                "https://github.com/TryaNever",
                "https://www.linkedin.com/in/alexis-pernette-b51727310"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressCountry": "FR"
              }
            }
          `}
        </Script>

        {children}
        <GoogleAnalytics gaId="G-4N932XC1TN" />
      </body>
    </html>
  );
}

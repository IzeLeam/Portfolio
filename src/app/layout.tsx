import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import ScrollNavigatorWrapper from "./components/ScrollNavigatorWrapper";
import MobileNav from "./components/MobileNav";
import Script from "next/script";

const siteUrl = "https://lucaprc.fr";
const fullName = "Luca Pourceau";
const jobTitle = "Étudiant en Cybersécurité & Lead Développeur Indépendant";
const siteDescription = "Portfolio officiel de Luca Pourceau : cybersécurité, développement web, projets, expertise technique et veille sécurité.";
const siteKeywords = [
  "Luca Pourceau",
  "Portfolio Luca Pourceau",
  "Développeur indépendant",
  "Cybersécurité",
  "Cyber sécurité étudiant",
  "Lead développeur",
  "Développeur web",
  "Security student",
  "Cybersecurity portfolio",
  "Next.js developer",
  "Fullstack developer"
];

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${fullName} - Portfolio`,
    template: `%s | ${fullName}`
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: fullName }],
  creator: fullName,
  publisher: fullName,
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': `${siteUrl}/`,
      'en-US': `${siteUrl}/?lang=en`,
      'ru-RU': `${siteUrl}/?lang=ru`
    }
  },
  openGraph: {
    title: `${fullName} - Portfolio`,
    description: siteDescription,
    url: siteUrl,
    siteName: `${fullName} Portfolio`,
    locale: 'fr_FR',
    type: 'website'
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: fullName,
    jobTitle: jobTitle,
    description: siteDescription,
    url: siteUrl,
    sameAs: [
      'https://github.com/IzeLeam',
      'https://www.linkedin.com/in/luca-pourceau'
    ],
    image: `${siteUrl}/pfp.jpg`,
    knowsAbout: [
      'Cybersecurity',
      'Web Development',
      'JavaScript',
      'Java',
      'Content Creators developer',
      'C/C++',
      'Next.js',
      'Security Auditing'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${fullName} Portfolio`,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preload" as="image" href="/pfp.jpg" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark only" />
        <meta name="author" content={fullName} />
        <meta name="application-name" content={`${fullName} Portfolio`} />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
          <div className="hidden lg:block">
            <SideBar />
          </div>
          <MobileNav />
          <ScrollNavigatorWrapper />
          <section className="lg:ml-[18%] lg:w-[82%] w-full min-h-screen">
            <div className="flex flex-col p-2 sm:p-4 gap-2 sm:gap-4 min-h-screen">
              {children}
            </div>
          </section>
        <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personJsonLd)}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </body>
    </html>
  );
}

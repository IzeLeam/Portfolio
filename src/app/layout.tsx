import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import ScrollNavigatorWrapper from "./components/ScrollNavigatorWrapper";

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Luca Pourceau - Portfolio",
  description: "Luca Pourceau, étudiant en cybersecurité et lead developpeur indépendant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-red-600 text-white`}>
  <SideBar />
  <ScrollNavigatorWrapper />
        <section style={{ marginLeft: "18%", width: "82%" }} className="min-h-screen">
          <div className="flex flex-col p-4 gap-4 min-h-screen">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}

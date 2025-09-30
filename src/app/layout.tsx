import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import ScrollNavigatorWrapper from "./components/ScrollNavigatorWrapper";
import MobileNav from "./components/MobileNav";

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
      </body>
    </html>
  );
}

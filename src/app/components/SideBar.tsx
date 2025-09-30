"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const profile = () => (
  <div className="flex flex-col items-start mb-2 sm:mb-4 p-2 sm:p-4 text-ellipsis">
    <Image
      src="/pfp.jpg"
      alt="Profile Picture"
      width={1256}
      height={1256}
      className="rounded-full w-16 sm:w-20 lg:w-24 mb-2"
    />
    <h1 className="text-lg sm:text-xl font-bold">Luca Pourceau</h1>
    <h2 className="text-xs sm:text-sm">Etudiant en CyberSécurité</h2>
    <h2 className="text-xs sm:text-sm">Leader Développeur Indépendant</h2>
    <a
      href="/Luca_Pourceau_CV.pdf"
      download
      className="mt-2 sm:mt-4 flex items-center justify-center gap-2 bg-[#0d1117] w-full rounded-lg border border-[#333] text-gray-300 px-2 sm:px-4 py-1 sm:py-2 hover:text-blue-500 hover:border-blue-500 transition"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 sm:h-4 w-3 sm:w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </span>
      <span className="text-xs sm:text-sm">Télécharger le CV</span>
    </a>
  </div>
);

function LinkButton({
  href,
  children,
  isActive,
  innerRef,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  innerRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <Link href={href} className="w-full">
      <div className="relative w-full">
        <div
          ref={innerRef}
          className={`relative z-10 flex items-center px-2 sm:px-4 py-2 sm:py-3 transition w-full hover:bg-[#333] ${
            isActive ? "text-blue-500" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}

const rights_footer = () => (
  <footer className="w-full flex flex-col items-start mt-auto px-3 sm:px-6 py-2 sm:py-3 space-y-1">
    <span className="text-xs text-gray-400">
      Conçu et développé par Luca Pourceau
    </span>
    <span className="text-xs text-gray-400">
      © 2025, Tous droits réservés.
    </span>
  </footer>
);

export default function SideBar() {
  const pathname = usePathname();
  const links: { href: string; label: React.ReactNode }[] = [
    { href: "/", label: (<><svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 mr-2 sm:mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span className="text-sm sm:text-base">Accueil</span></>) },
    { href: "/about", label: (<><svg className="h-4 sm:h-5 w-4 sm:w-5 mr-2 sm:mr-4" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg><span className="text-sm sm:text-base">À propos</span></>) },
    { href: "/projects", label: (<><svg className="h-4 sm:h-5 w-4 sm:w-5 mr-2 sm:mr-4" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"></path><path d="m21 21-1.9-1.9"></path><circle cx="17" cy="17" r="3"></circle></svg><span className="text-sm sm:text-base">Projets</span></>) },
    { href: "/cyber", label: (<><svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2" /></svg><span className="text-sm sm:text-base">Profil Cyber</span></>) },
    { href: "/blogs", label: (<><span className="text-sm sm:text-base">Blogs</span></>) },
  ];

  const linkRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [indicator, setIndicator] = React.useState<{ top: number; height: number } | null>(null);

  const measure = React.useCallback(() => {
    const active = linkRefs.current[pathname || "/"];
    if (!active) {
      setIndicator(null);
      return;
    }
    const rect = active.getBoundingClientRect();
    const nav = active.closest("nav");
    const navRect = nav ? (nav as HTMLElement).getBoundingClientRect() : { top: 0 } as DOMRect;
    setIndicator({ top: rect.top - navRect.top + (nav as HTMLElement).scrollTop, height: rect.height });
  }, [pathname]);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [measure]);

  return (
    <motion.aside
      className="fixed h-screen pl-2 sm:pl-4 py-2 sm:py-4 hidden lg:block border-r border-[#333]"
      style={{ width: "18%" }}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="flex flex-col overflow-hidden h-full relative">
        {profile()}
        {/* indicator */}
        {indicator && (
          <motion.div
            initial={false}
            animate={{ top: indicator.top, height: indicator.height }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-0 right-0 bg-[#333] z-0"
            style={{ position: "absolute" }}
          />
        )}
        {/* links */}
        {links.map((l) => (
          <LinkButton
            key={l.href}
            href={l.href}
            isActive={pathname === l.href}
            innerRef={(el) => (linkRefs.current[l.href] = el)}
          >
            {l.label}
          </LinkButton>
        ))}
        {rights_footer()}
      </nav>
    </motion.aside>
  );
}

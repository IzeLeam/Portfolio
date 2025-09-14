"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const profile = () => (
  <div className="flex flex-col items-start mb-4 p-4 text-ellipsis">
    <Image
      src="/pfp.jpg"
      alt="Profile Picture"
      width={1256}
      height={1256}
      className="rounded-full w-24 mb-2"
    />
    <h1 className="text-xl font-bold">Luca Pourceau</h1>
    <h2 className="text-sm">Etudiant en CyberSécurité</h2>
    <h2 className="text-sm">Leader Développeur Indépendant</h2>
    <a
      href="/Luca_Pourceau_CV.pdf"
      download
      className="mt-4 flex items-center justify-center gap-2 bg-[#121212] w-full rounded-lg border border-[#333] text-gray-300 px-4 py-2 hover:text-blue-500 hover:border-blue-500 transition shadow shadow-[#333]"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
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
      <span className="text-sm">Resume</span>
    </a>
  </div>
);

function LinkButton({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 transition w-full hover:bg-[#333] ${
        isActive ? "bg-[#333] text-blue-500" : ""
      }`}
    >
      {children}
    </Link>
  );
}

const rights_footer = () => (
  <footer className="w-full flex flex-col items-start mt-auto px-6 py-3 space-y-1">
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
  return (
    <aside className="fixed h-screen pl-4 py-4 hidden lg:block" style={{ width: "18%" }}>
      <nav className="bg-[#212121] flex flex-col rounded-xl border border-[#333] overflow-hidden h-full">
        {profile()}
        <LinkButton href="/" isActive={pathname === "/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span>Acceuil</span>
        </LinkButton>
        <LinkButton href="/about" isActive={pathname === "/about"}>
          <svg
            className="h-5 w-5 mr-4"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M20 21a8 8 0 0 0-16 0"></path>
          </svg>
          <span>À propos</span>
        </LinkButton>
        <LinkButton href="/projects" isActive={pathname === "/projects"}>
          <svg
            className="h-5 w-5 mr-4"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"></path>
            <path d="m21 21-1.9-1.9"></path>
            <circle cx="17" cy="17" r="3"></circle>
          </svg>
          <span>Projets</span>
        </LinkButton>
        <LinkButton
          href="/cyber"
          isActive={pathname === "/cyber-profile"}
        >
          <svg
            className="w-5 h-5 mr-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2" />
          </svg>
          <span>Profil Cyber</span>
        </LinkButton>
        <LinkButton href="/blogs" isActive={pathname === "/blogs"}>
          <span>Blogs</span>
        </LinkButton>
        {rights_footer()}
      </nav>
    </aside>
  );
}

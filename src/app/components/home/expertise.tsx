"use client";

import React, { useState } from "react";

const expertiseList = [
  {
    name: "Développement Web",
    description:
      "Concevoir des sites web responsifs et dynamiques en utilisant des frameworks et technologies modernes est pour moi la meilleure façon de rendre les applications accessibles et de déployer des solutions au monde.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rounded-xl block max-w-full h-auto text-[2.5rem] p-2"
        style={{
          background:
            "linear-gradient(to top, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)",
        }}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    name: "Cyber Sécurité",
    description:
      "Protéger les systèmes et réseaux contre les attaques numériques et garantir l'intégrité des données.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rounded-xl block max-w-full h-auto text-[2.5rem] p-2"
        style={{
          background:
            "linear-gradient(to top, rgb(0, 122, 223) 0%, rgb(0, 236, 188) 100%)",
        }}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.49 2.23006L5.49997 4.11006C4.34997 4.54006 3.40997 5.90006 3.40997 7.12006V14.5501C3.40997 15.7301 4.18997 17.2801 5.13997 17.9901L9.43997 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"></path>
        <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"></path>
        <path d="M12 12.5V15.5"></path>
      </svg>
    ),
  },
  {
    name: "DevOps",
    description:
      "Créer et gérer l'infrastructure, l'intégration continue et les pipelines de déploiement afin d'améliorer l'efficacité et la fiabilité du développement. Mettre en place les bonnes pratiques et assurer la cohérence des environnements pour un meilleur flux de travail et une collaboration optimale.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-xl block max-w-full h-auto text-[2.5rem] p-2"
        style={{
          background:
            "linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%)",
        }}
        height="1em"
        width="1em"
      >
        <path d="M3 12H21M12 8V12M6.5 12V16M17.5 12V16M10.1 8H13.9C14.4601 8 14.7401 8 14.954 7.89101C15.1422 7.79513 15.2951 7.64215 15.391 7.45399C15.5 7.24008 15.5 6.96005 15.5 6.4V4.6C15.5 4.03995 15.5 3.75992 15.391 3.54601C15.2951 3.35785 15.1422 3.20487 14.954 3.10899C14.7401 3 14.4601 3 13.9 3H10.1C9.53995 3 9.25992 3 9.04601 3.10899C8.85785 3.20487 8.70487 3.35785 8.60899 3.54601C8.5 3.75992 8.5 4.03995 8.5 4.6V6.4C8.5 6.96005 8.5 7.24008 8.60899 7.45399C8.70487 7.64215 8.85785 7.79513 9.04601 7.89101C9.25992 8 9.53995 8 10.1 8ZM15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V17.6C21 17.0399 21 16.7599 20.891 16.546C20.7951 16.3578 20.6422 16.2049 20.454 16.109C20.2401 16 19.9601 16 19.4 16H15.6C15.0399 16 14.7599 16 14.546 16.109C14.3578 16.2049 14.2049 16.3578 14.109 16.546C14 16.7599 14 17.0399 14 17.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21ZM4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V17.6C10 17.0399 10 16.7599 9.89101 16.546C9.79513 16.3578 9.64215 16.2049 9.45399 16.109C9.24008 16 8.96005 16 8.4 16H4.6C4.03995 16 3.75992 16 3.54601 16.109C3.35785 16.2049 3.20487 16.3578 3.10899 16.546C3 16.7599 3 17.0399 3 17.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21Z"></path>
      </svg>
    ),
  },
  {
    name: "Automatisation / Bot Scripting",
    description:
      "Concevoir et développer des scripts ou des bots afin d'automatiser, d'apporter des solutions innovantes et d'optimiser les tâches répétitives. Expérimenté avec des clients du secteur de la création de contenu.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rounded-xl block max-w-full h-auto text-[2.5rem] p-2"
        style={{
          background:
            "linear-gradient(to left, rgb(10, 207, 254) 0%, rgb(73, 90, 255) 100%)",
        }}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      </svg>
    ),
  },
];

export default function Expertise() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full relative p-6 border border-[#333]">
      <h2 className="flex items-center text-2xl font-bold mb-2">
        <svg
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
        <span className="ml-2">Expertise</span>
      </h2>
      <ul className="w-full flex flex-col">
        {expertiseList.map((item, i) => (
          <li key={i} className="w-full border-b border-[#333]">
            <button
              className="flex items-center w-full text-left focus:outline-none py-4 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`desc-${i}`}
            >
              {item.icon}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
              <span
                className={`ml-2 transition-transform duration-200 ${
                  open === i ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              id={`desc-${i}`}
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: open === i ? 200 : 0,
                marginBottom: open === i ? 16 : 0,
              }}
            >
              <p className="text-md px-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

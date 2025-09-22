"use client";

import Image from "next/image";
import { useState } from "react";

const experienceList = [
  {
    position: "Développeur Full-Stack & Consultant en Cybersécurité",
    company: "Micro-Entrepreneur",
    location: "Rennes, France",
    from: "Sept 2024",
    to: "Présent",
    icon: "univ-rennes.jpg",
    description: "Dans l'optique d'une qualité professionnelle optimale, je propose des services de développement et de cybersécurité au plus près des clients pour assurer un support et une adaptation continue aux besoin évolutifs. Principalement niché dans l'écosystème des créateurs de contenu, j'ai l'opportunité de travailler sur des projets variés pour une satisfaction client et utilisateurs optimale.",
  },
  {
    position: "Lead Développeur Java",
    company: "Minelia and others (Freelance)",
    location: "Remote, France",
    from: "Mai 2023",
    to: "Juin 2025",
    icon: "spigot.png",
    description: "Développement de plugins Minecraft sur mesure en Java pour des serveurs de toute taille. Gestion de projets, coordination d'équipe et communication avec les clients pour assurer une livraison conforme aux attentes et dans les délais impartis.",
  },
  {
    position: "Consultant ERP",
    company: "Charcuterie du Moulin",
    location: "Cherré-au, France",
    from: "Juin 2022",
    to: "Août 2022",
    icon: "cdm.png",
    description: "Intégration et amélioration d'un ERP en transition dans la production de l'entreprise. Collaboration avec les développeurs (PrismaSoft) du logiciel pour adapter l'outil aux besoins spécifiques de l'entreprise. Formation des employés à l'utilisation efficace de l'ERP et fourniture d'un support technique continu.",
  },
  {
    position: "Employé Commercial",
    company: "E.Leclerc",
    location: "Cherré-au, France",
    from: "Sept 2021",
    to: "Présent (Saisonnier)",
    icon: "leclerc.png",
    description: "La polyvalence et le service client sont la clé d'une expérience réussie en grande distribution. Organisation, anticipation et autonomie, tout en travaillant efficacement en équipe pour garantir la satisfaction des clients. Formation des nouveaux employés (saisonnier) sur différents postes.",
  }
]

function ExperienceItem({ experience }: { experience: typeof experienceList[0] }) {
  const [open, setOpen] = useState(false);
  const desc = experience.description ?? "";
  const needsButton = desc.length > 100;

  return (
    <div className="w-full flex items-start justify-start space-x-4 mb-6 last:mb-0">
      <Image src={'/icons/' + experience.icon} alt={experience.icon} width={900} height={900} className="w-12 h-12 rounded-full"/>
      <div className="w-full flex flex-col">
        <h3 className="text-lg font-bold">{experience.position}</h3>
        <p className="text-sm mb-1">{experience.company}, {experience.location}</p>
        <span className="text-sm text-gray-400 flex items-center gap-2">
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
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <p>{experience.from} - {experience.to}</p>
        </span>
        <div className="text-sm mt-2">
          {open ? (
            <p>{experience.description}</p>
          ) : (
            <p className="line-clamp-2">{experience.description}</p>
          )}
        </div>
        {needsButton && (
          <button onClick={() => setOpen(v => !v)} className="mt-1 text-sm text-blue-400 hover:underline self-start cursor-pointer">
            {open ? "Voir moins" : "Voir plus"}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
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
        <span className="ml-2">Expérience</span>
      </h2>
      <div className="w-full mt-4 flex flex-col">
        {experienceList.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}

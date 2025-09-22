"use client";

import Image from "next/image";
import { useState } from "react";

const educationList = [
  {
    degree: "Master Cybersécurité",
    institution: "Université de Rennes",
    location: "France",
    from: "Sept 2024",
    to: "Aout 2026",
    icon: "univ-rennes.jpg",
    description: "Dans le cadre de mon Master en Cybersécurité à l'Université de Rennes, j'approfondis mes connaissances techniques et théoriques pour devenir un expert capable de protéger les systèmes d'information contre les menaces actuelles. Ce programme met l'accent sur la sécurité des réseaux, la cryptographie, l'audit et la conformité, ainsi que sur les aspects juridiques et éthiques de la cybersécurité.",
    courses: [
        "Jeudis Cyber (conférences mensuelles)",
        "CTFs et Evènements",
        "Auteur d'un livre blanc sur le Droit en Cybersécurité",
        "Sécurité des Réseaux",
        "Cryptographie",
        "Audit et Conformité",
    ]
  },
  {
    degree: "Licence Informatique",
    institution: "Université du Mans",
    location: "France",
    from: "Sept 2021",
    to: "Juin 2024",
    icon: "univ-lemans.jpg",
    description: "Dans le cadre de ma Licence en Informatique à l'Université du Mans, j'ai acquis des compétences solides en développement logiciel, en bases de données et en gestion de projets. Ce cursus m'a permis de travailler sur des projets concrets et de collaborer avec des professionnels du secteur.",
    courses: [
        "Chef de Projet",
        "Réseaux et Systèmes",
        "Programmation Orientée Objet",
        "Programmation systèmes",
        "Algorithmique",
        "Développement Web",
        "Bases de Données",
    ]
  }
]

function EducationItem({ education }: { education: typeof educationList[0] }) {
  const [open, setOpen] = useState(false);
  const combined = `${education.description}\nCours principaux : ${education.courses.join(", ")}`;
  const needsButton = combined.length > 100;

  return (
    <div className="w-full flex items-start justify-start space-x-4 mb-6 last:mb-0">
      <Image src={'/icons/' + education.icon} alt={education.institution} width={900} height={900} className="w-12 h-12 rounded-full"/>
      <div className="w-full flex flex-col">
        <h3 className="text-lg font-bold">{education.degree}</h3>
        <p className="text-sm mb-1">{education.institution}, {education.location}</p>
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
          <p>{education.from} - {education.to}</p>
        </span>
        <div className="text-sm mt-2">
          {open ? (
            <>
              <p>{education.description}</p>
              <p className="text-sm mt-2">Cours principaux : {education.courses.join(", ")}</p>
            </>
          ) : (
            <>
              <p className="line-clamp-2">{education.description}</p>
              <p className="text-sm mt-2 line-clamp-2">Cours principaux : {education.courses.join(", ")}</p>
            </>
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

export default function Education() {
  return (
    <section className="w-full relative p-6 border border-[#333]">
      <h2 className="flex items-center text-2xl font-bold mb-6">
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
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
        <span className="ml-2">Formations</span>
      </h2>
      <div className="w-full mt-4 flex flex-col">
        {educationList.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </div>
    </section>
  );
}

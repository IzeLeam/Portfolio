"use client";

import React, { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const preview = "Étudiant en Cybersécurité à l'Université de Rennes, j'ai également 3 ans d'expérience dans le domaine informatique en tant que développeur mais aussi en tant que chef de projet. Mon expérience a été principalement acquise dans le domaine du conseil aux clients en tant qu'indépendant. Leader dynamique, je privilégie le partenariat et le travail en équipe pour atteindre les objectifs...";
  const full = (
    <>
      Étudiant en Cybersécurité à l'Université de Rennes, j'ai également 3 ans d'expérience dans le domaine informatique en tant que développeur mais aussi en tant que chef de projet. Mon expérience a été principalement acquise dans le domaine du conseil aux clients en tant qu'indépendant. Leader dynamique, je privilégie le partenariat et le travail en équipe pour atteindre les objectifs.
      <br />
      - Grande capacité à initier le changement, à le gérer et à s'y adapter
      <br />
      - Solides capacités à mettre en place des équipes mobilisées et efficaces
      <br />
      - Capable de proposer des solutions innovantes
      <br />
      - Orienté vers la satisfaction du client et la valeur ajoutée à l'entreprise
    </>
  );
  return (
    <section className="w-full relative bg-[#212121] p-6 rounded-xl border border-[#333]">
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
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M20 21a8 8 0 0 0-16 0"></path>
        </svg>
        <span className="ml-2">À propos</span>
      </h2>
      <p className="mt-4 text-justify text-sm">
        {expanded ? full : preview}
      </p>
      <button
        className="mt-2 text-sm text-blue-400 hover:underline focus:outline-none cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "Voir moins" : "Voir plus"}
      </button>
    </section>
  );
}

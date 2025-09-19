import Image from "next/image";

const experienceList = [
  {
    position: "Développeur Full-Stack & Consultant en Cybersécurité",
    company: "Micro-Entrepreneur",
    location: "Rennes, France",
    from: "Sept 2024",
    to: "Présent",
    icon: "univ-rennes.jpg",
    description: null,
  },
  {
    position: "Lead Développeur Java",
    company: "Rinaorc, Minelia and others (Freelance)",
    location: "Remote, France",
    from: "Mai 2023",
    to: "Juin 2025",
    icon: "spigot.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    position: "Consultant ERP",
    company: "Charcuterie du Moulin",
    location: "Cherré-au, France",
    from: "Juin 2022",
    to: "Août 2022",
    icon: "cdm.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    position: "Employé Commercial",
    company: "E.Leclerc",
    location: "Cherré-au, France",
    from: "Sept 2021",
    to: "Présent (Saisonnier)",
    icon: "leclerc.png",
    description: "Accueil et conseil client, gestion des stocks, réassort, caisse, mise en rayon, merchandising.",
  }
]

function ExperienceItem({ experience }: { experience: typeof experienceList[0] }) {
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
        <span className="text-sm mt-2">
          {experience.description}
        </span>
        <button className="mt-1 text-sm text-blue-400 hover:underline self-start cursor-pointer">Voir plus</button>
      </div>
    </div>
  )
}

export default function Experience() {
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

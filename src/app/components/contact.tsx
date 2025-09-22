const links = [
  { label: "Email", icon: "gmail", url: "mailto:luca.pourceau@gmail.com" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/lucaprc/",
  },
  { label: "GitHub", icon: "github", url: "https://github.com/IzeLeam" },
  {
    label: "HackTheBox",
    icon: "hackthebox",
    url: "https://app.hackthebox.com/profile/1981887",
  },
  { label: "RootMe", icon: "rootme", url: "https://www.root-me.org/izeleam" },
  { label: "Discord", icon: "discord", url: "https://discord.com/users/560917688449368076" },
];

function getIconUrl(name: string) {
  const map: Record<string, string> = {
    "linkedin": "linkedin.png",
  };
  let key = name;
  if (map[name]) return `/icons/${map[name]}`;
  else key = name.toLowerCase().replace(/\s|\./g, "").replace(/\+/g, "plus");
  return `https://cdn.simpleicons.org/${key}/FFFFFF?000000`;
}

export default function Contact() {
  return (
    <section className="w-full relative p-6 border border-[#333]">
      <h2 className="flex items-center text-2xl font-bold mb-4">
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
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        <span className="ml-2">Restons connectés</span>
      </h2>
      <ul className="flex gap-3 mb-4 ml-1">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.url} className="flex items-center">
                <img src={getIconUrl(link.icon)} alt={link.label} className="w-7 h-7 hover:scale-110 transition-transform" />
            </a>
          </li>
        ))}
      </ul>
      <small className="text-gray-400 text-sm ml-1">
        Construisons vos projets ensemble, n&apos;hésitez pas à me contacter via l&apos;un
        des moyens ci-dessus.
      </small>
    </section>
  );
}

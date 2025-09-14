const langages = [
  "JavaScript",
  "C",
  "C++",
  "Python",
  "TypeScript",
  "HTML",
  "CSS",
  "mySQL",
  "postgreSQL",
  "Bash",
  "Ruby",
  "Rust",
  "Scala",
  "Haskell",
  "Perl",
  "HTMX",
  "Next.js",
  "Assembly",
  "OpenJDK",
  "IntelliJ IDEA",
  "Tailwind CSS",
];

const cyber_tools = [
  "Wireshark",
  "Metasploit",
  "Burp Suite",
  "Kali Linux",
  "Snort",
  "Git",
  "Docker",
  "GitHub",
  "Jenkins",
  "Gradle",
  "Nginx",
  "Express",
  "Node.js",
  "Linux",
];

function getIconUrl(name: string) {
  const map: Record<string, string> = {
    "C++": "cplusplus",
    "Next.js": "nextdotjs",
    "Bash": "gnubash",
    "HTML": "html5",
    "Assembly": "assemblyscript",
    "Node.js": "nodedotjs",

    "Wireshark": "wireshark",
    "Burp Suite": "portswigger",
    "Kali Linux": "kalilinux",
    "John the Ripper": "johntheripper",
    "Aircrack-ng": "aircrackng",
    "Snort": "snort",

    "Git": "git",
    "Docker": "docker",
    "GitHub": "github",
    "Jenkins": "jenkins",
  };
  let key = name;
  if (map[name]) key = map[name];
  else key = name.toLowerCase().replace(/\s|\./g, "").replace(/\+/g, "plus");
  return `https://cdn.simpleicons.org/${key}`;
}

function InfiniteSlider({ items, speed = 30, direction = "left" }: { items: string[]; speed?: number; direction?: "left" | "right" }) {
  return (
    <div className="h-[40px] w-full m-auto overflow-hidden relative mt-6">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: "linear-gradient(to right, #212121 00%, transparent)"}} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: "linear-gradient(to left, #212121 00%, transparent)"}} />
      <div
        className="flex w-max h-full"
        style={{ minWidth: "100%", animation: `scroll${direction === "left" ? "Left" : "Right"} ${speed}s linear infinite` }}
      >
        {items.concat(items).map((name, i) => (
          <div key={i} className="flex items-center justify-center px-3">
            <img src={getIconUrl(name)} alt={name} title={name} width={36} height={36} className="object-contain mx-1 hover:scale-110 transition-transform duration-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function random() {
  return Math.random() - 0.5;
}

export default function Skills() {
  return (
    <section className="w-full bg-[#212121] p-6 rounded-xl border border-[#333]">
      <h2 className="flex items-center text-2xl font-bold mb-6 gap-2">
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
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <path d="M11 18H8a2 2 0 0 1-2-2V9"></path>
        </svg>
        <span>Compétences</span>
      </h2>
      <InfiniteSlider items={langages.sort(random)} speed={60} direction="left" />
      <InfiniteSlider items={cyber_tools.sort(random)} speed={30} direction="right" />
    </section>
  );
}

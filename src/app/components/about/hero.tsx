import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full rounded-xl aspect-[2.5/1] overflow-hidden bg-[#212121]">
            <Image
                src="/cyber1.jpg"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute inset-0 z-10"
                style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 20%, transparent 40%, rgba(0,0,0,0.7) 95%)"}}
            />
            <div className="absolute bottom-0 left-0 bg-[#212121] w-full h-1/3 z-10 border-t border-[#333]"/>
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h1 className="text-2xl font-bold mb-1 ml-36">Luca Pourceau</h1>
                <p className="text-sm text-gray-300 ml-36">Étudiant en CyberSécurité | Lead Développeur Indépendant</p>
            </div>
            <div className="z-10 rounded-full overflow-hidden w-32 h-32 border-4 border-[#212121] absolute top-1/2 -translate-y-1/6 left-6">
                <Image
                    src="/pfp.jpg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    )
}
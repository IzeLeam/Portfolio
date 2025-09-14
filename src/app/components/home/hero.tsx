"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const currentDate = () => {
  const date = new Date();
  return date
    .toLocaleDateString("fr-FR", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(/^\w/, (c) => c.toUpperCase());
};

const images = ["/cyber1.jpg", "/cyber2.jpg", "/cyber3.jpg"];
const texts = [
  "Chaque ligne de code au service de votre vision.",
  "Vos défis sont mes opportunités de créer.",
  "Parce que vos ambitions méritent la meilleure technologie.",
  "Innover sans limites, sécuriser sans compromis.",
  "Protéger, innover, anticiper : ma vision de la sécurité.",
  "Votre sérénité numérique est ma priorité.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * images.length);
        } while (images.length > 1 && next === prev);
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTyped("");
    let i = 0;
    let isErasing = false;
    let pauseTimeout: NodeJS.Timeout | null = null;

    function typeNext() {
      setTyped(texts[index].slice(0, i + 1));
      if (i < texts[index].length - 1) {
        i++;
        typingTimeout.current = setTimeout(typeNext, 30 + Math.random() * 40);
      } else {
        pauseTimeout = setTimeout(() => {
          isErasing = true;
          eraseNext();
        }, 3200);
      }
    }

    function eraseNext() {
      setTyped(texts[index].slice(0, i));
      if (i > 0) {
        i--;
        typingTimeout.current = setTimeout(eraseNext, Math.random() * 32);
      }
    }

    typeNext();
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [index]);

  return (
    <section className="relative w-full rounded-xl aspect-[2.5/1] overflow-hidden bg-[#212121]">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 z-10"
        style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 20%, transparent 40%, rgba(0,0,0,0.7) 95%)"}}
      />
      <time className="absolute flex items-center gap-4 top-6 left-6 text-md font-bold z-10">
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
        {currentDate()}
      </time>

      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative min-w-full h-full">
            <Image src={src} alt={`Slide ${i}`} fill className="object-cover" />
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-4 left-4 gap-2 flex items-center 2xl:text-3xl text-2xl z-10">
        <span>{typed}</span>
        <span className="text-2xl animate-[pulse_1s_infinite] bg-white h-full w-1">
          |
        </span>
      </div>
    </section>
  );
}

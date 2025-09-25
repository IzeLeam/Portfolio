"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { fetchJSONOnce } from '@/lib/fetchOnce';

type Project = {
  name: string;
  description: string | null;
  stars: number;
  languages: string[];
  updatedAt: string;
  url: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  const fetchedRef = useRef(false);
  const settledRef = useRef(false);
  useEffect(() => {
    if (fetchedRef.current && settledRef.current) return;
    fetchedRef.current = true;
    let cancelled = false;
    fetchJSONOnce<Project[]>('/api/github/projects')
      .then((json: Project[]) => {
        if (cancelled) return;
        settledRef.current = true;
        setProjects(json);
      })
      .catch(() => {
        if (cancelled) return;
        settledRef.current = true;
        setProjects([]);
      });
    return () => {
      cancelled = true;
      if (!settledRef.current) {
        fetchedRef.current = false;
      }
    };
  }, []);

  const isLoading = projects === null;

  return (
    <section className="w-full p-6 border border-[#333]">
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
          <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" />
          <path d="m21 21-1.9-1.9" />
          <circle cx="17" cy="17" r="3" />
        </svg>
        <span>Projets</span>
      </h2>
      <LayoutGroup>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[150px] gap-4"
        >
          {isLoading && Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#333] rounded-lg p-4 bg-[#0d1117]/60 animate-pulse"
            >
              <div className="h-5 w-1/2 bg-[#1e2732] rounded mb-3" />
              <div className="h-3 w-3/4 bg-[#1e2732] rounded" />
              <div className="flex gap-2 mt-4">
                <div className="h-5 w-12 bg-[#1e2732] rounded" />
                <div className="h-5 w-12 bg-[#1e2732] rounded" />
              </div>
            </div>
          ))}

          {!isLoading && projects && projects.map((p) => {
            const expanded = hovered === p.name && !reducedMotion.current;
            const tags = p.languages.slice(0, 3);
            return (
              <motion.div
                key={p.name}
                layout="position" // position-only to avoid transform scaling of text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseEnter={() => setHovered(p.name)}
                onMouseLeave={() => setHovered(h => (h === p.name ? null : h))}
                onFocus={() => setHovered(p.name)}
                onBlur={() => setHovered(h => (h === p.name ? null : h))}
                className={`relative border border-[#333] rounded-lg p-4 bg-[#0d1117] cursor-default overflow-hidden flex flex-col transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${expanded ? 'lg:row-span-2 shadow-xl' : 'hover:shadow-lg'} `}
                style={{
                  gridColumn: expanded ? undefined : undefined,
                }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="font-semibold text-lg leading-tight flex-1 break-words">
                    {p.name}
                    {p.stars > 0 && (
                        <span className="inline-flex items-center gap-1 text-[#c9d1d9] text-xs ml-3">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-amber-400"
                            >
                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            {p.stars}
                        </span>
                    )}
                  </h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="text-[#8b949e] hover:text-white transition-colors"
                    aria-label={`Open ${p.name} on GitHub`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14 21 3" />
                      <path d="M5 12v7a1 1 0 0 0 1 1h7" />
                    </svg>
                  </a>
                </div>
                <p className={`text-sm text-[#8b949e] ${expanded ? '' : 'line-clamp-2'}`}>
                  {p.description || 'No description'}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-[#1e2732] text-[#c9d1d9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded content */}
                {expanded && (
                  <motion.div
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-sm space-y-3 pr-1 overflow-y-auto"
                  >
                    {p.languages.length > tags.length && (
                      <div className="flex flex-wrap gap-2">
                        {p.languages.slice(3).map(l => (
                          <span
                            key={l}
                            className="text-xs px-2 py-1 rounded-md bg-[#132026] text-emerald-300/80 border border-emerald-600/30"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[#c9d1d9] text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-amber-400"
                        >
                          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        {p.stars}
                      </span>
                      <span className="text-[#8b949e] text-xs">
                        Updated {new Date(p.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </motion.div>
                )}

                {!expanded && (
                  <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,139,253,0.08),transparent_70%)]" />
                )}
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </section>
  );
}

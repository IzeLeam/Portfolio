"use client";

import React, { useEffect, useState, useRef } from "react";
import { fetchJSONOnce } from "@/lib/fetchOnce";

type ContributionDay = {
  date: string;
  count: number;
  color: string;
};

const totalContributions = (data: ContributionDay[] | null) => {
  if (!data) return 0;
  return data.reduce((sum, day) => sum + day.count, 0);
};

export default function Contributions() {
  const [data, setData] = useState<ContributionDay[] | null>(null);
  const [colorsReady, setColorsReady] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }
  }, []);

  const fetchedRef = useRef(false);
  const settledRef = useRef(false);
  useEffect(() => {
    if (fetchedRef.current && settledRef.current) return;
    fetchedRef.current = true;
    let cancelled = false;
    fetchJSONOnce<ContributionDay[]>("/api/github/contributions")
      .then((json: ContributionDay[]) => {
        if (cancelled) return;
        settledRef.current = true;
        setData(json);
        requestAnimationFrame(() => { if (!cancelled) setColorsReady(true); });
      })
      .catch(() => {
        if (cancelled) return;
        settledRef.current = true;
        setData([]);
        setColorsReady(true);
      });
    return () => {
      cancelled = true;
      if (!settledRef.current) {
        fetchedRef.current = false;
      }
    };
  }, []);

  const palette = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

  const max = data && data.length ? Math.max(...data.map((d) => d.count)) : 1;

  function levelFor(count: number) {
    if (count <= 0) return 0;
    if (max <= 0) return 0;
    const ratio = count / max;
    if (ratio >= 0.75) return 4;
    if (ratio >= 0.5) return 3;
    if (ratio >= 0.25) return 2;
    return 1;
  }

  const skeletonWeeks = 53;
  const skeletonDays = skeletonWeeks * 7;

  const cells = (data ??
    Array.from({ length: skeletonDays }, (_, i) => ({
      date: "",
      count: 0,
      color: palette[0],
    }))) as ContributionDay[];

  const showPalette = colorsReady && !reducedMotion.current;

  return (
    <section className="w-full p-6 border border-[#333]">
      <h2 className="flex items-center text-2xl font-bold mb-6 gap-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 496 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
        <span>Contributions</span>
      </h2>
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#333] scroll-right-default">
        <svg
          width="896"
          height="136"
          viewBox="0 0 896 136"
          className="react-activity-calendar__calendar"
          style={{ display: "block", overflow: "visible" }}
        >
          <g className="react-activity-calendar__legend-month">
            <text x="34" y="0" dominantBaseline="hanging" fill="currentColor">
              Oct
            </text>
            <text x="102" y="0" dominantBaseline="hanging" fill="currentColor">
              Nov
            </text>
            <text x="170" y="0" dominantBaseline="hanging" fill="currentColor">
              Dec
            </text>
            <text x="255" y="0" dominantBaseline="hanging" fill="currentColor">
              Jan
            </text>
            <text x="323" y="0" dominantBaseline="hanging" fill="currentColor">
              Feb
            </text>
            <text x="391" y="0" dominantBaseline="hanging" fill="currentColor">
              Mar
            </text>
            <text x="476" y="0" dominantBaseline="hanging" fill="currentColor">
              Apr
            </text>
            <text x="544" y="0" dominantBaseline="hanging" fill="currentColor">
              May
            </text>
            <text x="612" y="0" dominantBaseline="hanging" fill="currentColor">
              Jun
            </text>
            <text x="697" y="0" dominantBaseline="hanging" fill="currentColor">
              Jul
            </text>
            <text x="765" y="0" dominantBaseline="hanging" fill="currentColor">
              Aug
            </text>
            <text x="850" y="0" dominantBaseline="hanging" fill="currentColor">
              Sep
            </text>
          </g>
          <g>
            {cells.map((d, i) => {
              const col = Math.floor(i / 7);
              const row = i % 7;
              const targetLevel = levelFor(d.count);
              const level = showPalette ? targetLevel : 0;
              const fill = showPalette ? palette[targetLevel] : palette[0];
              const animate = showPalette && targetLevel > 0;
              const delay = animate ? Math.min((col + row * 0.1) * 15, 600) : 0;
              return (
                <rect
                  key={d.date ? d.date : i}
                  x={col * 17}
                  y={row * 17 + 20}
                  width="12"
                  height="12"
                  rx="2"
                  ry="2"
                  fill={fill}
                  data-date={d.date}
                  data-count={d.count}
                  style={{
                    stroke: "rgba(255,255,255,0.04)",
                    transition: animate ? "fill 0.6s ease" : undefined,
                    transitionDelay: animate ? `${delay}ms` : undefined,
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>
      <div className="flex items-center mt-4">
        <span className="text-sm w-48">
          {totalContributions(data)} contributions
        </span>
        <div className="text-sm text-right ml-auto">
          <span className="mx-1">Moins</span>
          <svg
            className="inline-block mx-1"
            width={palette.length * 14 - 2}
            height="12"
            viewBox={`0 0 ${palette.length * 14 - 2} 12`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {palette.map((color, i) => (
              <rect
                key={i}
                x={i * 14}
                y="0"
                width="12"
                height="12"
                rx="2"
                ry="2"
                fill={color}
              />
            ))}
          </svg>
          <span className="mx-1">Plus</span>
        </div>
      </div>
    </section>
  );
}

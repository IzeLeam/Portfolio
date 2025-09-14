"use client";

import React from "react";
import { useState } from "react";

const stats = [
	{
		value: 1,
		unit: "année(s)",
		label: "Expérience",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to top, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="12" cy="12" r="10"></circle>
				<polyline points="12 6 12 12 16 14"></polyline>
			</svg>
		),
	},
	{
		value: 20,
		unit: null,
		label: "Projets",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to top, rgb(0, 122, 223) 0%, rgb(0, 236, 188) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
				<circle cx="13" cy="12" r="2"></circle>
				<path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
				<circle cx="20" cy="19" r="2"></circle>
			</svg>
		),
	},
	{
		value: 3,
		unit: null,
		label: "CTF / Bug Bounty",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7"></path>
			</svg>
		),
	},
	{
		value: 35,
		unit: null,
		label: "Technologies",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to left, rgb(10, 207, 254) 0%, rgb(73, 90, 255) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
		),
	},
	{
		value: 18,
		unit: null,
		label: "Technologies",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to left, rgb(10, 207, 254) 0%, rgb(73, 90, 255) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
		),
	},
	{
		value: 18,
		unit: null,
		label: "Technologies",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to left, rgb(10, 207, 254) 0%, rgb(73, 90, 255) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
		),
	},
	{
		value: 18,
		unit: null,
		label: "Technologies",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to left, rgb(10, 207, 254) 0%, rgb(73, 90, 255) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
		),
	},
	{
		value: 18,
		unit: null,
		label: "Technologies",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="rounded-xl block max-w-full h-auto text-[3rem] p-2"
				style={{
					background:
						"linear-gradient(to left, rgb(10, 207, 254) 0%, rgb(73, 90, 255) 100%)",
				}}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
		),
	},
];

function easeOut(t: number) {
	return 1 - Math.pow(1 - t, 2);
}

function AnimatedNumber({ value }: { value: number }) {
	const [display, setDisplay] = React.useState(0);
	const raf = React.useRef<number | null>(null);

	React.useEffect(() => {
		let start: number | null = null;
		const duration = 3000; // ms
		function animate(ts: number) {
			if (start === null) start = ts;
			const elapsed = ts - start;
			const progress = Math.min(elapsed / duration, 1);
			const eased = easeOut(progress);
			setDisplay(Math.round(eased * value));
			if (progress < 1) {
				raf.current = requestAnimationFrame(animate);
			} else {
				setDisplay(value);
			}
		}
		raf.current = requestAnimationFrame(animate);
		return () => {
			if (raf.current !== null) {
				cancelAnimationFrame(raf.current);
			}
		};
	}, [value]);
	return <h1 className="text-3xl font-bold">{display}</h1>;
}

export default function Career() {
	const [showAll, setShowAll] = React.useState(false);
	const visibleStats = showAll ? stats : stats.slice(0, 4);
	return (
		<section className="w-full relative bg-[#212121] p-6 rounded-xl border border-[#333]">
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
					<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
					<path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"></path>
				</svg>
				<span className="ml-2">Statistiques de Carrière</span>
			</h2>
			<ul className="w-full grid grid-cols-[repeat(4,1fr)] align-start gap-4">
				{visibleStats.map((stat, i) => (
					<li
						key={i}
						className="flex flex-col gap-8 rounded-xl p-4 bg-[#333]"
					>
						<div className="flex items-center gap-3">
							{stat.icon}
							<AnimatedNumber value={stat.value} />
							{stat.unit && <span className="text-md">{stat.unit}</span>}
						</div>
						<span className="text-md">{stat.label}</span>
					</li>
				))}
			</ul>
			{stats.length > 4 && (
				<button
					className="absolute right-8 top-4 text-sm text-gray-400 mt-4 hover:underline cursor-pointer hover:text-blue-400"
					onClick={() => setShowAll((v) => !v)}
				>
					{showAll ? "Voir moins" : "Voir plus"}
				</button>
			)}
		</section>
	);
}

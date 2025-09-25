import { NextResponse } from "next/server";

interface RepoDTO {
	name: string;
	description: string | null;
	stars: number;
	languages: string[];
	updatedAt: string;
	url: string;
}

const PRIORITY_ORDER = ['E.Scan', 'GhostELFLoader', 'SecureNginx', 'DiscordLinuxUpdater', 'TiktokHorrorIntegration'];
const HIDDEN_REPOS = ['Codage', 'IzeLeam', 'StreamWaitScreen'];

export async function GET() {
  const TOKEN = process.env.GITHUB_TOKEN;
  const username = "IzeLeam";
  if (!TOKEN) {
    return NextResponse.json([], { status: 200 });
  }

  const controller = new AbortController();
  const timeout = 5000;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

	try {
		const repoRes = await fetch(
			`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
			{
				headers: {
					Authorization: `Bearer ${TOKEN}`,
					Accept: "application/vnd.github+json",
				},
				signal: controller.signal,
				cache: 'no-store'
			}
		);
		if (!repoRes.ok) return NextResponse.json([], { status: 200 });
		const repos = await repoRes.json();
		if (!Array.isArray(repos)) return NextResponse.json([], { status: 200 });

		// Base filter (public + not a fork)
		let filtered = repos.filter((r: any) => !r.private && !r.fork);

		// Apply hidden list
		if (HIDDEN_REPOS.length) {
			const hiddenSet = new Set(HIDDEN_REPOS.map(n => n.toLowerCase()));
			filtered = filtered.filter((r: any) => !hiddenSet.has(r.name.toLowerCase()));
		}

		const concurrency = 5;
		const queue: any[] = [];
		const results: RepoDTO[] = [];

		async function worker() {
			while (queue.length) {
				const repo = queue.shift();
				if (!repo) break;
				let languages: string[] = [];
				try {
					const langRes = await fetch(repo.languages_url, {
						headers: {
							Authorization: `Bearer ${TOKEN}`,
							Accept: "application/vnd.github+json",
						},
						signal: controller.signal,
					});
					if (langRes.ok) {
						const langJson = await langRes.json();
						languages = Object.keys(langJson).slice(0, 5);
					}
				} catch (_) {
					// ignore individual language fetch failures
				}
				results.push({
					name: repo.name,
					description: repo.description,
					stars: repo.stargazers_count ?? 0,
					languages,
					updatedAt: repo.updated_at,
					url: repo.html_url,
				});
			}
		}

		queue.push(...filtered);
		const workers = Array.from({ length: concurrency }, () => worker());
		await Promise.all(workers);

		// Composite ordering: priority list first (given order), remaining by updatedAt desc
		if (PRIORITY_ORDER.length) {
			const indexMap = new Map(PRIORITY_ORDER.map((name, i) => [name.toLowerCase(), i] as const));
			results.sort((a, b) => {
				const ai = indexMap.has(a.name.toLowerCase()) ? indexMap.get(a.name.toLowerCase())! : Infinity;
				const bi = indexMap.has(b.name.toLowerCase()) ? indexMap.get(b.name.toLowerCase())! : Infinity;
				if (ai !== bi) return ai - bi; // different priority buckets
				if (ai !== Infinity) return 0; // both priority: preserve declared order
				// neither priority -> updatedAt desc
				return a.updatedAt < b.updatedAt ? 1 : -1;
			});
		} else {
			// Fallback: pure updatedAt desc
			results.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
		}

		return NextResponse.json(results, { status: 200 });
	} catch (e) {
		return NextResponse.json([], { status: 200 });
	} finally {
		clearTimeout(timeoutId);
	}
}

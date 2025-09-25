import { NextResponse } from "next/server";

interface GraphQLContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}
interface GraphQLWeek {
  contributionDays?: GraphQLContributionDay[];
}
interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks?: GraphQLWeek[];
        };
      };
    };
  };
}

const query = `
    query {
      user(login: "IzeLeam") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

export async function GET() {
  const TOKEN = process.env.GITHUB_TOKEN;
  if (!TOKEN) return NextResponse.json([], { status: 200 });

  const controller = new AbortController();
  const timeout = 2500;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      signal: controller.signal,
    });

    if (!res.ok) return NextResponse.json([], { status: 200 });

    const json = (await res.json()) as GraphQLResponse;
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];

    const contributions = weeks
      .flatMap(w => w.contributionDays ?? [])
      .map(d => ({
        date: d.date,
        count: d.contributionCount ?? 0,
        color: d.color ?? '#161b22',
      }));

    return NextResponse.json(contributions);
  } catch {
    return NextResponse.json([], { status: 200 });
  } finally {
    clearTimeout(timeoutId);
  }
}

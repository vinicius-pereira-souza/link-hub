import { sql } from "@/config/db";

/*
  - [ ] = buscar lista de links ordenando por decrescente
  - [ ] = buscar link por id 
*/

export async function fetchLinkMetricsOverview(userId: string) {
  try {
    const clickAmountPromise = sql`SELECT SUM(click_amount) as total_click FROM links WHERE user_id = ${userId}`;
    const topPerformingLinkPromise = sql`SELECT id, title, url, click_amount as total_click
    FROM links WHERE user_id = ${userId} ORDER BY click_amount DESC LIMIT 1`;

    const [clickAmountResponse, topPerformingLinkResponse] = await Promise.all([
      clickAmountPromise,
      topPerformingLinkPromise,
    ]);

    return {
      data: {
        clicks: clickAmountResponse[0] ?? null,
        topLink: topPerformingLinkResponse[0] ?? null,
      },
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch metrics overview data.");
  }
}

export async function fetchSearchListOfLinksByFilter(
  userid: string,
  search = "",
) {
  const searchPattern: string = `%${search}%`;

  try {
    const rowsLinksPromise =
      await sql`SELECT id, title, url, click_amount as total_click
      FROM links WHERE user_id = ${userid} AND
      is_active = true AND title ILIKE ${searchPattern}
      ORDER BY total_click DESC`;

    return {
      data: rowsLinksPromise ?? [],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch metrics overview data.");
  }
}

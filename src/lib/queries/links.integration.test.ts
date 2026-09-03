import { fetchLinkMetricsOverview } from "./links.sql";

const userId = "e6828746-e7a7-4f8d-ba87-b9329d6d5a54";

describe("Link Queries (Neon Test Branch)", () => {
  it(`should fetch the data for the click count and most-clicked link card.`, async () => {
    const { data } = await fetchLinkMetricsOverview(userId);

    expect(data).toBeDefined();
    expect(data.clicks).toMatchObject({
      total_click: expect.any(String),
    });
    expect(data.topLink).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      url: expect.any(String),
      total_click: expect.any(Number),
    });
  });
});

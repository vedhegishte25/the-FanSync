import apiClient from "@/lib/apiClient";

export async function fetchLiveFootballMatches() {
  const response = await apiClient.get("/football/live");
  return response.data;
}

export async function fetchFootballFixtures(
  leagueName: string,
  season: number = 2024
) {
  const response = await apiClient.get(
    `/football/fixtures/${leagueName}/${season}`
  );
  return response.data;
}

export async function fetchFootballStandings(
  leagueName: string,
  season: number = 2024
) {
  const response = await apiClient.get(
    `/football/standings/${leagueName}/${season}`
  );
  return response.data;
}
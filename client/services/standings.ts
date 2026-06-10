import apiClient from "@/lib/apiClient";

export async function fetchStandingsByLeague(
  leagueName: string,
  season: number = 2024
) {
  const response = await apiClient.get(
    `/standings/${leagueName}?season=${season}`
  );
  return response.data;
}

export async function fetchAllStandings(season: number = 2024) {
  const response = await apiClient.get(`/standings?season=${season}`);
  return response.data;
}
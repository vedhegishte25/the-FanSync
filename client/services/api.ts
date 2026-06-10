import apiClient from "@/lib/apiClient";

export async function fetchLiveMatches() {
  const response = await apiClient.get("/live");
  return response.data;
}

export async function fetchLiveFootball() {
  const response = await apiClient.get("/live/football");
  return response.data;
}

export async function fetchLiveCricket() {
  const response = await apiClient.get("/live/cricket");
  return response.data;
}

export async function fetchAllNews() {
  const response = await apiClient.get("/news");
  return response.data;
}

export async function fetchAllInsights() {
  const response = await apiClient.get("/insights");
  return response.data;
}

export async function fetchAllStandings(season: number = 2024) {
  const response = await apiClient.get(`/standings?season=${season}`);
  return response.data;
}
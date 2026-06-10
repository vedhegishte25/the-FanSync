import apiClient from "@/lib/apiClient";

export async function fetchLiveCricketMatches() {
  const response = await apiClient.get("/cricket/live");
  return response.data;
}

export async function fetchCricketMatchInfo(matchId: string) {
  const response = await apiClient.get(`/cricket/match/${matchId}`);
  return response.data;
}

export async function fetchCricketSeries() {
  const response = await apiClient.get("/cricket/series");
  return response.data;
}
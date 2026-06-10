import apiClient from "@/lib/apiClient";

export async function fetchAllNews() {
  const response = await apiClient.get("/news");
  return response.data;
}

export async function fetchFootballNews() {
  const response = await apiClient.get("/news/football");
  return response.data;
}

export async function fetchCricketNews() {
  const response = await apiClient.get("/news/cricket");
  return response.data;
}
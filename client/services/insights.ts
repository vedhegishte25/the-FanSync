import apiClient from "@/lib/apiClient";

export async function fetchInsights() {
  const response = await apiClient.get("/insights");
  return response.data;
}
"use client";

import Spinner from "@/components/common/Spinner";
import StandingsTable from "@/components/standings/StandingsTable";
import { fetchStandingsByLeague } from "@/services/standings";
import { useEffect, useState } from "react";

const leagues = [
  { name: "Premier League", slug: "premier_league", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England" },
  { name: "La Liga", slug: "la_liga", flag: "🇪🇸", country: "Spain" },
  { name: "Serie A", slug: "serie_a", flag: "🇮🇹", country: "Italy" },
  { name: "Bundesliga", slug: "bundesliga", flag: "🇩🇪", country: "Germany" },
  { name: "Ligue 1", slug: "ligue_1", flag: "🇫🇷", country: "France" },
  { name: "MLS", slug: "mls", flag: "🇺🇸", country: "USA" },
  { name: "Champions League", slug: "champions_league", flag: "🌍", country: "Europe" },
];

export default function StandingsPage() {
  const [selected, setSelected] = useState("premier_league");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchStandingsByLeague(selected, 2024);
        setData(result);
      } catch (err) {
        setError("Failed to fetch standings.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [selected]);

  const selectedLeague = leagues.find((l) => l.slug === selected);

  return (
    <div>
      {/* Header */}
      <div style={{
        marginBottom: "28px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "28px" }}>🏆</span>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
            Standings
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
          League tables from top football competitions
        </p>
      </div>

      {/* Two column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "20px" }}>

        {/* Left — League selector */}
        <div style={{
          background: "white", borderRadius: "12px",
          border: "1px solid #f1f5f9",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          overflow: "hidden",
          height: "fit-content",
        }}>
          <div style={{
            padding: "14px 20px",
            borderBottom: "1px solid #f8fafc",
          }}>
            <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
              Competitions
            </span>
          </div>
          {leagues.map((league) => (
            <div
              key={league.slug}
              onClick={() => setSelected(league.slug)}
              style={{
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderBottom: "1px solid #f8fafc",
                cursor: "pointer",
                transition: "all 0.15s ease",
                background: selected === league.slug
                  ? "linear-gradient(90deg, #f0fdf4, #f8fafc)"
                  : "transparent",
                borderLeft: selected === league.slug
                  ? "3px solid #22c55e"
                  : "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (selected !== league.slug)
                  (e.currentTarget as HTMLDivElement).style.background = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                if (selected !== league.slug)
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
              }}
            >
              <span style={{ fontSize: "18px" }}>{league.flag}</span>
              <div>
                <p style={{
                  margin: 0, fontSize: "13px",
                  fontWeight: selected === league.slug ? "700" : "500",
                  color: selected === league.slug ? "#15803d" : "#1e293b",
                }}>
                  {league.name}
                </p>
                <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
                  {league.country}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — Table */}
        <div>
          <div style={{
            background: "white", borderRadius: "12px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}>
            <div style={{
              padding: "14px 20px",
              borderBottom: "1px solid #f8fafc",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <span style={{ fontSize: "20px" }}>{selectedLeague?.flag}</span>
              <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
                {selectedLeague?.name}
              </span>
              <span style={{
                marginLeft: "auto",
                fontSize: "12px", color: "#94a3b8",
              }}>
                2024/25 Season
              </span>
            </div>

            <div style={{ padding: "12px" }}>
              {loading && <Spinner />}
              {error && (
                <div style={{
                  background: "#fef2f2", border: "1px solid #fecaca",
                  borderRadius: "12px", padding: "16px 20px",
                  color: "#ef4444", fontSize: "14px",
                }}>
                  {error} — API quota may have been reached. Try again tomorrow.
                </div>
              )}
              {!loading && !error && data && (
                <StandingsTable
                  standings={data}
                  leagueName={selectedLeague?.name ?? selected}
                />
              )}
              {!loading && !error && !data && (
                <div style={{ padding: "32px", textAlign: "center" }}>
                  <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                    No standings available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import Spinner from "@/components/common/Spinner";
import FootballCard from "@/components/football/FootballCard";
import { useFootball } from "@/hooks/useFootball";
import Link from "next/link";

const leagues = [
  { name: "Premier League", slug: "premier_league", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England" },
  { name: "La Liga", slug: "la_liga", flag: "🇪🇸", country: "Spain" },
  { name: "Serie A", slug: "serie_a", flag: "🇮🇹", country: "Italy" },
  { name: "Bundesliga", slug: "bundesliga", flag: "🇩🇪", country: "Germany" },
  { name: "Ligue 1", slug: "ligue_1", flag: "🇫🇷", country: "France" },
  { name: "MLS", slug: "mls", flag: "🇺🇸", country: "USA" },
  { name: "Champions League", slug: "champions_league", flag: "🌍", country: "Europe" },
  { name: "FIFA World Cup", slug: "fifa_world_cup", flag: "🏆", country: "International" },
];

export default function FootballPage() {
  const { data, loading, error } = useFootball();

  return (
    <div>
      {/* Header */}
      <div style={{
        marginBottom: "28px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "28px" }}>⚽</span>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
            Football
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
          Live scores, fixtures and standings from top leagues
        </p>
      </div>

      {/* Two column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "20px" }}>

        {/* Left — Live matches */}
        <div>
          <div style={{
            background: "white", borderRadius: "12px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            overflow: "hidden",
            marginBottom: "16px",
          }}>
            <div style={{
              padding: "14px 20px",
              borderBottom: "1px solid #f8fafc",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <div style={{
                width: "8px", height: "8px",
                background: "#ef4444", borderRadius: "50%",
                animation: "pulse 2s infinite",
              }} />
              <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
                Live Matches
              </span>
              {data?.length > 0 && (
                <span style={{
                  background: "#dcfce7", color: "#16a34a",
                  fontSize: "11px", fontWeight: "700",
                  padding: "2px 8px", borderRadius: "999px",
                  marginLeft: "auto",
                }}>
                  {data.length} live
                </span>
              )}
            </div>

            <div style={{ padding: "12px" }}>
              {loading && <Spinner />}
              {error && (
                <p style={{ color: "#ef4444", fontSize: "14px", padding: "12px" }}>{error}</p>
              )}
              {!loading && !error && data?.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {data.map((match: any, index: number) => (
                    <FootballCard key={index} match={match} />
                  ))}
                </div>
              ) : (
                !loading && (
                  <div style={{ padding: "32px", textAlign: "center" }}>
                    <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                      No live football matches right now
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right — Leagues */}
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
            }}>
              <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
                🏆 Leagues & Cups
              </span>
            </div>

            {leagues.map((league, i) => (
              <Link key={i} href={`/football/leagues/${league.slug}`}>
                <div style={{
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #f8fafc",
                  cursor: "pointer",
                  transition: "background 0.15s ease",
                  background: league.slug === "fifa_world_cup"
                    ? "linear-gradient(90deg, rgba(240,192,48,0.04), transparent)"
                    : "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = league.slug === "fifa_world_cup"
                    ? "linear-gradient(90deg, rgba(240,192,48,0.04), transparent)"
                    : "transparent";
                }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>{league.flag}</span>
                    <div>
                      <p style={{
                        margin: 0, fontSize: "13px", fontWeight: "600",
                        color: league.slug === "fifa_world_cup" ? "#b45309" : "#1e293b",
                      }}>
                        {league.name}
                      </p>
                      <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
                        {league.country}
                      </p>
                    </div>
                  </div>
                  <span style={{ color: "#cbd5e1", fontSize: "14px" }}>›</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
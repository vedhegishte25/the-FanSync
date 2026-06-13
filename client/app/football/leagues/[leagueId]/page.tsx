"use client";

import Spinner from "@/components/common/Spinner";
import WorldCupSplash from "@/components/football/WorldCupSplash";
import MatchCard from "@/components/match/MatchCard";
import { fetchFootballFixtures } from "@/services/football";
import { use, useEffect, useState } from "react";

const leagueMeta: Record<string, {
  name: string;
  flag: string;
  desc: string;
  isWorldCup?: boolean;
}> = {
  fifa_world_cup: {
    name: "FIFA World Cup 2026",
    flag: "",
    desc: "USA · Canada · Mexico",
    isWorldCup: true,
  },
  premier_league: { name: "Premier League", flag: "", desc: "England" },
  la_liga: { name: "La Liga", flag: "", desc: "Spain" },
  serie_a: { name: "Serie A", flag: "", desc: "Italy" },
  bundesliga: { name: "Bundesliga", flag: "", desc: "Germany" },
  ligue_1: { name: "Ligue 1", flag: "", desc: "France" },
  mls: { name: "MLS", flag: "", desc: "USA" },
  champions_league: { name: "Champions League", flag: "", desc: "Europe" },
};

const rounds = [
  "Group Stage",
  "Round of 32",
  "Round of 16",
  "Quarter Finals",
  "Semi Finals",
  "Final",
];

export default function LeaguePage({
  params,
}: {
  params: Promise<{ leagueId: string }>;
}) {
  const { leagueId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRound, setSelectedRound] = useState("Group Stage");

  const meta = leagueMeta[leagueId] ?? {
    name: leagueId.replace(/_/g, " "),
    flag: "",
    desc: "Football",
  };

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const season = leagueId === "fifa_world_cup" ? 2026 : 2024;
        const result = await fetchFootballFixtures(leagueId, season);
        setData(result);
      } catch (err) {
        setError("Failed to fetch fixtures.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [leagueId]);

  if (meta.isWorldCup) {
    return (
      <div>
        <WorldCupSplash />

        {/* Hero Banner */}
        <div style={{
          background: "linear-gradient(160deg, #0a0a0a 0%, #0d1f3c 50%, #0a0a0a 100%)",
          borderRadius: "20px",
          padding: "48px 40px",
          marginBottom: "28px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(240,192,48,0.12)",
        }}>
          {/* Top gold line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #f0c030, #fbbf24, transparent)",
          }} />

          {/* Grid pattern */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          {/* Glow */}
          <div style={{
            position: "absolute", right: "-60px", top: "-60px",
            width: "350px", height: "350px",
            background: "radial-gradient(circle, rgba(240,192,48,0.06) 0%, transparent 70%)",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Trophy SVG inline */}
            <div style={{ marginBottom: "24px" }}>
              <svg width="48" height="60" viewBox="0 0 80 100" fill="none">
                <defs>
                  <linearGradient id="trophyGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f0c030" />
                    <stop offset="100%" stopColor="#b8860b" />
                  </linearGradient>
                </defs>
                <path d="M20 8 L60 8 L55 50 Q40 58 25 50 Z" fill="url(#trophyGrad2)" />
                <path d="M20 12 Q8 12 8 26 Q8 38 22 40" stroke="url(#trophyGrad2)" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M60 12 Q72 12 72 26 Q72 38 58 40" stroke="url(#trophyGrad2)" strokeWidth="4" fill="none" strokeLinecap="round" />
                <rect x="34" y="50" width="12" height="20" fill="url(#trophyGrad2)" />
                <rect x="22" y="70" width="36" height="6" rx="2" fill="url(#trophyGrad2)" />
                <rect x="18" y="76" width="44" height="8" rx="2" fill="url(#trophyGrad2)" />
              </svg>
            </div>

            <p style={{
              margin: "0 0 8px",
              fontSize: "12px", fontWeight: "700",
              letterSpacing: "6px", color: "#64748b",
              textTransform: "uppercase",
            }}>
              FIFA
            </p>

            <h1 style={{
              margin: "0 0 4px",
              fontSize: "42px", fontWeight: "900",
              letterSpacing: "-1px", lineHeight: 1,
              background: "linear-gradient(135deg, #ffffff, #e2e8f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              WORLD CUP
            </h1>

            <h2 style={{
              margin: "0 0 20px",
              fontSize: "64px", fontWeight: "900",
              letterSpacing: "-3px", lineHeight: 0.9,
              background: "linear-gradient(90deg, #f0c030, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              2026
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
              {["USA", "CANADA", "MEXICO"].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: "700",
                    letterSpacing: "3px", color: "#475569",
                  }}>
                    {c}
                  </span>
                  {i < 2 && (
                    <div style={{
                      width: "4px", height: "4px",
                      borderRadius: "50%", background: "#f0c030",
                    }} />
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: "Teams", value: "48" },
                { label: "Matches", value: "104" },
                { label: "Groups", value: "12" },
                { label: "Host Cities", value: "16" },
                { label: "Start Date", value: "Jun 11" },
                { label: "Final", value: "Jul 19" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  padding: "10px 16px",
                  textAlign: "center",
                  minWidth: "80px",
                }}>
                  <p style={{
                    margin: 0, fontSize: "18px", fontWeight: "800",
                    background: "linear-gradient(90deg, #f0c030, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    margin: 0, fontSize: "10px",
                    color: "#475569", letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Round selector */}
        <div style={{
          background: "white", borderRadius: "12px",
          border: "1px solid #f1f5f9",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          padding: "6px",
          marginBottom: "20px",
          display: "flex", gap: "4px", flexWrap: "wrap",
        }}>
          {rounds.map((round) => (
            <button
              key={round}
              onClick={() => setSelectedRound(round)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "12px",
                transition: "all 0.2s ease",
                background: selectedRound === round ? "#0f172a" : "transparent",
                color: selectedRound === round ? "white" : "#6b7280",
                letterSpacing: "0.3px",
              }}
            >
              {round}
            </button>
          ))}
        </div>

        {/* Fixtures */}
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
            justifyContent: "space-between",
            background: "linear-gradient(90deg, #fafafa, white)",
          }}>
            <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
              {selectedRound}
            </span>
            {data?.length > 0 && (
              <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                {data.length} matches
              </span>
            )}
          </div>

          <div style={{ padding: "12px" }}>
            {loading && <Spinner />}
            {error && (
              <div style={{
                background: "#fef2f2", border: "1px solid #fecaca",
                borderRadius: "12px", padding: "16px 20px",
                color: "#ef4444", fontSize: "14px",
              }}>
                API quota reached. Fixtures will load after midnight UTC.
              </div>
            )}
            {!loading && !error && data?.length > 0 ? (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "10px",
              }}>
                {data.map((match: any, index: number) => (
                  <MatchCard key={index} match={match} />
                ))}
              </div>
            ) : (
              !loading && (
                <div style={{
                  padding: "48px 32px", textAlign: "center",
                }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: "#f8fafc", borderRadius: "12px",
                    display: "flex", alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "24px",
                  }}>
                    <svg width="24" height="24" viewBox="0 0 80 100" fill="none">
                      <defs>
                        <linearGradient id="tg3" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f0c030" />
                          <stop offset="100%" stopColor="#b8860b" />
                        </linearGradient>
                      </defs>
                      <path d="M20 8 L60 8 L55 50 Q40 58 25 50 Z" fill="url(#tg3)" />
                      <path d="M20 12 Q8 12 8 26 Q8 38 22 40" stroke="url(#tg3)" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <path d="M60 12 Q72 12 72 26 Q72 38 58 40" stroke="url(#tg3)" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <rect x="34" y="50" width="12" height="20" fill="url(#tg3)" />
                      <rect x="22" y="70" width="36" height="6" rx="2" fill="url(#tg3)" />
                      <rect x="18" y="76" width="44" height="8" rx="2" fill="url(#tg3)" />
                    </svg>
                  </div>
                  <p style={{ margin: "0 0 4px", fontWeight: "600", fontSize: "14px", color: "#374151" }}>
                    Fixtures loading soon
                  </p>
                  <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>
                    API quota resets at midnight UTC
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  // Regular league page
  return (
    <div>
      <div style={{
        marginBottom: "28px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
        display: "flex", alignItems: "center", gap: "12px",
      }}>
        <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
          {meta.name}
        </h1>
        <span style={{ fontSize: "13px", color: "#94a3b8" }}>{meta.desc}</span>
      </div>

      <div style={{
        background: "white", borderRadius: "12px",
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "14px 20px",
          borderBottom: "1px solid #f8fafc",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
            Fixtures & Results
          </span>
          {data?.length > 0 && (
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>
              {data.length} matches
            </span>
          )}
        </div>

        <div style={{ padding: "12px" }}>
          {loading && <Spinner />}
          {error && (
            <div style={{
              background: "#fef2f2", border: "1px solid #fecaca",
              borderRadius: "12px", padding: "16px 20px",
              color: "#ef4444", fontSize: "14px",
            }}>
              {error}
            </div>
          )}
          {!loading && !error && data?.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "10px",
            }}>
              {data.map((match: any, index: number) => (
                <MatchCard key={index} match={match} />
              ))}
            </div>
          ) : (
            !loading && (
              <div style={{ padding: "32px", textAlign: "center" }}>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                  No fixtures available
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
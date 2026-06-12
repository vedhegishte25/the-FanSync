"use client";

import Spinner from "@/components/common/Spinner";
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
    flag: "🏆",
    desc: "USA · Canada · Mexico",
    isWorldCup: true,
  },
  premier_league: { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", desc: "England" },
  la_liga: { name: "La Liga", flag: "🇪🇸", desc: "Spain" },
  serie_a: { name: "Serie A", flag: "🇮🇹", desc: "Italy" },
  bundesliga: { name: "Bundesliga", flag: "🇩🇪", desc: "Germany" },
  ligue_1: { name: "Ligue 1", flag: "🇫🇷", desc: "France" },
  mls: { name: "MLS", flag: "🇺🇸", desc: "USA" },
  champions_league: { name: "Champions League", flag: "🌍", desc: "Europe" },
};

export default function LeaguePage({
  params,
}: {
  params: Promise<{ leagueId: string }>;
}) {
  const { leagueId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const meta = leagueMeta[leagueId] ?? {
    name: leagueId.replace(/_/g, " "),
    flag: "⚽",
    desc: "Football",
  };

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchFootballFixtures(leagueId, 2026);
        setData(result);
      } catch (err) {
        setError("Failed to fetch fixtures.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [leagueId]);

  return (
    <div>
      {/* World Cup Hero */}
      {meta.isWorldCup ? (
        <div style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0f172a 100%)",
          borderRadius: "16px",
          padding: "40px 36px",
          marginBottom: "28px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(240,192,48,0.15)",
        }}>
          {/* Top gold line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #f0c030, #fbbf24, transparent)",
          }} />

          {/* Ambient glow */}
          <div style={{
            position: "absolute", right: "-40px", top: "-40px",
            width: "300px", height: "300px",
            background: "radial-gradient(circle, rgba(240,192,48,0.06) 0%, transparent 70%)",
          }} />

          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span style={{ fontSize: "52px" }}>⚽</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <span style={{
                    background: "linear-gradient(90deg, #f0c030, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "28px", fontWeight: "900",
                    letterSpacing: "-0.5px",
                  }}>
                    FIFA World Cup 2026
                  </span>
                  <span style={{
                    background: "#ef4444", color: "white",
                    fontSize: "10px", fontWeight: "700",
                    padding: "3px 10px", borderRadius: "999px",
                    letterSpacing: "1px",
                    animation: "pulse 2s infinite",
                  }}>
                    LIVE
                  </span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
                  🇺🇸 USA · 🇨🇦 Canada · 🇲🇽 Mexico
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { label: "Teams", value: "48" },
                { label: "Matches", value: "104" },
                { label: "Groups", value: "12" },
                { label: "Host Cities", value: "16" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  textAlign: "center",
                }}>
                  <p style={{
                    margin: 0, fontSize: "22px", fontWeight: "800",
                    background: "linear-gradient(90deg, #f0c030, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ margin: 0, fontSize: "11px", color: "#64748b", letterSpacing: "1px" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Regular League Header */
        <div style={{
          marginBottom: "28px",
          paddingBottom: "20px",
          borderBottom: "1px solid #f1f5f9",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <span style={{ fontSize: "28px" }}>{meta.flag}</span>
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
              {meta.name}
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>{meta.desc}</p>
        </div>
      )}

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
              {error} — API quota may have been reached.
            </div>
          )}

          {!loading && !error && data?.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
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
                  No fixtures available — API quota may have reset
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
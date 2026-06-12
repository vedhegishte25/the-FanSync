"use client";

import SplashScreen from "@/components/common/SplashScreen";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [activeTab, setActiveTab] = useState<"football" | "cricket">("football");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const now = new Date();
    const start = new Date("2026-06-13");
    const end = new Date("2026-07-20T12:00:00");
    setShowBanner(now >= start && now <= end);
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}>
      <SplashScreen />

      {/* World Cup Banner */}
      {showBanner && (
        <Link href="/football/leagues/fifa_world_cup">
          <div style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
            borderRadius: "12px",
            padding: "20px 28px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            border: "1px solid rgba(240,192,48,0.2)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #f0c030, transparent)",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "36px" }}>⚽</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    background: "linear-gradient(90deg, #f0c030, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "20px", fontWeight: "800",
                  }}>FIFA World Cup 2026</span>
                  <span style={{
                    background: "#ef4444", color: "white",
                    fontSize: "9px", fontWeight: "700",
                    padding: "2px 8px", borderRadius: "999px",
                    letterSpacing: "1px",
                  }}>LIVE NOW</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "13px", margin: "4px 0 0" }}>
                  USA · Canada · Mexico — Click to follow every match
                </p>
              </div>
            </div>
            <span style={{ color: "#f0c030", fontSize: "20px" }}>→</span>
          </div>
        </Link>
      )}

      {/* Main Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "20px" }}>

        {/* Left — Main Content */}
        <div>
          {/* Sport Tabs */}
          <div style={{
            display: "flex",
            gap: "4px",
            background: "white",
            borderRadius: "12px",
            padding: "6px",
            marginBottom: "16px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}>
            {(["football", "cricket"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  background: activeTab === tab ? "#111827" : "transparent",
                  color: activeTab === tab ? "white" : "#6b7280",
                }}
              >
                {tab === "football" ? "⚽ Football" : "🏏 Cricket"}
              </button>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{
            background: "white",
            borderRadius: "12px",
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
              justifyContent: "space-between",
            }}>
              <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>
                {activeTab === "football" ? "⚽ Football" : "🏏 Cricket"}
              </span>
              <Link href={activeTab === "football" ? "/football" : "/cricket"}>
                <span style={{ fontSize: "12px", color: "#22c55e", fontWeight: "600", cursor: "pointer" }}>
                  View all →
                </span>
              </Link>
            </div>

            {activeTab === "football" ? (
              <>
                {[
                  { label: "🔴 Live Matches", href: "/live", desc: "All ongoing matches" },
                  { label: "🏆 FIFA World Cup", href: "/football/leagues/fifa_world_cup", desc: "USA · Canada · Mexico 2026" },
                  { label: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League", href: "/football/leagues/premier_league", desc: "England top flight" },
                  { label: "🇪🇸 La Liga", href: "/football/leagues/la_liga", desc: "Spain top flight" },
                  { label: "🇩🇪 Bundesliga", href: "/football/leagues/bundesliga", desc: "Germany top flight" },
                  { label: "🇮🇹 Serie A", href: "/football/leagues/serie_a", desc: "Italy top flight" },
                  { label: "🇫🇷 Ligue 1", href: "/football/leagues/ligue_1", desc: "France top flight" },
                  { label: "🌍 Champions League", href: "/football/leagues/champions_league", desc: "Europe's elite" },
                ].map((item, i) => (
                  <Link key={i} href={item.href}>
                    <div style={{
                      padding: "12px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #f8fafc",
                      cursor: "pointer",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div>
                        <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1e293b" }}>
                          {item.label}
                        </p>
                        <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>{item.desc}</p>
                      </div>
                      <span style={{ color: "#cbd5e1", fontSize: "14px" }}>›</span>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {[
                  { label: "🔴 Live Matches", href: "/live", desc: "All ongoing cricket matches" },
                  { label: "🏏 All Series", href: "/cricket/series", desc: "Ongoing and upcoming series" },
                  { label: "🌍 Test Matches", href: "/cricket", desc: "International Tests" },
                  { label: "🏆 ODI Matches", href: "/cricket", desc: "One Day Internationals" },
                  { label: "⚡ T20 Matches", href: "/cricket", desc: "Twenty20 Internationals" },
                ].map((item, i) => (
                  <Link key={i} href={item.href}>
                    <div style={{
                      padding: "12px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #f8fafc",
                      cursor: "pointer",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div>
                        <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1e293b" }}>
                          {item.label}
                        </p>
                        <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>{item.desc}</p>
                      </div>
                      <span style={{ color: "#cbd5e1", fontSize: "14px" }}>›</span>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Standings shortcut */}
          <Link href="/standings">
            <div style={{
              background: "white",
              borderRadius: "12px",
              border: "1px solid #f1f5f9",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "#22c55e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "#f1f5f9";
            }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "24px" }}>🏆</span>
                <div>
                  <p style={{ margin: 0, fontWeight: "700", fontSize: "14px", color: "#111827" }}>
                    League Standings
                  </p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
                    Premier League, La Liga, Serie A and more
                  </p>
                </div>
              </div>
              <span style={{ color: "#22c55e", fontWeight: "700", fontSize: "14px" }}>View →</span>
            </div>
          </Link>
        </div>

        {/* Right Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* News */}
          <div style={{
            background: "white",
            borderRadius: "12px",
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
              <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>📰 Latest News</span>
              <Link href="/news">
                <span style={{ fontSize: "12px", color: "#22c55e", fontWeight: "600", cursor: "pointer" }}>
                  All news →
                </span>
              </Link>
            </div>
            {[
              "World Cup 2026 Preview: Group Stage Analysis",
              "Cricket: Latest Series Updates",
              "Transfer Window: Top Moves This Summer",
              "Champions League: Next Season Preview",
            ].map((headline, i) => (
              <Link href="/news" key={i}>
                <div style={{
                  padding: "12px 20px",
                  borderBottom: "1px solid #f8fafc",
                  cursor: "pointer",
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <p style={{
                    margin: 0, fontSize: "13px", fontWeight: "500",
                    color: "#1e293b", lineHeight: "1.4",
                  }}>
                    {headline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Insights */}
          <div style={{
            background: "white",
            borderRadius: "12px",
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
              <span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>📊 Insights</span>
              <Link href="/insights">
                <span style={{ fontSize: "12px", color: "#22c55e", fontWeight: "600", cursor: "pointer" }}>
                  View all →
                </span>
              </Link>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
                Live match insights and stats refresh every 2 hours. Click below to view the latest updates.
              </p>
              <Link href="/insights">
                <div style={{
                  marginTop: "12px",
                  padding: "10px 16px",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#16a34a",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#dcfce7")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f0fdf4")}
                >
                  View Live Insights →
                </div>
              </Link>
            </div>
          </div>

          {/* FanSync tag */}
          <div style={{
            background: "linear-gradient(135deg, #111827, #1f2937)",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
          }}>
            <p style={{ color: "#22c55e", fontWeight: "800", fontSize: "20px", margin: "0 0 4px" }}>
              Fan<span style={{ color: "white" }}>Sync</span>
            </p>
            <p style={{ color: "#6b7280", fontSize: "12px", margin: 0, letterSpacing: "2px" }}>
              LIVE SPORTS. REAL TIME.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
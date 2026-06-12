"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import { useCricket } from "@/hooks/useCricket";
import Link from "next/link";

const matchTypes = [
  { label: "All Series", href: "/cricket/series", emoji: "🏏", desc: "All ongoing and upcoming series" },
  { label: "Test Matches", href: "/cricket", emoji: "🎩", desc: "5 day international cricket" },
  { label: "ODI Matches", href: "/cricket", emoji: "🌍", desc: "One Day Internationals" },
  { label: "T20 Matches", href: "/cricket", emoji: "⚡", desc: "Twenty20 Internationals" },
];

const topVenues = [
  { name: "Lord's Cricket Ground", location: "London, England", emoji: "🏟️" },
  { name: "Melbourne Cricket Ground", location: "Melbourne, Australia", emoji: "🏟️" },
  { name: "Eden Gardens", location: "Kolkata, India", emoji: "🏟️" },
  { name: "Wankhede Stadium", location: "Mumbai, India", emoji: "🏟️" },
];

export default function CricketPage() {
  const { data, loading, error } = useCricket();

  return (
    <div>
      {/* Header */}
      <div style={{
        marginBottom: "28px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "28px" }}>🏏</span>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
            Cricket
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
          Live scores, series and scorecards from international cricket
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
                  background: "#dbeafe", color: "#1d4ed8",
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
                    <CricketCard key={index} match={match} />
                  ))}
                </div>
              ) : (
                !loading && (
                  <div style={{ padding: "32px", textAlign: "center" }}>
                    <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                      No live cricket matches right now
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Match Types */}
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
                🏏 Match Types
              </span>
            </div>
            {matchTypes.map((type, i) => (
              <Link key={i} href={type.href}>
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
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>{type.emoji}</span>
                    <div>
                      <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: "#1e293b" }}>
                        {type.label}
                      </p>
                      <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
                        {type.desc}
                      </p>
                    </div>
                  </div>
                  <span style={{ color: "#cbd5e1", fontSize: "14px" }}>›</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Top Venues */}
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
                🏟️ Iconic Venues
              </span>
            </div>
            {topVenues.map((venue, i) => (
              <div key={i} style={{
                padding: "12px 20px",
                borderBottom: "1px solid #f8fafc",
              }}>
                <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: "#1e293b" }}>
                  {venue.emoji} {venue.name}
                </p>
                <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
                  {venue.location}
                </p>
              </div>
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
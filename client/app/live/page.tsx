"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import MatchCard from "@/components/match/MatchCard";
import { useLiveScores } from "@/hooks/useLiveScores";

export default function LivePage() {
  const { data, loading, error } = useLiveScores();

  return (
    <div>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "24px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <div style={{
              width: "10px", height: "10px",
              background: "#ef4444", borderRadius: "50%",
              animation: "pulse 2s infinite",
            }} />
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
              Live Matches
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
            Updates every 2 hours
          </p>
        </div>
        <div style={{
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "999px",
          padding: "6px 14px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#ef4444",
          letterSpacing: "1px",
        }}>
          ● LIVE
        </div>
      </div>

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

      {!loading && !error && (
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Football */}
          <div>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "20px" }}>⚽</span>
                <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "#0f172a" }}>
                  Football
                </h2>
                {data?.football?.length > 0 && (
                  <span style={{
                    background: "#dcfce7", color: "#16a34a",
                    fontSize: "11px", fontWeight: "700",
                    padding: "2px 8px", borderRadius: "999px",
                  }}>
                    {data.football.length} live
                  </span>
                )}
              </div>
            </div>

            {data?.football?.length > 0 ? (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "12px",
              }}>
                {data.football.map((match: any, index: number) => (
                  <MatchCard key={index} match={match} />
                ))}
              </div>
            ) : (
              <div style={{
                background: "white", borderRadius: "12px",
                border: "1px solid #f1f5f9",
                padding: "32px", textAlign: "center",
              }}>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                  No live football matches right now
                </p>
              </div>
            )}
          </div>

          {/* Cricket */}
          <div>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "20px" }}>🏏</span>
                <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "#0f172a" }}>
                  Cricket
                </h2>
                {data?.cricket?.length > 0 && (
                  <span style={{
                    background: "#dbeafe", color: "#1d4ed8",
                    fontSize: "11px", fontWeight: "700",
                    padding: "2px 8px", borderRadius: "999px",
                  }}>
                    {data.cricket.length} live
                  </span>
                )}
              </div>
            </div>

            {data?.cricket?.length > 0 ? (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "12px",
              }}>
                {data.cricket.map((match: any, index: number) => (
                  <CricketCard key={index} match={match} />
                ))}
              </div>
            ) : (
              <div style={{
                background: "white", borderRadius: "12px",
                border: "1px solid #f1f5f9",
                padding: "32px", textAlign: "center",
              }}>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                  No live cricket matches right now
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
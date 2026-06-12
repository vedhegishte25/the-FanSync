"use client";

import Spinner from "@/components/common/Spinner";
import InsightCard from "@/components/insights/InsightCard";
import { useInsights } from "@/hooks/useInsights";
import { useState } from "react";

export default function InsightsPage() {
  const { data, loading, error } = useInsights();
  const [selected, setSelected] = useState<"all" | "football" | "cricket">("all");

  const filtered = selected === "all"
    ? data
    : data?.filter((i: any) => i.sport === selected);

  return (
    <div>
      {/* Header */}
      <div style={{
        marginBottom: "28px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "28px" }}>📊</span>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
            Insights
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
          Live match insights and stats — refreshed every 2 hours
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{
        display: "flex",
        gap: "4px",
        background: "white",
        borderRadius: "12px",
        padding: "6px",
        marginBottom: "20px",
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        width: "fit-content",
      }}>
        {(["all", "football", "cricket"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
              transition: "all 0.2s ease",
              background: selected === tab ? "#0f172a" : "transparent",
              color: selected === tab ? "white" : "#6b7280",
            }}
          >
            {tab === "all" ? "🌍 All" : tab === "football" ? "⚽ Football" : "🏏 Cricket"}
          </button>
        ))}
      </div>

      {/* Two column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "20px" }}>

        {/* Left — Insights */}
        <div>
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
                  Match Insights
                </span>
                {filtered?.length > 0 && (
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                    {filtered.length} insights
                  </span>
                )}
              </div>

              {filtered?.length > 0 ? (
                filtered.map((insight: any, index: number) => (
                  <div key={index} style={{ borderBottom: "1px solid #f8fafc" }}>
                    <InsightCard insight={insight} />
                  </div>
                ))
              ) : (
                <div style={{ padding: "32px", textAlign: "center" }}>
                  <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                    No insights available right now
                  </p>
                  <p style={{ margin: "8px 0 0", color: "#cbd5e1", fontSize: "12px" }}>
                    Insights are generated from live matches
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* About insights */}
          <div style={{
            background: "white", borderRadius: "12px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            padding: "20px",
          }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "700", color: "#111827" }}>
              📊 About Insights
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
              Insights are generated automatically from live match data including scores, status and team performance.
            </p>
          </div>

          {/* Refresh info */}
          <div style={{
            background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
            borderRadius: "12px",
            border: "1px solid #bbf7d0",
            padding: "16px 20px",
          }}>
            <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: "700", color: "#15803d" }}>
              🔄 Refresh Rate
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "#16a34a", lineHeight: "1.5" }}>
              Insights refresh every 2 hours automatically.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            background: "white", borderRadius: "12px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            padding: "20px",
          }}>
            <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "700", color: "#111827" }}>
              📈 Coverage
            </h3>
            {[
              { label: "Football Leagues", value: "9+" },
              { label: "Cricket Series", value: "Live" },
              { label: "Refresh Rate", value: "2 hrs" },
            ].map((stat, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: i < 2 ? "1px solid #f8fafc" : "none",
              }}>
                <span style={{ fontSize: "13px", color: "#64748b" }}>{stat.label}</span>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
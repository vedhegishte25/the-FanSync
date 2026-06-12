"use client";

import Spinner from "@/components/common/Spinner";
import NewsCard from "@/components/news/NewsCard";
import { useNews } from "@/hooks/useNews";
import { useState } from "react";

export default function NewsPage() {
  const { data, loading, error } = useNews();
  const [selected, setSelected] = useState<"football" | "cricket">("football");

  const articles = data?.[selected] ?? [];

  return (
    <div>
      {/* Header */}
      <div style={{
        marginBottom: "28px",
        paddingBottom: "20px",
        borderBottom: "1px solid #f1f5f9",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "28px" }}>📰</span>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>
            Sports News
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
          Latest headlines from football and cricket
        </p>
      </div>

      {/* Sport tabs */}
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
        {(["football", "cricket"] as const).map((tab) => (
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
            {tab === "football" ? "⚽ Football" : "🏏 Cricket"}
          </button>
        ))}
      </div>

      {/* Two column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "20px" }}>

        {/* Left — Articles */}
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
                  {selected === "football" ? "⚽ Football News" : "🏏 Cricket News"}
                </span>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                  {articles.length} articles
                </span>
              </div>

              {articles.length > 0 ? (
                articles.map((article: any, index: number) => (
                  <div
                    key={index}
                    style={{ borderBottom: "1px solid #f8fafc" }}
                  >
                    <NewsCard article={article} />
                  </div>
                ))
              ) : (
                <div style={{ padding: "32px", textAlign: "center" }}>
                  <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                    No news available right now
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* About */}
          <div style={{
            background: "white", borderRadius: "12px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            padding: "20px",
          }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: "700", color: "#111827" }}>
              📡 News Sources
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
              FanSync aggregates the latest sports news from trusted sources worldwide using NewsAPI.
            </p>
            <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {["BBC Sport", "ESPN", "Sky Sports", "The Guardian", "Reuters"].map((source, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontSize: "13px", color: "#475569",
                }}>
                  <div style={{
                    width: "6px", height: "6px",
                    background: "#22c55e", borderRadius: "50%",
                  }} />
                  {source}
                </div>
              ))}
            </div>
          </div>

          {/* Refresh info */}
          <div style={{
            background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
            borderRadius: "12px",
            border: "1px solid #bbf7d0",
            padding: "16px 20px",
          }}>
            <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: "700", color: "#15803d" }}>
              🔄 Auto Refresh
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "#16a34a", lineHeight: "1.5" }}>
              News updates every 30 minutes automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
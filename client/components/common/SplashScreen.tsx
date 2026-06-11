"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2500);
    const t3 = setTimeout(() => setPhase("done"), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #22c55e, #16a34a, transparent)",
          animation: "lineSlide 1s ease forwards",
        }}
      />

      {/* Logo mark */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          boxShadow: "0 0 40px rgba(34,197,94,0.4)",
          animation: "logoEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          opacity: 0,
          animationDelay: "0.2s",
        }}
      >
        ⚡
      </div>

      {/* FanSync letters */}
      <div style={{ display: "flex", gap: "2px", alignItems: "baseline" }}>
        {"FanSync".split("").map((letter, index) => (
          <span
            key={index}
            style={{
              fontSize: index < 3 ? "52px" : "52px",
              fontWeight: "800",
              color: index < 3 ? "#ffffff" : "#22c55e",
              opacity: 0,
              animation: "letterDrop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              animationDelay: `${0.3 + index * 0.08}s`,
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: 0,
          animation: "fadeUp 0.5s ease forwards",
          animationDelay: "1s",
        }}
      >
        <div style={{ width: "24px", height: "1px", background: "#374151" }} />
        <p
          style={{
            color: "#6b7280",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: "500",
          }}
        >
          Live Sports. Real Time.
        </p>
        <div style={{ width: "24px", height: "1px", background: "#374151" }} />
      </div>

      {/* Loading bar */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "120px",
          height: "2px",
          background: "#1f2937",
          borderRadius: "2px",
          overflow: "hidden",
          opacity: 0,
          animation: "fadeUp 0.3s ease forwards",
          animationDelay: "1.2s",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #22c55e, #16a34a)",
            borderRadius: "2px",
            animation: "loadBar 1.2s ease forwards",
            animationDelay: "1.2s",
          }}
        />
      </div>

      <style>{`
        @keyframes lineSlide {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes logoEnter {
          from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes letterDrop {
          from { opacity: 0; transform: translateY(-40px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
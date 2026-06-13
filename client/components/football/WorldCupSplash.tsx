"use client";

import { useEffect, useState } from "react";

export default function WorldCupSplash() {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">("enter");

  useEffect(() => {
    const seen = sessionStorage.getItem("wc2026_splash");
    if (seen) { setPhase("done"); return; }
    sessionStorage.setItem("wc2026_splash", "true");

    const t1 = setTimeout(() => setPhase("hold"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 3000);
    const t3 = setTimeout(() => setPhase("done"), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9998,
      opacity: phase === "exit" ? 0 : 1,
      transition: "opacity 0.8s ease",
      overflow: "hidden",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #0a0a0a 0%, #0d1f3c 40%, #0a1628 70%, #0a0a0a 100%)",
      }} />

      {/* Diagonal color bands — USA red white blue */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(178,34,34,0.08) 0%, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%, rgba(30,58,138,0.08) 100%)",
      }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(178,34,34,0.12) 0%, transparent 70%)",
        animation: "glowPulse 3s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)",
        animation: "glowPulse 3s ease-in-out infinite 1s",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        height: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "0",
        textAlign: "center",
        padding: "0 24px",
      }}>

        {/* Trophy SVG */}
        <div style={{
          opacity: 0,
          animation: "dropIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          animationDelay: "0.1s",
          marginBottom: "32px",
        }}>
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="trophyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f0c030" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            {/* Cup body */}
            <path d="M20 8 L60 8 L55 50 Q40 58 25 50 Z" fill="url(#trophyGrad)" />
            {/* Handles */}
            <path d="M20 12 Q8 12 8 26 Q8 38 22 40" stroke="url(#trophyGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M60 12 Q72 12 72 26 Q72 38 58 40" stroke="url(#trophyGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Stem */}
            <rect x="34" y="50" width="12" height="20" fill="url(#trophyGrad)" />
            {/* Base */}
            <rect x="22" y="70" width="36" height="6" rx="2" fill="url(#trophyGrad)" />
            <rect x="18" y="76" width="44" height="8" rx="2" fill="url(#trophyGrad)" />
            {/* Shine */}
            <path d="M30 14 Q34 10 38 18" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* FIFA text */}
        <div style={{
          opacity: 0,
          animation: "slideUp 0.6s ease forwards",
          animationDelay: "0.4s",
          marginBottom: "8px",
        }}>
          <p style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "8px",
            color: "#64748b",
            textTransform: "uppercase",
          }}>
            FIFA
          </p>
        </div>

        {/* WORLD CUP */}
        <div style={{
          opacity: 0,
          animation: "slideUp 0.6s ease forwards",
          animationDelay: "0.6s",
          marginBottom: "4px",
        }}>
          <h1 style={{
            margin: 0,
            fontSize: "clamp(48px, 8vw, 80px)",
            fontWeight: "900",
            letterSpacing: "-2px",
            lineHeight: 1,
            background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            WORLD CUP
          </h1>
        </div>

        {/* 2026 */}
        <div style={{
          opacity: 0,
          animation: "slideUp 0.6s ease forwards",
          animationDelay: "0.8s",
          marginBottom: "40px",
        }}>
          <h2 style={{
            margin: 0,
            fontSize: "clamp(64px, 12vw, 120px)",
            fontWeight: "900",
            letterSpacing: "-4px",
            lineHeight: 0.9,
            background: "linear-gradient(90deg, #f0c030, #fbbf24, #f0c030)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            2026
          </h2>
        </div>

        {/* Host nations */}
        <div style={{
          opacity: 0,
          animation: "fadeIn 0.5s ease forwards",
          animationDelay: "1.1s",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}>
          {["USA", "CANADA", "MEXICO"].map((country, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "3px",
                color: "#475569",
              }}>
                {country}
              </span>
              {i < 2 && (
                <div style={{
                  width: "4px", height: "4px",
                  borderRadius: "50%",
                  background: "#f0c030",
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div style={{
          position: "absolute",
          bottom: "48px",
          width: "200px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(240,192,48,0.4), transparent)",
          opacity: 0,
          animation: "fadeIn 0.5s ease forwards",
          animationDelay: "1.3s",
        }} />
      </div>

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-60px) scale(0.6); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
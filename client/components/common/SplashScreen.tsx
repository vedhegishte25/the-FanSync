"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("fansync_splash");
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">(alreadySeen ? "done" : "enter");

  useEffect(() => {
    const seen = sessionStorage.getItem("fansync_splash");
    if (seen) return;

    sessionStorage.setItem("fansync_splash", "true");
    setPhase("enter");

    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(() => setPhase("done"), 3500);
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
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* Ambient glow behind text */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)",
          animation: "glowPulse 2s ease-in-out infinite",
        }}
      />

      {/* FanSync wordmark */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0px",
          position: "relative",
        }}
      >
        {/* Fan */}
        <div style={{ display: "flex" }}>
          {"Fan".split("").map((letter, index) => (
            <span
              key={index}
              style={{
                fontSize: "64px",
                fontWeight: "800",
                color: "#ffffff",
                opacity: 0,
                display: "inline-block",
                animation: "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: `${index * 0.07}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Sync — in green */}
        <div style={{ display: "flex" }}>
          {"Sync".split("").map((letter, index) => (
            <span
              key={index}
              style={{
                fontSize: "64px",
                fontWeight: "800",
                color: "#22c55e",
                opacity: 0,
                display: "inline-block",
                animation: "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: `${0.21 + index * 0.07}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Underline accent */}
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #22c55e, transparent)",
            opacity: 0,
            animation: "lineExpand 0.6s ease forwards",
            animationDelay: "0.7s",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "11px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          fontWeight: "500",
          opacity: 0,
          animation: "fadeIn 0.5s ease forwards",
          animationDelay: "0.9s",
        }}
      >
        Live Sports. Real Time.
      </p>

      {/* Progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          display: "flex",
          gap: "6px",
          opacity: 0,
          animation: "fadeIn 0.3s ease forwards",
          animationDelay: "1.1s",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#22c55e",
              animation: "dotPulse 1s ease-in-out infinite",
              animationDelay: `${1.1 + i * 0.15}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
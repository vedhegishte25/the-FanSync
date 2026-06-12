"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const baseLinks = [
  { href: "/", label: "Home" },
  { href: "/live", label: "Live" },
  { href: "/football", label: "Football" },
  { href: "/cricket", label: "Cricket" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
  { href: "/insights", label: "Insights" },
];

const worldCupLink = {
  href: "/football/leagues/fifa_world_cup",
  label: "⚽ FIFA World Cup",
};

export default function Navbar() {
  const pathname = usePathname();
  const [showWorldCup, setShowWorldCup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const now = new Date();
    const start = new Date("2026-06-13");
    const end = new Date("2026-07-20T12:00:00");
    setShowWorldCup(now >= start && now <= end);

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = showWorldCup
    ? [baseLinks[0], baseLinks[1], baseLinks[2], worldCupLink, ...baseLinks.slice(3)]
    : baseLinks;

  return (
    <nav
      style={{
        width: "100%",
        background: "#0f172a",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, #22c55e, #16a34a, #22c55e)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "800",
                letterSpacing: "-0.5px",
              }}
            >
              <span style={{ color: "white" }}>Fan</span>
              <span style={{ color: "#22c55e" }}>Sync</span>
            </span>
          </div>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            const isWorldCup = link.label === "⚽ FIFA World Cup";

            return (
              <Link key={link.href} href={link.href}>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: isActive ? "700" : "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    background: isActive
                      ? "rgba(34,197,94,0.12)"
                      : isWorldCup
                      ? "rgba(240,192,48,0.08)"
                      : "transparent",
                    color: isActive
                      ? "#22c55e"
                      : isWorldCup
                      ? "#f0c030"
                      : "#94a3b8",
                    border: isWorldCup
                      ? "1px solid rgba(240,192,48,0.2)"
                      : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLDivElement).style.background =
                        isWorldCup
                          ? "rgba(240,192,48,0.15)"
                          : "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLDivElement).style.color =
                        isWorldCup ? "#f0c030" : "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLDivElement).style.background =
                        isWorldCup ? "rgba(240,192,48,0.08)" : "transparent";
                      (e.currentTarget as HTMLDivElement).style.color =
                        isWorldCup ? "#f0c030" : "#94a3b8";
                    }
                  }}
                >
                  {link.label}
                  {link.label === "Live" && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        background: "#ef4444",
                        borderRadius: "50%",
                        marginLeft: "5px",
                        verticalAlign: "middle",
                        animation: "pulse 2s infinite",
                      }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </nav>
  );
}
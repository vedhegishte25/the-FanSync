"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#0f172a",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      marginTop: "48px",
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 24px 24px",
      }}>

        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "32px",
          marginBottom: "40px",
        }}>

          {/* Brand */}
          <div>
            <p style={{
              margin: "0 0 8px",
              fontSize: "20px",
              fontWeight: "800",
              letterSpacing: "-0.5px",
            }}>
              <span style={{ color: "white" }}>Fan</span>
              <span style={{ color: "#22c55e" }}>Sync</span>
            </p>
            <p style={{
              margin: "0 0 16px",
              fontSize: "12px",
              color: "#475569",
              lineHeight: "1.6",
            }}>
              Live scores, schedules and news for Football and Cricket.
            </p>
            <div style={{
              display: "inline-block",
              padding: "4px 10px",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: "600",
              color: "#22c55e",
              letterSpacing: "1px",
            }}>
              LIVE NOW
            </div>
          </div>

          {/* Football */}
          <div>
            <p style={{
              margin: "0 0 16px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#475569",
              textTransform: "uppercase",
            }}>
              Football
            </p>
            {[
              { label: "Live Scores", href: "/live" },
              { label: "Premier League", href: "/football/leagues/premier_league" },
              { label: "La Liga", href: "/football/leagues/la_liga" },
              { label: "Champions League", href: "/football/leagues/champions_league" },
              { label: "FIFA World Cup", href: "/football/leagues/fifa_world_cup" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <p style={{
                  margin: "0 0 10px",
                  fontSize: "13px",
                  color: "#64748b",
                  cursor: "pointer",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Cricket */}
          <div>
            <p style={{
              margin: "0 0 16px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#475569",
              textTransform: "uppercase",
            }}>
              Cricket
            </p>
            {[
              { label: "Live Matches", href: "/live" },
              { label: "All Series", href: "/cricket/series" },
              { label: "Test Matches", href: "/cricket" },
              { label: "ODI Matches", href: "/cricket" },
              { label: "T20 Matches", href: "/cricket" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <p style={{
                  margin: "0 0 10px",
                  fontSize: "13px",
                  color: "#64748b",
                  cursor: "pointer",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>

          {/* More */}
          <div>
            <p style={{
              margin: "0 0 16px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#475569",
              textTransform: "uppercase",
            }}>
              More
            </p>
            {[
              { label: "Standings", href: "/standings" },
              { label: "News", href: "/news" },
              { label: "Insights", href: "/insights" },
              { label: "Search", href: "/search" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <p style={{
                  margin: "0 0 10px",
                  fontSize: "13px",
                  color: "#64748b",
                  cursor: "pointer",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          marginBottom: "24px",
        }} />

        {/* Bottom */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#334155" }}>
            © {new Date().getFullYear()} FanSync. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#334155" }}>
            Built with FastAPI & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
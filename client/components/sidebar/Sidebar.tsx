"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/live", label: "Live Scores" },
  { href: "/football", label: "Football" },
  { href: "/football/leagues/premier_league", label: "Premier League" },
  { href: "/football/leagues/la_liga", label: "La Liga" },
  { href: "/football/leagues/champions_league", label: "Champions League" },
  { href: "/cricket", label: "Cricket" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
  { href: "/insights", label: "Insights" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-100 p-4 flex flex-col gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm px-3 py-2 rounded-lg transition-colors",
            pathname === link.href
              ? "bg-green-50 text-green-600 font-medium"
              : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
          )}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
}
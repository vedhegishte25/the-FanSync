"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/live", label: "Live" },
  { href: "/football", label: "Football" },
  { href: "/cricket", label: "Cricket" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-600">
          FanSync
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
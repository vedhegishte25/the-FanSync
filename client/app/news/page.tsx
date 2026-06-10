"use client";

import Spinner from "@/components/common/Spinner";
import NewsCard from "@/components/news/NewsCard";
import { useNews } from "@/hooks/useNews";
import { useState } from "react";

export default function NewsPage() {
  const { data, loading, error } = useNews();
  const [selected, setSelected] = useState<"football" | "cricket">("football");

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  const articles = data?.[selected] ?? [];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">News</h1>

      <div className="flex gap-2">
        <button
          onClick={() => setSelected("football")}
          className={`px-4 py-2 rounded-full text-sm transition-colors border ${
            selected === "football"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-600 border-gray-200 hover:border-green-500 hover:text-green-600"
          }`}
        >
          Football
        </button>
        <button
          onClick={() => setSelected("cricket")}
          className={`px-4 py-2 rounded-full text-sm transition-colors border ${
            selected === "cricket"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-600 border-gray-200 hover:border-green-500 hover:text-green-600"
          }`}
        >
          Cricket
        </button>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article: any, index: number) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No news available.</p>
      )}
    </div>
  );
}
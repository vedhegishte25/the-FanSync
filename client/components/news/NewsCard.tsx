"use client";

import { formatDate } from "@/lib/utils";

interface NewsArticle {
  title: string;
  description: string | null;
  url: string;
  source: string | null;
  published_at: string | null;
  image_url: string | null;
}

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <div
      onClick={() => window.open(article.url, "_blank")}
      className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">{article.source}</span>
        {article.published_at && (
          <span className="text-xs text-gray-400">
            {formatDate(article.published_at)}
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-gray-800 mb-1">
        {article.title}
      </h3>
      {article.description && (
        <p className="text-xs text-gray-600">
          {article.description}
        </p>
      )}
    </div>
  );
}
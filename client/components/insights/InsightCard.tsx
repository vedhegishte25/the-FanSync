import Badge from "@/components/common/Badge";
import { formatDate } from "@/lib/utils";
import { Insight } from "@/types/insight";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-2">
        <Badge
          text={insight.sport ?? "general"}
          variant={insight.sport === "football" ? "green" : "yellow"}
        />
        {insight.created_at && (
          <span className="text-xs text-gray-400">
            {formatDate(insight.created_at)}
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-gray-800 mb-1">
        {insight.title}
      </h3>
      <p className="text-xs text-gray-600">{insight.body}</p>
    </div>
  );
}
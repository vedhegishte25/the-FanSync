import Badge from "@/components/common/Badge";
import { formatDate, formatScore, formatTime } from "@/lib/utils";
import { Match } from "@/types/match";
import LiveBadge from "./LiveBadge";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const isLive = ["1H", "HT", "2H", "ET", "Live"].includes(match.status);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500">{match.league?.name}</span>
        {isLive ? (
          <LiveBadge />
        ) : (
          <Badge text={match.status} variant="gray" />
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-1 w-2/5">
          <span className="text-sm font-semibold text-center">
            {match.home_team?.name}
          </span>
        </div>

        <div className="flex flex-col items-center w-1/5">
          {isLive ? (
            <span className="text-xl font-bold text-gray-800">
              {formatScore(match.home_score, match.away_score)}
            </span>
          ) : (
            <div className="text-xs text-gray-500 text-center">
              <p>{formatDate(match.match_date)}</p>
              <p>{formatTime(match.match_date)}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 w-2/5">
          <span className="text-sm font-semibold text-center">
            {match.away_team?.name}
          </span>
        </div>
      </div>

      {match.venue && (
        <p className="text-xs text-gray-400 text-center mt-3">{match.venue}</p>
      )}
    </div>
  );
}
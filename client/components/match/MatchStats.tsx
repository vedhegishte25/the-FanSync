interface Stat {
  label: string;
  home: string | number;
  away: string | number;
}

interface MatchStatsProps {
  stats: Stat[];
}

export default function MatchStats({ stats }: MatchStatsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Match Stats</h3>
      <div className="flex flex-col gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-800 w-1/4 text-left">
              {stat.home}
            </span>
            <span className="text-xs text-gray-500 w-1/2 text-center">
              {stat.label}
            </span>
            <span className="text-sm font-medium text-gray-800 w-1/4 text-right">
              {stat.away}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
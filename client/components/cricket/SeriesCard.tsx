interface Series {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  odi: number;
  t20: number;
  test: number;
  squads: number;
  matches: number;
}

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">
        {series.name}
      </h3>
      <div className="flex items-center gap-2 flex-wrap">
        {series.test > 0 && (
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {series.test} Tests
          </span>
        )}
        {series.odi > 0 && (
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
            {series.odi} ODIs
          </span>
        )}
        {series.t20 > 0 && (
          <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
            {series.t20} T20s
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        {series.startDate} — {series.endDate}
      </p>
    </div>
  );
}
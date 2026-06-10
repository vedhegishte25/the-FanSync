interface Standing {
  rank: number;
  team: {
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
  };
}

interface LeagueTableProps {
  standings: Standing[];
  leagueName: string;
}

export default function LeagueTable({
  standings,
  leagueName,
}: LeagueTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        {leagueName}
      </h3>
      <table className="w-full text-xs">
        <thead>
          <tr className="text-gray-400 border-b border-gray-100">
            <th className="text-left py-2">#</th>
            <th className="text-left py-2">Team</th>
            <th className="text-center py-2">P</th>
            <th className="text-center py-2">W</th>
            <th className="text-center py-2">D</th>
            <th className="text-center py-2">L</th>
            <th className="text-center py-2">GD</th>
            <th className="text-center py-2">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 hover:bg-gray-50"
            >
              <td className="py-2 text-gray-500">{standing.rank}</td>
              <td className="py-2 font-medium text-gray-800">
                {standing.team.name}
              </td>
              <td className="py-2 text-center text-gray-600">
                {standing.all.played}
              </td>
              <td className="py-2 text-center text-gray-600">
                {standing.all.win}
              </td>
              <td className="py-2 text-center text-gray-600">
                {standing.all.draw}
              </td>
              <td className="py-2 text-center text-gray-600">
                {standing.all.lose}
              </td>
              <td className="py-2 text-center text-gray-600">
                {standing.goalsDiff}
              </td>
              <td className="py-2 text-center font-semibold text-gray-800">
                {standing.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
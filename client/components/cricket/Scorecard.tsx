interface BatsmanScore {
  batsman: string;
  r: number;
  b: number;
  fours: number;
  sixes: number;
  sr: string;
}

interface BowlerScore {
  bowler: string;
  o: string;
  m: number;
  r: number;
  w: number;
  eco: string;
}

interface ScorecardProps {
  batting: BatsmanScore[];
  bowling: BowlerScore[];
  inning: string;
}

export default function Scorecard({ batting, bowling, inning }: ScorecardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">{inning}</h3>

      <p className="text-xs font-semibold text-gray-500 mb-2">Batting</p>
      <table className="w-full text-xs mb-4">
        <thead>
          <tr className="text-gray-400 border-b border-gray-100">
            <th className="text-left py-1">Batsman</th>
            <th className="text-center py-1">R</th>
            <th className="text-center py-1">B</th>
            <th className="text-center py-1">4s</th>
            <th className="text-center py-1">6s</th>
            <th className="text-center py-1">SR</th>
          </tr>
        </thead>
        <tbody>
          {batting.map((b, index) => (
            <tr key={index} className="border-b border-gray-50">
              <td className="py-1 text-gray-800">{b.batsman}</td>
              <td className="py-1 text-center font-semibold">{b.r}</td>
              <td className="py-1 text-center text-gray-600">{b.b}</td>
              <td className="py-1 text-center text-gray-600">{b.fours}</td>
              <td className="py-1 text-center text-gray-600">{b.sixes}</td>
              <td className="py-1 text-center text-gray-600">{b.sr}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs font-semibold text-gray-500 mb-2">Bowling</p>
      <table className="w-full text-xs">
        <thead>
          <tr className="text-gray-400 border-b border-gray-100">
            <th className="text-left py-1">Bowler</th>
            <th className="text-center py-1">O</th>
            <th className="text-center py-1">M</th>
            <th className="text-center py-1">R</th>
            <th className="text-center py-1">W</th>
            <th className="text-center py-1">Eco</th>
          </tr>
        </thead>
        <tbody>
          {bowling.map((b, index) => (
            <tr key={index} className="border-b border-gray-50">
              <td className="py-1 text-gray-800">{b.bowler}</td>
              <td className="py-1 text-center text-gray-600">{b.o}</td>
              <td className="py-1 text-center text-gray-600">{b.m}</td>
              <td className="py-1 text-center text-gray-600">{b.r}</td>
              <td className="py-1 text-center font-semibold">{b.w}</td>
              <td className="py-1 text-center text-gray-600">{b.eco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
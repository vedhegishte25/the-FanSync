import { Team } from "@/types/team";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-800">{team.name}</span>
        <span className="text-xs text-gray-500">{team.country}</span>
      </div>
    </div>
  );
}
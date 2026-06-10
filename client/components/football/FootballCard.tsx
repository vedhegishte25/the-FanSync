import MatchCard from "@/components/match/MatchCard";
import { Match } from "@/types/match";

interface FootballCardProps {
  match: Match;
}

export default function FootballCard({ match }: FootballCardProps) {
  return (
    <div className="w-full">
      <MatchCard match={match} />
    </div>
  );
}
interface TimelineEvent {
  minute: number;
  type: string;
  player: string;
  team: string;
}

interface MatchTimelineProps {
  events: TimelineEvent[];
}

export default function MatchTimeline({ events }: MatchTimelineProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Timeline</h3>
      <div className="flex flex-col gap-2">
        {events.map((event, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-8">{event.minute}'</span>
            <span className="text-xs font-medium text-gray-700">
              {event.type}
            </span>
            <span className="text-xs text-gray-600">{event.player}</span>
            <span className="text-xs text-gray-400 ml-auto">{event.team}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      LIVE
    </span>
  );
}
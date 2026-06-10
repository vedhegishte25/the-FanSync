export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <p className="text-sm font-bold text-green-600">FanSync</p>
        <p className="text-xs text-gray-400">
          Live scores for Football and Cricket
        </p>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} FanSync
        </p>
      </div>
    </footer>
  );
}
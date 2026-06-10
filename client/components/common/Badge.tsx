import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  variant?: "green" | "red" | "gray" | "yellow";
}

export default function Badge({ text, variant = "gray" }: BadgeProps) {
  const variants = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={cn(
        "inline-block px-2 py-1 text-xs font-medium rounded-full",
        variants[variant]
      )}
    >
      {text}
    </span>
  );
}
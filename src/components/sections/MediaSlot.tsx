import { ImageIcon, Play } from "lucide-react";
import type { ReactNode } from "react";

export function MediaSlot({
  aspect = "aspect-[3/4]",
  rounded = "rounded-2xl",
  className = "",
  icon = "image",
  label,
  children,
}: {
  aspect?: string;
  rounded?: string;
  className?: string;
  icon?: "image" | "play";
  label?: string;
  children?: ReactNode;
}) {
  const Icon = icon === "play" ? Play : ImageIcon;
  return (
    <div
      className={`relative ${aspect} ${rounded} overflow-hidden border border-primary/15 bg-card/60 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_60%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/60">
        <Icon className="h-8 w-8" strokeWidth={1.25} />
        {label ? <span className="text-xs">{label}</span> : null}
      </div>
      {children}
    </div>
  );
}

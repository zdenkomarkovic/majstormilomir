import { VIBER_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
    >
      <path d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.19 4.53 3.08 6.02-.1.99-.5 2.31-1.47 3.6a.5.5 0 0 0 .55.78c2.06-.5 3.55-1.28 4.5-1.87A11 11 0 0 0 12 19c4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
    </svg>
  );
}

interface MessageButtonsProps {
  className?: string;
}

export function MessageButtons({ className }: MessageButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={VIBER_HREF}
        aria-label="Pošaljite poruku na Viber"
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#7360F2] px-5 py-3 font-heading text-sm font-semibold tracking-wide text-paper uppercase hover:brightness-110"
      >
        <ChatIcon />
        Viber
      </a>
    </div>
  );
}

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "solid" | "outline";
  className?: string;
  label?: string;
}

export function PhoneButton({
  variant = "solid",
  className,
  label,
}: PhoneButtonProps) {
  return (
    <a
      href={PHONE_HREF}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-heading text-base font-semibold tracking-wide uppercase transition-colors",
        variant === "solid" &&
          "bg-brick text-paper hover:bg-brick-dark",
        variant === "outline" &&
          "border-2 border-paper text-paper hover:bg-paper hover:text-ink",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 shrink-0"
      >
        <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1-1.1 1C10.6 21 3 13.4 3 4.1 3 3.5 3.5 3 4.1 3H7.5c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
      </svg>
      {label ?? PHONE_DISPLAY}
    </a>
  );
}

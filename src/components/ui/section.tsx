import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-8xl px-6 lg:px-12", className)}>{children}</div>
  );
}

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={cn("eyebrow", dark && "text-teal-500")}>{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
          <div className="ledger-rule mt-3 w-16" />
        </div>
      )}
      <h2
        className={cn(
          "font-display text-[2rem] leading-[1.15] tracking-[-0.01em] sm:text-[2.5rem]",
          dark ? "text-neutral-0" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-[1.05rem] leading-relaxed", dark ? "text-neutral-200" : "text-ink-600")}>
          {description}
        </p>
      )}
    </div>
  );
}

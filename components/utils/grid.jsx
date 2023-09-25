import { cn } from "@/lib/utils";

export default function Grid({ minColSize, className, children }) {
  return (
    <div
      className={cn(
        `
                grid w-full grid-cols-[repeat(auto-fill,minmax(${minColSize},_1fr))] gap-2
                `,
        className,
      )}
    >
      {children}
    </div>
  );
}

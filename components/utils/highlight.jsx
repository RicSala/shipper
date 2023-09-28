import { cn } from "@/lib/utils";

export default function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        `
      relative
      font-semibold
      text-opacity-100
      [font-size:inherit]
  before:absolute
  before:-left-[2px]
  before:bottom-0
  before:-z-[1]
  before:h-[70%]
  before:w-[calc(100%_+_4px)]
  before:bg-primary/50
  before:content-['']
  before:[transform:rotate(-2deg)]
                  `,
        className,
      )}
    >
      {children}
    </span>
  );
}

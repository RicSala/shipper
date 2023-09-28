"use client";

import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `
            cont
        max-w-[min(100%,
        2520px)]
        mx-auto
        px-4
        md:px-10 xl:px-20
                       `,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;

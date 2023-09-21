'use client';

import { cn } from '@/lib/utils';

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `
            cont
        mx-auto
        max-w-[2520px]
        px-4
        md:px-10
        xl:px-20
                       `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

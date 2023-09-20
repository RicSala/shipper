'use client'

import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
    return (
        <div
            className={cn(`
            cont
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        px-4
                       `,
                className
            )}
        >
            {children}
        </div>
    )
};

export default Container;
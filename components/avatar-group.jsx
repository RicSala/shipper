"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function AvatarGroup({ className }) {
  const { data, status, update } = useSession();

  return (
    // <div className="relative flex items-center content-center h-10 font-medium">
    // <div className="w-full px-6 py-8 ml-auto mr-auto">
    // <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-xl md:max-w-md">

    <div className="flex justify-center p-8">
      <div className="flex -space-x-2">
        <Image
          width={10}
          height={10}
          className={cn(
            `inline-block h-10 w-10 rounded-full ring-2 ring-white md:ring-4`,
            className,
          )}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt=""
        />
        <Image
          width={10}
          height={10}
          className={cn(
            `
                            inline-block h-10 w-10 rounded-full ring-2 ring-white md:ring-4
                            `,
            className,
          )}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt=""
        />
        <Image
          width={10}
          height={10}
          className={cn(
            `
                            inline-block h-10 w-10 rounded-full ring-2 ring-white md:ring-4
                            `,
            className,
          )}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt=""
        />
        <Image
          width={10}
          height={10}
          className={cn(
            `
                            inline-block h-10 w-10 rounded-full ring-2 ring-white md:ring-4
                            `,
            className,
          )}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt=""
        />

        <div
          className={cn(
            `
                            flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-sm text-primary-content ring-2 ring-white md:ring-4
                            `,
            className,
          )}
        >
          +77
        </div>
      </div>
    </div>
    // </div>
    // </div>
    // </div>
  );
}

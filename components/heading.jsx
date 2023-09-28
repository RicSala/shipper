"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Heading = ({
  title,
  subtitle,
  center = false,
  buttonLabel = "",
  url = "",
  className,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between">
      <div>
        <h1
          className={cn(
            `mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight`,
            className,
          )}
        >
          {title}
        </h1>
        <p className="text-base-muted-content max-w-[750px] sm:text-xl">
          {subtitle}
        </p>
      </div>
      {buttonLabel ? (
        <Button
          onClick={() => {
            console.log("ehllo");
            router.push(url);
          }}
        >
          {buttonLabel}
        </Button>
      ) : null}
    </div>
  );
};

export default Heading;

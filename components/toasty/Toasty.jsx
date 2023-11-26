"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// TODO: is adding a gap that I don't want to add (because of the flex column it is part of)
// you can solve it just adding it to an existing element

function Toasty({ className }) {
  // Your goal is to update the `isShown` state variable,
  // based on the user's scroll position, using
  // IntersectionObserver.
  const [isShown, setIsShown] = useState(false);
  const wrapperRef = useRef();

  // This CSS value will control whether the ghost is
  // visible or not.
  const translateX = isShown ? "0%" : "100%";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      //   setIsShown(entry.isIntersecting);
      if (entry.isIntersecting) {
        setIsShown(true);
        console.log("is intersecting");
      }

      if (!entry.isIntersecting) {
        setIsShown(false);
        console.log("is not intersecting");
      }
    });

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };

    //We don't need to add wrapperRef nor setIsShown to the depencies array because those cannot change among snapshots, so there is no risk of them being stale -> It's safe not to add them, and ESLint knows is
  }, []);

  return (
    <div ref={wrapperRef} className="">
      <div
        className={cn(
          `
                  toasty fixed right-0 top-1/2 text-[10rem] leading-10 transition-transform duration-500
                  `,
          isShown ? "translate-x-0" : "translate-x-full",
          className,
        )}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;

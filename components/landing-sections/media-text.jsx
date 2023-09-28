import { cn } from "@/lib/utils";
import { BoxIcon } from "lucide-react";
import Image from "next/image";
import Highlight from "../utils/highlight";

export default function MediaText({ className, textFirst = false }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
      <div
        className={cn(
          `
                  flex max-w-md flex-1 flex-col
                  gap-2
                  `,
          !textFirst ? "md:order-1" : "",
          className,
        )}
      >
        <Text />
      </div>
      <div className="relative mx-auto min-h-[16rem] w-full flex-1 md:h-40 md:w-96">
        <Image
          alt="some app demo"
          className="aspect-auto object-contain"
          fill
          src={
            "https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
          }
        />
      </div>
    </div>
  );
}

const Text = () => {
  return (
    <div className="flex items-baseline justify-start gap-4">
      <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full border border-secondary/60 bg-secondary/30">
        <BoxIcon className="top-1 block h-5 w-5 min-w-max text-secondary" />
      </div>
      <div className="flex flex-col gap-2 text-base-content">
        <h3>
          This is{" "}
          <Highlight className={"text-base-content"}>the name</Highlight> of
          feature
        </h3>
        <p className="text-base-muted-content">
          Lorem,{" "}
          <Highlight className={"text-base-content"}>
            ipsum dolor sit amet{" "}
          </Highlight>
          consectetur adipisicing elit. Repellat aperiam voluptatum harum in
          <Highlight>totam</Highlight>
        </p>
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const { default: Image } = require("next/image");

export default function Hero({ className }) {
  return (
    <section
      className={cn(
        `
                text-base-content
                `,
        className,
      )}
    >
      <div
        className="
            container
            mx-auto flex max-w-5xl flex-col items-center md:flex-row"
      >
        <div className="mb-16 flex flex-col items-stretch text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-between gap-2">
            <div className="join">
              <Button variant="default" className="">
                Button
              </Button>
            </div>{" "}
            <Button className="join-item" variant="outline">
              Button
            </Button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            width={720}
            height={600}
            className="rounded object-cover object-center"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}

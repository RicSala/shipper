import { cn } from "@/lib/utils";
import { Video } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero2({
    className
}) {
    return (

        <section className={cn(`
                    flex flex-col gap-2 lg:flex-row items-center
                    `,
            className
        )}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="px-6 text-lg text-base-content/70 font-inter">Smart email campaign builder, made for Developers</h1>
                    <p className="mt-5 text-4xl font-bold leading-tight text-base-content sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                        Turn your visitors into profitable
                        <span className="relative inline-flex sm:inline">
                            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                            <span className="relative"> business </span>
                        </span>
                    </p>

                    <div className="px-8 items-center justify-center sm:px-0 sm:space-x-5 flex flex-wrap mt-9 gap-5">
                        <Button
                            href="#"
                            className="flex"
                        >
                            Get more customers
                        </Button>

                        <Button
                            variant="outline"
                        >
                            <Video />
                            Watch free demo
                        </Button>
                    </div>

                    <p className="mt-8 text-base text-base-content/70 font-inter">60 Days free trial · No credit card required</p>
                </div>
            </div>

            <div className="rounded-lg overflow-hidden">
                <div className="lg:max-w-6xl lg:mx-auto object-contain mx-auto">
                    <Image className="mx-auto" width={700} height={700} src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="" />
                </div>
            </div>
        </section>

    );
}
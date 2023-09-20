import { cn } from "@/lib/utils";
import { GiftIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CtaWithSocial({
    accentText,
    primaryText,
    buttonLabel,
    buttonClasses,
    spamClasses,
    iconClasses,

}) {
    return (
        <div className="flex flex-col gap-2 ">
            <Button className={cn(`
                        
                        `,
                buttonClasses
            )}>
                {buttonLabel}
            </Button>
            <div>

                <p className="flex text-sm justify-center items-center gap-2">
                    <GiftIcon className="animate-bounce text-accent" />
                    <span className="text-accent">
                        {accentText}
                        &nbsp;
                        <span className="text-base-content">
                            {primaryText}
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
}
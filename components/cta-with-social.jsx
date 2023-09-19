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
                    <GiftIcon className="animate-bounce text-saccent" />
                    <spam className="text-saccent">
                        {accentText}
                        &nbsp;
                        <spam className="text-primary">
                            {primaryText}
                        </spam>
                    </spam>
                </p>
            </div>
        </div>
    );
}
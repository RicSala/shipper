import { DiscIcon, GiftIcon, KeyIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
                    <GiftIcon className="animate-bounce text-secondary" />
                    <spam className="text-secondary">
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
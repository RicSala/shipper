'use client'

import { sendEmail } from "@/lib/mailgun";
import { cn } from "@/lib/utils";

export default function CoolButton({
    className,
    children,
    onClick,
}) {

    const onCoolButtonClick = async () => {
        await sendEmail(
            "ricardo@grouz.io",
            "hello from the code",
            "this is pretty cool",
            "<h1>It's me!</h1>",
            "ricardo@ricardo.com"
        )
    }

    onClick = onCoolButtonClick

    return (
        <div
            onClick={onClick}
            className={cn(`
                    relative w-[300px] h-[100px] text-2xl text-center text-white rounded-full bg-custom-gradient bg-[size:600%] animate-anime flex items-center justify-center cursor-pointer isolate
                    `,
                className
            )}>

            <p className="z-10 ">{children}</p>

            <div className={cn(`
                        absolute -top-[10px] -z-1 blur-[30px] opacity-80  w-[300px] h-[100px] text-2xl text-center text-white rounded-full bg-custom-gradient bg-[size:600%] animate-anime flex items-center justify-center cursor-pointer
                        `,
                className
            )}>
            </div>
        </div>
    );
}
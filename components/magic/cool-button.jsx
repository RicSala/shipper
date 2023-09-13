import { cn } from "@/lib/utils";

export default function CoolButton({
    className,
    children,
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className={cn(`
                    relative w-[300px] h-[100px] text-2xl text-center text-white rounded-full bg-[linear-gradient(-45deg,_#FFA63D,_#FF3D77,_#338AFF,_#3CF0C5)] bg-[size:600%] animate-anime flex items-center justify-center cursor-pointer isolate
                    `,
                className
            )}>

            <p className="z-10 ">{children}</p>

            <div className={cn(`
                        absolute -top-[10px] -z-1 blur-[30px] opacity-80  w-[300px] h-[100px] text-2xl text-center text-white rounded-full bg-[linear-gradient(-45deg,_#FFA63D,_#FF3D77,_#338AFF,_#3CF0C5)] bg-[size:600%] animate-anime flex items-center justify-center cursor-pointer
                        `,
                className
            )}>
            </div>
        </div>
    );
}
'use client'

import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


const Heading = ({ title, subtitle, center = false, buttonLabel = '', url = '',
    className,

}) => {

    const router = useRouter()

    return (
        <div className="flex flex-row justify-between">
            <div>
                <h1 className={cn(`scroll-m-20 text-4xl font-extrabold tracking-tight mb-2`, className)}>{title}</h1>
                <p className="max-w-[750px] text-muted-foreground sm:text-xl">{subtitle}</p>
            </div>
            {
                buttonLabel ?
                    <Button
                        onClick={() => {
                            console.log("ehllo")
                            router.push(url)
                        }}
                    >
                        {buttonLabel}
                    </Button>
                    :
                    null
            }
        </div>
    )
}

export default Heading

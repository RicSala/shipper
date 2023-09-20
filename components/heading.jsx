'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"


const Heading = ({ title, subtitle, center = false, buttonLabel = '', url = '',
    className,

}) => {

    const router = useRouter()

    return (
        <div className="flex flex-row justify-between">
            <div>
                <h1 className={cn(`scroll-m-20 text-4xl font-extrabold tracking-tight mb-2`, className)}>{title}</h1>
                <p className="max-w-[750px] text-base-content/70 sm:text-xl">{subtitle}</p>
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

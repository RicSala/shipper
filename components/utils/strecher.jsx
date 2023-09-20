import { cn } from "@/lib/utils";


const classStyles = "container max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 md:pt-24"
export default function Stretcher({ children, className }) {
    return (
        <div className={cn(`
                    
                    xl:w-[calc(100%_+_80px*2)] xl:-ml-[80px] xl:-mr-[80px];
                    md:w-[calc(100%_+_40px*2)] md:-ml-[40px] md:-mr-[40px];
                    w-[calc(100%_+_16px*2)] -ml-[16px] -mr-[16px];
                    self-stretch
                    max-w-[100wv]
                    `,
            className
        )}>

            {children}


        </div>


    );
}
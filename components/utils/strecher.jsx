import { cn } from '@/lib/utils';

const classStyles =
  'container max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 md:pt-24';
export default function Stretcher({ children, className }) {
  return (
    <div
      className={cn(
        `
                    
                    xl:-mr-[80px]; md:-mr-[40px]; -mr-[16px];
                    -ml-[16px] w-[calc(100%_+_16px*2)] max-w-[100wv]
                    self-stretch md:-ml-[40px] md:w-[calc(100%_+_40px*2)]
                    xl:-ml-[80px]
                    xl:w-[calc(100%_+_80px*2)]
                    `,
        className
      )}
    >
      {children}
    </div>
  );
}

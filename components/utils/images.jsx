import Image from 'next/image';

// To learn about next Image component: https://refine.dev/blog/using-next-image/#nextimage-optional-props

export function ImageGround(props) {
  return (
    // WITH FILL
    <div className='flex w-full flex-col items-center justify-center gap-5'>
      <div className='relative h-96 w-80 border'>
        My Image
        <Image
          // the property object goes in the IMAGE!!!
          // className="object-contain" // the div contains the entire image -> can create white stripes
          // className="object-fill" // the image covers the whole div, stretching as necesary
          // className="object-none" // the image -keeps its intrinsic size- (not!!!, it changes as we changed the viewport!), the div acts as a "mask" hidding overflows
          // className="object-none object-left" // ...and you can position it as desired
          alt='squares'
          fill
          src={'/images/squares.png'}
        />
      </div>
      <div className='h-96 w-60 border'>
        My Image
        <Image
          height={100000}
          width={80000}
          // className="" // with nothing else, it takes the widht and adapts the hight to keep the ratio, always contained in the parent
          // className="object-cover" // No effect
          // className="object-contain" // No effect, it's contained by the parent
          // className="object-none" // Keeps its intrinsic size and aspec and the exterior div "masks" it.
          // className="object-none overflow-visible"
          alt='squares'
          src={'/images/squares.png'}
        />
      </div>
    </div>
  );
}

/*
fill -> the image becomes ABSOLUTELY POSITIONED and expands to fill its parent (the first positioned parent).
Usually used with object fit. recomended for images you don't know the size in advance
The parent needs: relative and specific sizes (blocks do not have height!)


*/

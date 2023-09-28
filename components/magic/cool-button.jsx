'use client';

import { sendEmail } from '@/lib/mailgun';
import { cn } from '@/lib/utils';

export default function CoolButton({ className, children, onClick }) {
  const onCoolButtonClick = async () => {
    await sendEmail(
      'ricardo@grouz.io',
      'hello from the code',
      'this is pretty cool',
      "<h1>It's me!</h1>",
      'ricardo@ricardo.com'
    );
  };

  onClick = onCoolButtonClick;

  return (
    <div
      onClick={onClick}
      className={cn(
        `
                    relative isolate flex h-[100px] w-[300px] animate-anime cursor-pointer items-center justify-center rounded-full bg-custom-gradient bg-[size:600%] text-center text-2xl text-white
                    `,
        className
      )}
    >
      <p className='z-10 '>{children}</p>

      <div
        className={cn(
          `
                        -z-1 absolute -top-[10px] flex h-[100px]  w-[300px] animate-anime cursor-pointer items-center justify-center rounded-full bg-custom-gradient bg-[size:600%] text-center text-2xl text-white opacity-80 blur-[30px]
                        `,
          className
        )}
      ></div>
    </div>
  );
}

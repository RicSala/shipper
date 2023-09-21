import AvatarGroup from '@/components/avatar-group';
import CtaWithSocial from '@/components/cta-with-social';
import Pricing from '@/components/landing-sections/pricing';
import Testimonials1 from '@/components/landing-sections/testimonials';
import CoolButton from '@/components/magic/cool-button';
import CoolText from '@/components/magic/cool-text';
import { Button } from '@/components/ui/button';
import { config } from '@/shipper.config';

import ContactForm from '@/components/landing-sections/contact-form';
import { Faq } from '@/components/landing-sections/faq';
import Hero from '@/components/landing-sections/hero';
import Hero2 from '@/components/landing-sections/hero2';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Stretcher from '@/components/utils/strecher';

import DoodleArrow29 from '@/components/doodles/arrow-29';
import Laurels from '@/components/social-proof/laurels';
import { ImageGround } from '@/components/utils/images';
import tailwindConfig from '@/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

const twConfig = resolveConfig(tailwindConfig);
const theme = twConfig.theme;

const colors = [
  'bg-primary',
  'bg-primary-focus',
  'bg-primary-content',
  'bg-secondary',
  'bg-secondary-focus',
  'bg-secondary-content',
  'bg-accent',
  'bg-accent-focus',
  'bg-accent-content',
  'bg-neutral',
  'bg-neutral-focus',
  'bg-neutral-content',
  'bg-base-100',
  'bg-base-200',
  'bg-base-300',
  'bg-base-content',
  'bg-info',
];

export default async function Home() {
  return (
    // For spacing..
    // gap-4 sm:gap-8 md:gap-16
    // py-4 sm:py-8 md:py-16
    // https://github.com/saadeghi/daisyui/blob/master/src/theming/themes.js
    <main className='gap flex min-h-screen flex-col items-center justify-between'>
      {/* <TwBreaks /> */}
      <Hero2 />

      <Laurels laurelsClasses='fill-base-content/50' />

      <div className='gap relative flex flex-col'>
        {/* animate-[bounce_2s_ease-in-out_infinite] */}
        <DoodleArrow29
          className={'rotate absolute left-20 top-20 h-20 w-20 '}
        />
        <h2>Colors</h2>
        <div className='flex flex-wrap gap-5'>
          {colors.map((color) => (
            <div
              key={color}
              className={`${color} flex h-20 w-40 items-center justify-center rounded-full border border-neutral text-gray-400`}
            >
              {color.substring(3)}
            </div>
          ))}
        </div>
      </div>

      <h1 className='font-bricolage font-normal'>{config.general.appName}</h1>

      <Input />

      <Stretcher className='bg-base-200 py-4 sm:py-8 md:py-16'>
        <Pricing />
      </Stretcher>

      <Testimonials1 />

      <CoolButton className='h-16 w-60'>Cool Button 😎</CoolButton>

      <CoolText>This is a pretty Awesome text!</CoolText>

      <AvatarGroup className={'h-8 w-8 text-xs'} />

      <CtaWithSocial
        accentText={'30% de descuento'}
        buttonLabel={'Comprar'}
        primaryText={'a las primeras 200 compras'}
      />

      <div
        className='
      text-primary-300
      '
      >
        hello
      </div>

      <Button className='' variant=''>
        destructive!
      </Button>

      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <select className='select select-bordered w-full max-w-xs'>
        <option disabled>Pick your favorite Simpson</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>

      <Stretcher className='bg-base-200'>
        <Hero />
      </Stretcher>

      <Faq />

      <ContactForm />

      <ImageGround />
    </main>
  );
}

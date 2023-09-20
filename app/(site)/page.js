
import { getCurrentUser } from '@/actions/getCurrentUser'
import AvatarGroup from '@/components/avatar-group'
import CtaWithSocial from '@/components/cta-with-social'
import Pricing from '@/components/landing-sections/pricing'
import Testimonials1 from '@/components/landing-sections/testimonials'
import CoolButton from '@/components/magic/cool-button'
import CoolText from '@/components/magic/cool-text'
import { Button } from '@/components/ui/button'
import { config } from '@/shipper.config'

import ContactForm from '@/components/landing-sections/contact-form'
import { Faq } from '@/components/landing-sections/faq'
import Hero from '@/components/landing-sections/hero'
import Hero2 from '@/components/landing-sections/hero2'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Stretcher from '@/components/utils/strecher'

import DoodleArrow29 from '@/components/doodles/arrow-29'
import { ImageGround } from '@/components/utils/images'
import tailwindConfig from "@/tailwind.config.js"
import resolveConfig from "tailwindcss/resolveConfig"

const twConfig = resolveConfig(tailwindConfig);
const theme = twConfig.theme;

const colors = ["bg-primary", "bg-primary-focus", "bg-primary-content", "bg-secondary", "bg-secondary-focus", "bg-secondary-content", "bg-accent", "bg-accent-focus", "bg-accent-content", "bg-neutral", "bg-neutral-focus", "bg-neutral-content", "bg-base-100", "bg-base-200", "bg-base-300", "bg-base-content", "bg-info"]


export default async function Home() {

  const user = await getCurrentUser()


  return (

    // For spacing..
    // gap-4 sm:gap-8 md:gap-16
    // py-4 sm:py-8 md:py-16
    // https://github.com/saadeghi/daisyui/blob/master/src/theming/themes.js
    <main className="flex flex-col gap items-center justify-between min-h-screen">


      {/* <TwBreaks /> */}
      <Hero2 />


      <div className='flex flex-col relative gap'>
        {/* animate-[bounce_2s_ease-in-out_infinite] */}
        <DoodleArrow29 className={'w-20 h-20 absolute rotate left-20 top-20 '} />
        <h2>Colors</h2>
        <div className='flex gap-5 flex-wrap'>
          {
            colors.map(color => (<div key={color} className={`${color} text-gray-400 w-40 h-20 rounded-full border border-neutral flex justify-center items-center`}>
              {color.substring(3)}
            </div>
            ))

          }
        </div>
      </div>

      <h1 className='font-bricolage font-normal'>
        {config.general.appName}
      </h1>

      <Input />

      <Stretcher className='bg-base-200 py-4 sm:py-8 md:py-16'>
        <Pricing />
      </Stretcher>

      <Testimonials1 />

      <CoolButton className="h-16 w-60"
      >
        Cool Button 😎
      </CoolButton>

      <CoolText>
        This is a pretty Awesome text!
      </CoolText>

      <AvatarGroup className={'h-8 w-8 text-xs'} />

      <CtaWithSocial
        accentText={'30% de descuento'}
        buttonLabel={'Comprar'}
        primaryText={'a las primeras 200 compras'}
      />

      <div className='
      text-primary-300
      '>
        hello
      </div>

      <Button className='' variant=''>
        destructive!
      </Button>


      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <select className="select w-full max-w-xs select-bordered">
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


    </main >
  )
}

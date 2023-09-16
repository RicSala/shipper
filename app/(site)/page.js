
import { getCurrentUser } from '@/actions/getCurrentUser'
import AvatarGroup from '@/components/avatar-group'
import CtaWithSocial from '@/components/cta-with-social'
import Pricing from '@/components/landing-sections/pricing'
import Testimonials1 from '@/components/landing-sections/testimonials'
import CoolButton from '@/components/magic/cool-button'
import CoolText from '@/components/magic/cool-text'
import { Button } from '@/components/ui/button'
import { config } from '@/shipper.config'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Page from '../_templates/page'
import Hero from '@/components/landing-sections/hero'
import ContactForm from '@/components/landing-sections/contact-form'


export default async function Home() {

  const user = await getCurrentUser()



  return (
    <main className="flex flex-col items-center justify-between min-h-screen md:p-24">
      <div>
        {JSON.stringify(user)}
      </div>

      <h1>
        {config.general.appName}
      </h1>
      <Pricing />

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
      text-primary
      '>
        hello
      </div>
      <div className='
      text-primary-300
      '>
        hello
      </div>

      <Button className='' variant='destructive'>
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

      <Hero />

      <ContactForm />

    </main>
  )
}

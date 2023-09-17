
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
import { Gamepad2 } from 'lucide-react'
import DoodleArrow29 from '@/components/doodles/arrow-29'

const colors = ['primary', 'destructive', 'secondary']
const colorsFortesting = ['bg-primary-100', 'bg-destructive-100', 'bg-secondary-100']
const graysForTesting = ['bg-gray', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900']
const primariesForTesting = ['bg-primary', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900']
const secondariesForTesting = ['bg-secondary', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400', 'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900']
const infoForTesting = ['bg-info', 'bg-info-100', 'bg-info-200', 'bg-info-300', 'bg-info-400', 'bg-info-500', 'bg-info-600', 'bg-info-700', 'bg-info-800', 'bg-info-900']
const destructiveForTesting = ['bg-destructive', 'bg-destructive-100', 'bg-destructive-200', 'bg-destructive-300', 'bg-destructive-400', 'bg-destructive-500', 'bg-destructive-600', 'bg-destructive-700', 'bg-destructive-800', 'bg-destructive-900']

const successForTesting = ['bg-success', 'bg-success-100', 'bg-success-200', 'bg-success-300', 'bg-success-400', 'bg-success-500', 'bg-success-600', 'bg-success-700', 'bg-success-800', 'bg-success-900']

const accentForTesting = ['bg-accent', 'bg-accent-100', 'bg-accent-200', 'bg-accent-300', 'bg-accent-400', 'bg-accent-500', 'bg-accent-600', 'bg-accent-700', 'bg-accent-800', 'bg-accent-900']


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

      <h2>Colors</h2>
      <h3>Gray shades</h3>
      <div className="flex gap-2">
        {
          graysForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>
      <h3>Primary shades</h3>
      <div className="flex gap-2">
        {
          primariesForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>
      <h3>Secondary shades</h3>
      <div className="flex gap-2">
        {
          secondariesForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>
      <div className="flex gap-2">
        {
          infoForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>
      <div className="flex gap-2">
        {
          destructiveForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>
      <div className="flex gap-2">
        {
          successForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>
      <div className="flex gap-2">
        {
          accentForTesting.map((color) => {
            return (
              <div key={color} className={`h-12 w-12 ${color} rounded-full`}>
              </div>

            )
          })
        }
      </div>

      <div className='bg-primary-400 h-20 w-20 relative'>
        hello

        <DoodleArrow29 className={'w-20 h-20 absolute rotate -left-20 -bottom-20 animate-[bounce_2s_ease-in-out_infinite]'} />

      </div>

      <div className='flex gap-2'>
        {
          colors.map(color => {
            return (<div
              key={color}
              className={`w-14 h-14 rounded-full bg-${color}-100 justify-center items-center flex`}>
              <Gamepad2 className={`text-${color}`} size={'28'} />
            </div>)
          })
        }
      </div>
    </main>
  )
}


import { getCurrentUser } from '@/actions/getCurrentUser'
import Pricing from '@/components/landing-sections/pricing'
import Testimonials1 from '@/components/landing-sections/testimonials'
import CoolButton from '@/components/magic/cool-button'
import { config } from '@/shipper.config'

export default async function Home() {

  const user = await getCurrentUser()

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        {JSON.stringify(user)}
      </div>

      <h1>
        {config.general.appName}
      </h1>
      <Pricing />

      <Testimonials1 />

      <CoolButton className="h-16 w-60">
        Cool Button 😎
      </CoolButton>


    </main>
  )
}

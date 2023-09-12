'use client'

import { Button } from '@/components/ui/button'
import { UiContext } from '@/providers/ui/ui-provider'
import { config } from '@/shipper.config'
import Image from 'next/image'
import { useContext } from 'react'

export default function Home() {

  const { setLoginModalOpen } = useContext(UiContext)

  return (

    <main className="flex flex-col items-center justify-between min-h-screen p-24">

      <h1>
        {config.general.appName}
      </h1>

      <Button
        onClick={() => { setLoginModalOpen(true) }}
      >
        Register Modal
      </Button>
    </main>
  )
}

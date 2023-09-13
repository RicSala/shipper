import { config } from '@/shipper.config'
import './globals.css'
import { Inter } from 'next/font/google'
import { LoginModal } from '@/components/modals/login-form'
import { UiProvider } from '@/providers/ui/ui-provider'
import { ThemeProvider } from '@/providers/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: config.strings.metas.title,
    template: '%s',

    // To be used in CHILDREN to ignores title.template set by parents
    absolute: '',
  },
  // TODO: Can the above be done with the description too?
  description: config.strings.metas.title,

  // TODO: to check: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  colorScheme: 'dark',
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <UiProvider>
            <LoginModal />
            {children}
          </UiProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

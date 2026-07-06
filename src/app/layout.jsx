import { Montserrat_Alternates } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat_alternates',
})

export const metadata = {
  title: {
    template: '%s - ČtvrtCON',
    default: 'ČtvrtCON 2026 - 2. ročník Čtvrtkon konference',
  },
  description:
    'Druhý ročník celodenní Čtvrtkon konference. 28. 11. 2026, Riegrova 51, České Budějovice.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        montserratAlternates.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}

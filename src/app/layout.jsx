import { Montserrat_Alternates } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat_alternates',
})

const title = 'ČtvrtCON 2026 - 2. ročník Čtvrtkon konference'
const description =
  'Druhý ročník celodenní Čtvrtkon konference. 28. 11. 2026, Riegrova 51, České Budějovice.'

export const metadata = {
  // TODO: confirm the production domain (tied to basePath). Used for absolute URLs in OG/Twitter.
  metadataBase: new URL('https://ctvrtcon.cz'),
  title: {
    template: '%s - ČtvrtCON',
    default: title,
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'ČtvrtCON',
    title,
    description,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        montserratAlternates.variable,
      )}
    >
      <head>
        {/* Without JS the revealed content (.reveal) stays hidden — force it visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}

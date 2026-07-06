import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'

import almaCareerLogo from '@/images/partners/almacareer.png'
import briloLogo from '@/images/partners/brilo.png'
import engelLogo from '@/images/partners/engel.png'
import eonLogo from '@/images/partners/eon.png'
import eshopRychleLogo from '@/images/partners/eshop-rychle.png'
import headersLogo from '@/images/partners/headers.png'
import inizioLogo from '@/images/partners/inizio.png'
import marianBencatLogo from '@/images/partners/marian-bencat.png'
import naucimeAiLogo from '@/images/partners/naucime-ai.png'
import simpliaLogo from '@/images/partners/simplia.png'
import smartEmailingLogo from '@/images/partners/smartemailing.png'
import tomasZahalkaLogo from '@/images/partners/tomas-zahalka.png'
import vasHostingLogo from '@/images/partners/vas-hosting.png'
import webstaLogo from '@/images/partners/websta.png'

const generalPartners = [
  {
    name: 'Inizio',
    logo: inizioLogo,
    url: 'https://www.inizio.cz',
    description: 'Webová laboratoř a online marketingová agentura',
  },
  {
    name: 'SmartEmailing',
    logo: smartEmailingLogo,
    url: 'https://www.smartemailing.cz',
    description: 'Inteligentní e-mailingová platforma s 99,9% doručitelností',
  },
]

const eventPartners = [
  {
    name: 'Váš Hosting',
    logo: vasHostingLogo,
    url: 'https://www.vas-hosting.cz',
    description: 'Připravené, bezpečné servery pro aplikace a domény',
  },
  {
    name: 'Alma Career',
    logo: almaCareerLogo,
    url: 'https://www.almacareer.com/cz',
    description: 'Největší zdroj kandidátů v České republice od roku 1996',
  },
]

const ctvrtkonPartners = [
  {
    name: 'Brilo Team',
    logo: briloLogo,
    url: 'https://www.brilo.team',
    description: 'Největší jihočeská digitální agentura',
  },
  {
    name: 'E.ON',
    logo: eonLogo,
    url: 'https://www.eon.cz',
    description: 'Změňte dodavatele energií s online kalkulací cen',
  },
  {
    name: 'Engel',
    logo: engelLogo,
    url: 'https://www.pracevengelu.cz',
    description: 'Jednička ve výrobě vstřikolisů s přes 1100 zaměstnanci',
  },
  {
    name: 'Eshop-Rychle',
    logo: eshopRychleLogo,
    url: 'https://www.eshop-rychle.cz',
    description: 'Vlastní e-shop snadno a rychle za 5 minut',
  },
  {
    name: 'Headers',
    logo: headersLogo,
    url: 'https://www.headers.cz',
    description: 'Specializace na umělou inteligenci, vývoj od analýzy',
  },
  {
    name: 'Inizio',
    logo: inizioLogo,
    url: 'https://www.inizio.cz',
    description: 'Webová laboratoř a online marketingová agentura',
  },
  {
    name: 'Marian Benčat',
    logo: marianBencatLogo,
    url: 'https://www.linkedin.com/in/marian-ben%C4%8Dat-a832b794',
    description: 'Senior Frontend Developer',
  },
  {
    name: 'naučíme.ai',
    logo: naucimeAiLogo,
    url: 'https://naucime.ai',
    description: 'Praktické kurzy umělé inteligence od profesionálů',
  },
  {
    name: 'Simplia',
    logo: simpliaLogo,
    url: 'https://www.simplia.cz',
    description: 'E-shop, skladový systém, pokladny a další funkce',
  },
  {
    name: 'SmartEmailing',
    logo: smartEmailingLogo,
    url: 'https://www.smartemailing.cz',
    description: 'Inteligentní e-mailingová platforma s 99,9% doručitelností',
  },
  {
    name: 'Tomáš Zahálka',
    logo: tomasZahalkaLogo,
    url: 'https://tomaszahalka.cz',
    description: 'SEO konzultant a PPC specialista na e-shopy',
  },
  {
    name: 'Váš Hosting',
    logo: vasHostingLogo,
    url: 'https://www.vas-hosting.cz',
    description: 'Připravené, bezpečné servery pro aplikace a domény',
  },
  {
    name: 'Websta',
    logo: webstaLogo,
    url: 'https://www.websta.cz',
    description: 'Externí týmy programátorů bez náboru a personální agendy',
  },
]

// One visual hierarchy across the three partner tiers: higher tier = bigger tile and logo.
const cardSize = {
  lg: 'rounded-3xl px-8 py-8 sm:px-10 sm:py-10',
  md: 'rounded-2xl px-6 py-6 sm:py-7',
  sm: 'rounded-2xl px-6 py-5',
}

// Importance ratio 3 : 2 : 1 (general : event : Čtvrtkon).
const logoSize = {
  lg: 'max-h-48 sm:max-h-72',
  md: 'max-h-32 sm:max-h-48',
  sm: 'max-h-16 sm:max-h-24',
}

const tiers = [
  {
    title: 'Generální partneři',
    partners: generalPartners,
    size: 'lg',
    wrap: 'mx-auto max-w-3xl',
    grid: 'grid-cols-1 gap-6 sm:grid-cols-2',
  },
  {
    title: 'Partneři akce',
    partners: eventPartners,
    size: 'md',
    wrap: 'mx-auto max-w-2xl',
    grid: 'grid-cols-1 gap-5 sm:grid-cols-2',
  },
  {
    title: 'Čtvrtkon partneři',
    partners: ctvrtkonPartners,
    size: 'sm',
    wrap: '',
    grid: 'grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3',
  },
]

function PartnerCard({ partner, size }) {
  return (
    <a
      href={partner.url}
      title={partner.description}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'group flex items-center justify-center border border-primary-100 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-card',
        cardSize[size],
      )}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        className={clsx('w-auto max-w-full object-contain', logoSize[size])}
        unoptimized
      />
    </a>
  )
}

export function Sponsors() {
  return (
    <Section id="partneri" className="relative scroll-mt-24 overflow-hidden">
      {/* Full-section color wash, masked with an elliptical radial so it fades
                out on all four sides — strong in the center, gone at the edges.
                Sets the final section apart from the dotted sections above. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-200/50 via-primary-200/40 to-emerald-200/50 motion-safe:animate-drift"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 85% 75% at 50% 50%, #000 30%, transparent 82%)',
            maskImage:
              'radial-gradient(ellipse 85% 75% at 50% 50%, #000 30%, transparent 82%)',
          }}
        />
      </div>

      {/* Top hairline divider (same as above the footer) so the wash doesn't
                end abruptly and the section is cleanly bounded at the top. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <Container className="relative px-8">
        <Reveal>
          <SectionHeading eyebrow="Děkujeme">Partneři</SectionHeading>
        </Reveal>
        <div className="mt-16 flex flex-col gap-12 sm:gap-14">
          {tiers.map((tier) => (
            <Reveal
              key={tier.title}
              className="flex w-full flex-col items-center gap-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary-600">
                {tier.title}
              </h3>
              <div className={clsx('grid w-full', tier.wrap, tier.grid)}>
                {tier.partners.map((partner) => (
                  <PartnerCard
                    key={partner.name}
                    partner={partner}
                    size={tier.size}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

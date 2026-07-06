'use client'

import { useId } from 'react'
import Image from 'next/image'
import { TabGroup, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { TRACKS } from '@/components/tracks'
import vaclavNovotnyImage from '@/images/avatars/vaclav-novotny.webp'
import martinStrouhalImage from '@/images/avatars/martin-strouhal.webp'
import petrSoukupImage from '@/images/avatars/petr-soukup.webp'
import vladaSmitkaImage from '@/images/avatars/vlada-smitka.webp'
import janSmitkaImage from '@/images/avatars/jan-smitka.webp'
import michalSpacekImage from '@/images/avatars/michal-spacek.webp'
import jiriZofajImage from '@/images/avatars/jiri-zofaj.webp'
import karelSimekImage from '@/images/avatars/karel-simek.webp'
import petrVovesImage from '@/images/avatars/petr-voves.webp'
import martinLaudatImage from '@/images/avatars/martin-laudat.webp'
import jakubHajekImage from '@/images/avatars/jakub-hajek.webp'
import martinHrabanekImage from '@/images/avatars/martin-hrabanek.webp'

const days = [
  {
    name: 'Speakers',
    dateTime: '2026-11-28',
    speakers: [
      {
        name: 'Jakub Hájek',
        url: '#jakub-hajek',
        role: 'UX Designer & AI Architect',
        company: 'Jakub Hájek Rocks',
        track: 'DSN',
        image: jakubHajekImage,
      },
      {
        name: 'Martin Hrabánek',
        url: '#martin-hrabanek',
        role: 'Brand designer',
        company: 'Brandtastic!',
        track: 'DSN',
        image: martinHrabanekImage,
      },
      {
        name: 'Martin Laudát',
        url: '#martin-laudat',
        role: 'Lead Product Designer',
        company: 'Dotidot',
        track: 'DSN',
        image: martinLaudatImage,
      },
      {
        name: 'Václav Novotný',
        url: '#vaclav-novotny',
        role: 'co-founder penmate.ai',
        company: 'Headers',
        track: 'DEV',
        image: vaclavNovotnyImage,
      },
      {
        name: 'Jan Smitka',
        url: '#jan-smitka',
        role: 'Tech lead & software engineer',
        company: 'LYNT services',
        track: 'DEV',
        image: janSmitkaImage,
      },
      {
        name: 'Vladimír Smitka',
        url: '#vladimir-smitka',
        role: 'Boss, Analytika, Servery, IT',
        company: 'LYNT services',
        track: 'DEV',
        image: vladaSmitkaImage,
      },
      {
        name: 'Petr Soukup',
        url: '#petr-soukup',
        role: 'Chief People Eliminator',
        company: 'Simplia.cz',
        track: 'DEV',
        image: petrSoukupImage,
      },
      {
        name: 'Martin Strouhal',
        url: '#martin-strouhal',
        role: 'Vývojář a architekt',
        company: 'SmartEmailing',
        track: 'DEV',
        image: martinStrouhalImage,
      },
      {
        name: 'Karel Šimek',
        url: '#karel-simek',
        role: 'Founder & CEO',
        company: 'Adventurer Solutions',
        track: 'MKT',
        image: karelSimekImage,
      },
      {
        name: 'Michal Špaček',
        url: '#michal-spacek',
        role: 'Head of Security',
        company: 'Shoptet',
        track: 'DEV',
        image: michalSpacekImage,
      },
      {
        name: 'Petr Voves',
        url: '#petr-voves',
        role: 'CEO',
        company: 'OchutnejOrech.cz',
        track: 'MKT',
        image: petrVovesImage,
      },
      {
        name: 'Jiří Žofaj',
        url: '#jiri-zofaj',
        role: 'Zalívač květin a CEO v RESULTIO',
        company: 'RESULTIO',
        track: 'MKT',
        image: jiriZofajImage,
      },
    ],
  },
]

days[0].speakers.sort((a, b) => a.name.localeCompare(b.name, 'cs'))

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()

  return (
    <Section id="prednasejici" className="relative scroll-mt-24">
      <ImageClipPaths id={id} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Kdo vystoupí" id="speakers-title">
            Přednášející
          </SectionHeading>
        </Reveal>

        <TabGroup className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-20 lg:grid-cols-4">
          <TabPanels className="lg:col-span-4">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-10 gap-y-12 ui-not-focus-visible:outline-none xs:grid-cols-2 xs:gap-y-10 lg:grid-cols-4"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => {
                  const track = TRACKS[speaker.track]
                  return (
                    <Reveal
                      key={speakerIndex}
                      delay={(speakerIndex % 4) * 60}
                      className="group flex flex-col items-center gap-4"
                    >
                      <a
                        className="relative block aspect-square w-full max-w-56 transform overflow-hidden rounded-4xl transition duration-300 group-hover:-translate-y-1"
                        href={speaker.url}
                        aria-label={speaker.name}
                      >
                        <div
                          className={clsx(
                            'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                            track ? track.border : 'border-primary-200',
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-primary-50 shadow-sm transition duration-300 group-hover:shadow-xl"
                          style={{
                            clipPath: `url(#${id}-${speakerIndex % 3})`,
                          }}
                        >
                          <Image
                            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            src={speaker.image}
                            alt=""
                            unoptimized
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </a>
                      <div className="flex flex-col items-center gap-1.5 text-center">
                        {track && (
                          <span
                            className={clsx(
                              'inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em]',
                              track.text,
                            )}
                          >
                            <span
                              className={clsx(
                                'h-1.5 w-1.5 rounded-full',
                                track.dot,
                              )}
                            />
                            {track.code}
                          </span>
                        )}
                        <a
                          href={speaker.url}
                          className="text-primary-700 hover:underline"
                        >
                          <h3 className="font-display text-xl font-bold tracking-tight">
                            {speaker.name}
                          </h3>
                        </a>
                        {speaker.role && (
                          <p className="text-sm tracking-tight text-primary-900/80">
                            {speaker.role}
                            {speaker.company && (
                              <span>
                                <br />@ {speaker.company}
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                    </Reveal>
                  )
                })}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

        <div className="mt-14 text-center sm:mt-16">
          <BuyTicketButton />
        </div>
      </Container>
    </Section>
  )
}

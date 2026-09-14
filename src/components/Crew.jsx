import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'

import anetaVrkocovaImage from '@/images/crew/aneta-vrkocova.jpeg'
import jakubHajekImage from '@/images/crew/jakub-hajek.jpeg'
import janSverakImage from '@/images/crew/jan-sverak.jpeg'
import karelHladisImage from '@/images/crew/karel-hladis.jpeg'
import lenkaRuzickovaImage from '@/images/crew/lenka-ruzickova.jpeg'
import martinHlavacImage from '@/images/crew/martin-hlavac.jpeg'
import monikaChmelovaImage from '@/images/crew/monika-chmelova.jpeg'
import natalieSverakovaImage from '@/images/crew/natalie-sverakova.jpeg'

const groups = [
  {
    title: 'Hlavní organizátor',
    members: [{ name: 'Martin Hlaváč', image: martinHlavacImage }],
    size: 'lg',
  },
  {
    title: 'Zástupce',
    members: [{ name: 'Lenka Růžičková', image: lenkaRuzickovaImage }],
    size: 'lg',
  },
  {
    title: 'Chaptery',
    members: [
      { name: 'Jan Svěrák', image: janSverakImage },
      { name: 'Jakub Hájek', image: jakubHajekImage },
      { name: 'Karel Hladiš', image: karelHladisImage },
    ],
    size: 'sm',
  },
  {
    title: 'Support',
    members: [
      { name: 'Natálie Svěráková', image: natalieSverakovaImage },
      { name: 'Aneta Vrkočová', image: anetaVrkocovaImage },
      { name: 'Monika Chmelová', image: monikaChmelovaImage },
    ],
    size: 'sm',
  },
]

const avatarSize = {
  lg: 'h-28 w-28 sm:h-32 sm:w-32',
  sm: 'h-20 w-20 sm:h-24 sm:w-24',
}

const nameSize = {
  lg: 'text-xl',
  sm: 'text-base',
}

function Member({ member, size, delay }) {
  return (
    <Reveal delay={delay} className="group flex flex-col items-center gap-3">
      <div
        className={clsx(
          'overflow-hidden rounded-full border border-primary-100 bg-primary-50 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-card',
          avatarSize[size],
        )}
      >
        <Image
          src={member.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          unoptimized
        />
      </div>
      <h4
        className={clsx(
          'text-center font-display font-bold tracking-tight text-primary-700',
          nameSize[size],
        )}
      >
        {member.name}
      </h4>
    </Reveal>
  )
}

export function Crew() {
  return (
    <Section id="crew" className="relative scroll-mt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Kdo to všechno chystá">Crew</SectionHeading>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col items-center gap-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary-600">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
                {group.members.map((member, i) => (
                  <Member
                    key={member.name}
                    member={member}
                    size={group.size}
                    delay={i * 60}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

'use client'

import clsx from 'clsx'

import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { TRACKS } from '@/components/tracks'

const program = [
  {
    block: [
      {
        name: 'Snídaně',
        description: 'Kdo si přivstane, tak se může nasnídat a pokecat už ráno',
        start: '8:00',
        end: '9:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Úvodní slovo',
        start: '9:00',
        end: '9:15',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Naprogramuješ cokoliv. A co dál?',
        description: 'Václav Novotný',
        track: 'DEV',
        id: 'vaclav-novotny',
        start: '9:15',
        end: '10:00',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Marketing v pohorách: Příběh budování startupu Adventurer',
        description: 'Karel Šimek',
        track: 'MKT',
        id: 'karel-simek',
        start: '9:15',
        end: '10:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Přestávka',
        start: '10:00',
        end: '10:15',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Bude upřesněno',
        description: 'Martin Hrabánek',
        track: 'DSN',
        id: 'martin-hrabanek',
        start: '10:15',
        end: '11:00',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'SQLite je na nic',
        description: 'Martin Strouhal',
        track: 'DEV',
        id: 'martin-strouhal',
        start: '10:15',
        end: '11:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Oběd',
        description: 'Prostor na oběd, či případný networking',
        start: '11:00',
        end: '12:30',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        talks: [
          {
            name: 'Rozhovor: Karel Hladiš a host',
            track: 'MKT',
            start: '11:00',
            end: '11:30',
          },
          {
            name: 'Rozhovor: Jan Svěrák a host',
            track: 'DEV',
            start: '12:00',
            end: '12:30',
          },
        ],
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Bude upřesněno',
        description: 'Petr Voves',
        track: 'MKT',
        id: 'petr-voves',
        start: '12:30',
        end: '13:15',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Začněte s HW programováním ještě dnes',
        description: 'Vladimír Smitka',
        track: 'DEV',
        id: 'vladimir-smitka',
        start: '12:30',
        end: '13:15',
      },
    ],
  },
  {
    block: [
      {
        name: 'Přestávka',
        start: '13:15',
        end: '13:30',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Jak se změní IT firmy v době vibe codérů',
        description: 'Petr Soukup',
        track: 'DEV',
        id: 'petr-soukup',
        start: '13:30',
        end: '14:15',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Only Handle It Once a jak daleko se to dá posunout.',
        description: 'Jakub Hájek',
        track: 'DSN',
        id: 'jakub-hajek',
        start: '13:30',
        end: '14:15',
      },
    ],
  },
  {
    block: [
      {
        name: 'Přestávka',
        start: '14:15',
        end: '14:30',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'AI ze mě neudělala vývojáře. Udělala ze mě lepšího designéra.',
        description: 'Martin Laudát',
        track: 'DSN',
        id: 'martin-laudat',
        start: '14:30',
        end: '15:15',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Napiš mi Dockerfile. Make no mistakes.',
        description: 'Jan Smitka',
        track: 'DEV',
        id: 'jan-smitka',
        start: '14:30',
        end: '15:15',
      },
    ],
  },
  {
    block: [
      {
        name: 'Přestávka',
        start: '15:15',
        end: '16:00',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Bude upřesněno',
        description: 'Michal Špaček',
        track: 'DEV',
        id: 'michal-spacek',
        start: '16:00',
        end: '16:45',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Proč obsah bude král i v roce 2027',
        description: 'Jiří Žofaj',
        track: 'MKT',
        id: 'jiri-zofaj',
        start: '16:00',
        end: '16:45',
      },
    ],
  },
  {
    block: [
      {
        name: 'Přestávka',
        start: '16:45',
        end: '17:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Zakončení',
        start: '17:00',
        end: '18:00',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Prostor „Kavárna“',
        name: 'Večírek + after párty',
        start: '18:00',
        end: '22:00',
      },
    ],
  },
]

function stageAccent(stageName) {
  if (!stageName) return 'text-slate-400'
  if (stageName.includes('1')) return 'text-primary-600'
  if (stageName.includes('2')) return 'text-emerald-600'
  return 'text-accent'
}

function StageLabel({ stageName, track, className }) {
  const t = TRACKS[track]
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider',
        t ? t.text : stageAccent(stageName),
        className,
      )}
    >
      <span className={clsx('h-1.5 w-1.5 rounded-full', t ? t.dot : 'bg-current')} />
      {stageName}
      {track ? ` (${track})` : ''}
    </span>
  )
}

function TimeRange({ start, end }) {
  return (
    <p className="font-mono text-sm text-slate-500">
      <time dateTime={`T${start}-08:00`}>{start}</time> –{' '}
      <time dateTime={`T${end}-08:00`}>{end}</time>
    </p>
  )
}

function ProgramTable({ timeBlock }) {
  const blockWidth = timeBlock.block.length <= 1 ? 'md:col-span-2' : ''

  return (
    <div className="grid auto-rows-auto grid-cols-1 transition-colors odd:bg-white/40 even:bg-primary-100/30 md:grid-cols-2">
      {timeBlock.block.map((stage, i) => (
        <div
          id={stage.id}
          className={clsx(
            blockWidth,
            'flex scroll-mt-28 flex-col border-b border-primary-100/70 px-4 py-6 text-center last:border-b-0 sm:px-8 md:border-b-0 md:border-r md:last:border-r-0',
          )}
          key={i}
        >
          {stage.talks ? (
            <div className="flex h-full flex-col justify-center gap-4">
              {stage.talks.map((talk, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center gap-1 border-t border-primary-100/70 pt-4 first:border-t-0 first:pt-0"
                >
                  <h4 className="font-semibold tracking-tight text-primary-900 sm:text-lg">
                    {talk.name}
                  </h4>
                  <StageLabel stageName={stage.stageName} track={talk.track} />
                  <TimeRange start={talk.start} end={talk.end} />
                </div>
              ))}
            </div>
          ) : stage.stageName ? (
            <>
              <h4 className="mb-1 font-semibold tracking-tight text-primary-900 sm:text-lg">
                {stage.name}
              </h4>
              {stage.description && (
                <p className="mb-3 tracking-tight text-slate-600">
                  {stage.description}
                </p>
              )}
              <StageLabel
                stageName={stage.stageName}
                track={stage.track}
                className="mt-auto justify-center pt-2"
              />
              {stage.start && stage.end && (
                <TimeRange start={stage.start} end={stage.end} />
              )}
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-2">
              <h4 className="font-semibold tracking-tight text-primary-900 sm:text-lg">
                {stage.name}
              </h4>
              {stage.description && (
                <p className="tracking-tight text-slate-600">
                  {stage.description}
                </p>
              )}
              {stage.start && stage.end && (
                <TimeRange start={stage.start} end={stage.end} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ScheduleStatic() {
  return (
    <div className="glass mx-auto flex max-w-4xl flex-col divide-y divide-primary-100/70 overflow-hidden rounded-3xl shadow-card">
      {program.map((stage, i) => (
        <ProgramTable timeBlock={stage} key={i} />
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <Section className="relative scroll-mt-24" id="program">
      {/* Single dot grid; bleeds up behind the Speakers section (-z-10) so the two
          sections connect seamlessly, with no white gap. */}
      <div
        className="bg-dots pointer-events-none absolute inset-x-0 -top-72 bottom-0 -z-10"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0px, #000 220px, #000 calc(100% - 180px), transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0px, #000 220px, #000 calc(100% - 180px), transparent 100%)',
        }}
      />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading eyebrow="Dva sály, celý den">Program</SectionHeading>
        </Reveal>
      </Container>
      <div className="relative z-10 mt-10 text-center sm:mt-14">
        <Container className="relative">
          <Reveal>
            <ScheduleStatic />
          </Reveal>
          <BuyTicketButton className="mt-12 sm:mt-14" />
        </Container>
      </div>
    </Section>
  )
}

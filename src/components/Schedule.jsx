'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Button } from '@/components/Button'
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
        name: 'Naprogramuješ cokoliv. A co dál?',
        description: 'Václav Novotný',
        track: 'DEV',
        id: 'vaclav-novotny',
        start: '9:15',
        end: '10:00',
      },
      {
        stageName: 'Stage 2',
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
        name: 'Případová studie STACA',
        description: 'Martin Hrabánek',
        track: 'DSN',
        id: 'martin-hrabanek',
        start: '10:15',
        end: '11:00',
      },
      {
        stageName: 'Stage 2',
        name: 'Retry, retry, RIP. Opravdu potřebujete webhooky?',
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
        talks: [
          {
            name: 'Rozhovor: Marketing a AI bez růžových brýlí',
            description: 'Host: Lukáš Chládek',
            track: 'MKT',
            start: '11:00',
            end: '11:30',
          },
          {
            name: 'Rozhovor: AI battle a vibecoding',
            description: 'Host: chemiX',
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
        name: 'Rok a půl poté v Ochutnej Ořech: expanze do zahraničí a budování značky v době AI',
        description: 'Petr Voves',
        track: 'MKT',
        id: 'petr-voves',
        start: '12:30',
        end: '13:15',
      },
      {
        stageName: 'Stage 2',
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
        name: 'Jak se změní IT firmy v době vibe codérů',
        description: 'Petr Soukup',
        track: 'DEV',
        id: 'petr-soukup',
        start: '13:30',
        end: '14:15',
      },
      {
        stageName: 'Stage 2',
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
        name: 'AI ze mě neudělala vývojáře. Udělala ze mě lepšího designéra.',
        description: 'Martin Laudát',
        track: 'DSN',
        id: 'martin-laudat',
        start: '14:30',
        end: '15:15',
      },
      {
        stageName: 'Stage 2',
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
        name: 'Supply chain security - aby vás jeden divnej commit v používané knihovně moc nesejmul',
        description: 'Michal Špaček',
        track: 'DEV',
        id: 'michal-spacek',
        start: '16:00',
        end: '16:45',
      },
      {
        stageName: 'Stage 2',
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
        name: 'Zakončení',
        start: '17:00',
        end: '17:10',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Prostor „Kavárna“',
        name: 'Večírek + after párty',
        start: '17:30',
        end: '23:00',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Prostor „Kavárna“',
        name: 'AI battle',
        start: '18:00',
        end: '19:00',
      },
      {
        stageName: 'Prostor „Kavárna“',
        name: 'Stand up comedy',
        start: '19:00',
        end: '20:00',
      },
      {
        stageName: 'Prostor „Kavárna“',
        name: 'DJ David Čáp live',
        start: '20:00',
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
        'inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider sm:text-xs',
        t ? t.text : stageAccent(stageName),
        className,
      )}
    >
      <span
        className={clsx(
          'hidden h-1.5 w-1.5 shrink-0 rounded-full sm:block',
          t ? t.dot : 'bg-current',
        )}
      />
      {stageName}
      {track ? ` (${track})` : ''}
    </span>
  )
}

// "8:00" -> "08:00": a valid <time> value needs a two-digit hour.
function toTimeValue(t) {
  return t.padStart(5, '0')
}

function TimeRange({ start, end }) {
  return (
    <p className="font-mono text-xs text-slate-500 sm:text-sm">
      <time dateTime={toTimeValue(start)}>{start}</time> –{' '}
      <time dateTime={toTimeValue(end)}>{end}</time>
    </p>
  )
}

// --- "Now" line: shown only on the conference day, in Prague time. ---

const EVENT_DATE = '2026-11-28'

function toMinutes(t) {
  const [h, m] = t.split(':')
  return h * 60 + Number(m)
}

// [start, end] in minutes for each program row, nested talks included.
const ROW_SPANS = program.map(({ block }) => {
  const times = block
    .flatMap((item) => item.talks ?? [item])
    .flatMap((t) => [toMinutes(t.start), toMinutes(t.end)])
  return [Math.min(...times), Math.max(...times)]
})

// Minutes since midnight in Prague, or null outside the conference day.
// `?now=10:30` fakes the time for testing.
function pragueMinutes() {
  const fake = new URLSearchParams(window.location.search).get('now')
  if (/^\d{1,2}:\d{2}$/.test(fake ?? '')) return toMinutes(fake)

  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Prague',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(new Date())
      .map(({ type, value }) => [type, value]),
  )
  if (`${p.year}-${p.month}-${p.day}` !== EVENT_DATE) return null
  return p.hour * 60 + Number(p.minute)
}

// Row the line belongs to and how far into it (0–1). Evening rows overlap,
// so the latest started row wins; between rows the line sits on the boundary.
function locate(now) {
  let row = -1
  ROW_SPANS.forEach(([start, end], i) => {
    if (start <= now && now < end) row = i
  })
  if (row >= 0) {
    const [start, end] = ROW_SPANS[row]
    return { row, frac: (now - start) / (end - start), live: true }
  }
  const next = ROW_SPANS.findIndex(([start]) => start > now)
  return next > 0 ? { row: next, frac: 0, live: false } : null
}

function formatMinutes(m) {
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`
}

function useNow() {
  const [now, setNow] = useState(null)
  useEffect(() => {
    const tick = () => setNow(pragueMinutes())
    tick()
    const id = setInterval(tick, 30_000)
    // Background tabs throttle timers; catch up as soon as the tab is back.
    document.addEventListener('visibilitychange', tick)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', tick)
    }
  }, [])
  return now
}

// Full class names so Tailwind can pick them up; one column per item in the block.
const GRID_COLS = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' }

function ProgramTable({ timeBlock, current }) {
  return (
    <div
      className={clsx(
        'grid auto-rows-auto transition-colors odd:bg-white/40 even:bg-primary-100/30',
        current && '!bg-primary-100/70',
        GRID_COLS[timeBlock.block.length],
      )}
    >
      {timeBlock.block.map((stage, i) => (
        <div
          id={stage.id}
          className="flex scroll-mt-28 flex-col border-r border-primary-100/70 px-3 py-4 text-center last:border-r-0 sm:px-8 sm:py-6"
          key={i}
        >
          {stage.talks ? (
            <div className="flex h-full flex-col justify-center gap-4">
              {stage.talks.map((talk, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center gap-1 border-t border-primary-100/70 pt-4 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-sm font-semibold tracking-tight text-primary-900 sm:text-lg">
                    {talk.name}
                  </h3>
                  {talk.description && (
                    <p className="text-sm tracking-tight text-slate-600 sm:text-base">
                      {talk.description}
                    </p>
                  )}
                  <StageLabel stageName={stage.stageName} track={talk.track} />
                  <TimeRange start={talk.start} end={talk.end} />
                </div>
              ))}
            </div>
          ) : stage.stageName ? (
            <>
              <h3 className="mb-1 text-sm font-semibold tracking-tight text-primary-900 sm:text-lg">
                {stage.name}
              </h3>
              {stage.description && (
                <p className="mb-3 text-sm tracking-tight text-slate-600 sm:text-base">
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
              <h3 className="font-semibold tracking-tight text-primary-900 sm:text-lg">
                {stage.name}
              </h3>
              {stage.description && (
                <p className="text-sm tracking-tight text-slate-600 sm:text-base">
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

function ScheduleStatic({ ref, current }) {
  return (
    <div
      ref={ref}
      className="glass mx-auto flex max-w-4xl flex-col divide-y divide-primary-100/70 overflow-hidden rounded-3xl shadow-card"
    >
      {program.map((stage, i) => (
        <ProgramTable timeBlock={stage} key={i} current={current === i} />
      ))}
    </div>
  )
}

// Full-width "now" line over the whole section; `top` is relative to the section.
function useNowLine(sectionRef, listRef) {
  const now = useNow()
  const pos = now === null ? null : locate(now)
  const [top, setTop] = useState(null)

  useEffect(() => {
    if (!pos) {
      setTop(null)
      return
    }
    const place = () => {
      const row = listRef.current.children[pos.row]
      // offsetTop ignores the Reveal translate, so the line never lands mid-animation.
      let y = pos.frac * row.offsetHeight
      for (
        let el = row;
        el && el !== sectionRef.current;
        el = el.offsetParent
      ) {
        y += el.offsetTop
      }
      setTop(y)
    }
    place()
    const observer = new ResizeObserver(place)
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [pos?.row, pos?.frac]) // eslint-disable-line react-hooks/exhaustive-deps

  return { now, top, current: pos?.live ? pos.row : null }
}

export function Schedule() {
  const sectionRef = useRef(null)
  const listRef = useRef(null)
  const { now, top, current } = useNowLine(sectionRef, listRef)

  return (
    <Section ref={sectionRef} className="relative scroll-mt-24" id="program">
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
          <div className="mt-6 text-center">
            {/* File lives in /public; Link prepends basePath, `download` skips the client router. */}
            <Button
              href="/ctvrtcon-2026-program-a4.pdf"
              download
              prefetch={false}
              variant="secondary"
              size="sm"
            >
              Stáhnout program v PDF ↓
            </Button>
          </div>
        </Reveal>
      </Container>
      <div className="relative z-10 mt-10 text-center sm:mt-14">
        <Container className="relative">
          <Reveal>
            <ScheduleStatic ref={listRef} current={current} />
          </Reveal>
          <BuyTicketButton className="mt-12 sm:mt-14" />
        </Container>
      </div>
      {top !== null && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 z-20 -translate-y-1/2 transition-[top] duration-700"
          style={{ top }}
        >
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-accent/50" />
          {/* Flush with the page's left edge, clear of the program card. */}
          <span className="relative inline-block rounded-r-full bg-accent py-0.5 pl-2 pr-2.5 font-mono text-[11px] font-semibold text-white shadow-card">
            <span className="max-sm:hidden">Teď </span>
            {formatMinutes(now)}
          </span>
        </div>
      )}
    </Section>
  )
}

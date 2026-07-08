import Image from 'next/image'
import clsx from 'clsx'

import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Countdown } from '@/components/Countdown'
import { Section } from '@/components/Section'
import { TRACK_LIST } from '@/components/tracks'
import backgroundImage from '@/images/background.webp'

export function Hero() {
  return (
    <Section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Full-height vertical wash across the hero — holds color top-to-bottom on
            large monitors, where the fixed-size corner blobs can't reach. */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/60 via-primary-50/20 to-emerald-100/50" />
        {/* Color blobs for depth and life — top-right and bottom-left so the color
            flows diagonally top-to-bottom. */}
        <div className="absolute -right-40 -top-40 h-[52rem] w-[52rem] rounded-full bg-gradient-to-br from-sky-200/60 via-primary-200/50 to-emerald-200/60 blur-3xl motion-safe:animate-drift" />
        <div className="absolute -bottom-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-emerald-200/55 via-primary-100/30 to-transparent blur-3xl motion-safe:animate-drift" />
      </div>

      {/* Hairline dividers top and bottom (same as partners/footer) so the hero
          wash starts and ends cleanly against the neighboring sections. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="flex max-w-2xl flex-col items-start gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-600 sm:text-sm">
              SO · <time dateTime="2026-11-28">28. 11. 2026</time> · Riegrova
              51, České Budějovice
            </p>

            <h1 className="font-display font-bold leading-[1.05] tracking-tight text-primary-800">
              <span className="sr-only">Čtvrtkon - </span>
              <span className="block whitespace-normal text-4xl xs:whitespace-nowrap sm:text-6xl lg:text-7xl">
                ČtvrtCON <span className="text-gradient">2026</span>
              </span>
              <span className="mt-3 block text-2xl font-medium text-primary-500 lg:text-4xl">
                konference Čtvrtkonu
              </span>
            </h1>

            <div className="flex flex-wrap gap-2">
              {TRACK_LIST.map((track) => (
                <span
                  key={track.code}
                  title={track.label}
                  className={clsx(
                    'inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider ring-1 ring-inset backdrop-blur',
                    track.chip,
                  )}
                >
                  <span
                    className={clsx('h-1.5 w-1.5 rounded-full', track.dot)}
                  />
                  {track.code}
                </span>
              ))}
            </div>

            <div className="flex max-w-xl flex-col gap-4">
              <p className="text-lg text-primary-900">
                Historicky druhá celodenní konference pro celou komunitu
                Čtvrtkonu. Přijďte se potkat a nachytřit napříč všemi hlavními
                chaptery: Development (DEV), Marketing (MKT), Design (DSN).
              </p>
              <p className="text-base text-primary-900/80">
                Čekají na Vás dva sály s přednáškami souběžně a přestávky na
                networking. Než to začne, tak si dáme snídani, mezi i něco k
                obědu a odpoledne bude připravena svačina. A kdo bude chtít, tak
                může pokračovat na after párty přímo na místě.
              </p>
            </div>

            <Countdown className="mt-1" />

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <BuyTicketButton />
              <Button variant="secondary" href="#program">
                Program
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 motion-safe:animate-bounce"
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>

            <div className="mt-1 flex flex-col gap-2 rounded-2xl bg-white/60 px-4 py-3 text-primary-900 ring-1 ring-inset ring-primary-200 backdrop-blur">
              <p className="flex items-start gap-2.5 text-sm sm:text-base">
                <span aria-hidden="true">🍽️</span>
                <span>
                  Součástí vstupenky na konferenci je celodenní občerstvení.
                </span>
              </p>
              <p className="flex items-start gap-2.5 text-sm sm:text-base">
                <span aria-hidden="true">🍺</span>
                <span>
                  Součástí vstupenky na after párty je občerstvení, pivo i víno.
                </span>
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-6 -z-10 rounded-full bg-gradient-to-br from-sky-300/40 via-primary-300/30 to-emerald-300/50 blur-3xl motion-safe:animate-drift" />
            <Image
              src={backgroundImage}
              alt=""
              priority
              unoptimized
              className="mx-auto h-auto w-full max-w-lg drop-shadow-2xl motion-safe:animate-float"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

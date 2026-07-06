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
        <div className="absolute -right-40 -top-40 h-[46rem] w-[46rem] rounded-full bg-gradient-to-br from-sky-200/50 via-primary-200/40 to-emerald-200/50 blur-3xl motion-safe:animate-drift" />
        <div className="absolute -left-28 top-1/2 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="flex max-w-2xl flex-col items-start gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-500 sm:text-sm">
              SO · <time dateTime="2026-11-28">28. 11. 2026</time> · Riegrova
              51, České Budějovice
            </p>

            <h1 className="font-display font-bold leading-[1.05] tracking-tight text-primary-800">
              <span className="sr-only">Čtvrtkon - </span>
              <span className="block whitespace-nowrap text-4xl sm:text-6xl lg:text-7xl">
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
                  <span className={clsx('h-1.5 w-1.5 rounded-full', track.dot)} />
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
                networking. Než to začne, tak si dáme snídani, mezi i něco k obědu
                a odpoledne bude připravena svačina. A kdo bude chtít, tak může
                pokračovat na after párty přímo na místě.
              </p>
            </div>

            <Countdown className="mt-1" />

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <BuyTicketButton />
              <Button
                variant="secondary"
                href="https://2024.ctvrtcon.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ročník 2024
              </Button>
            </div>

            <div className="mt-1 flex flex-col gap-1 border-l-2 border-primary-200 pl-4 text-sm text-primary-900/70">
              <p>Součástí vstupenky na konferenci je celodenní občerstvení.</p>
              <p>
                Součástí vstupenky na after párty je občerstvení, pivo i víno.
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

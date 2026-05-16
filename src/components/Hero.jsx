import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
// import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export function Hero() {
  return (
    <Section className="relative">
      <BackgroundImage
        position="right"
        className="pointer-events-none opacity-75 lg:opacity-100"
      />
      <Container className="relative">
        <div className="mx-auto flex flex-col items-start gap-6">
          <h1 className="font-display text-6xl font-bold leading-9 tracking-tight text-primary-700 lg:text-8xl">
            <span className="sr-only">Čtvrtkon - </span> ČtvrtCON{' '}
            <span className="text-3xl lg:text-5xl">konference</span>
          </h1>
          <div className="flex font-mono">
            <div className="-mx-0 flex flex-col text-lg text-primary-700 sm:flex-row sm:gap-4 sm:text-xl">
              <p>
                <time dateTime="2026-11-28">28.11.2026</time>
              </p>
              <span className="hidden sm:block">|</span>
              <p>Riegrova 51, České Budějovice</p>
            </div>
          </div>
          <div className="text-primary-900">
            <p className="mb-4">
              Druhý ročník celodenní konference komunity Čtvrtkonu se vrací
              28. 11. 2026 do Riegrova 51 v Českých Budějovicích.
              <br />
              Přijďte se opět potkat a nachytřit napříč všemi hlavními chaptery:
              <br />
              Development (DEV), Marketing (MKT), Design (DSN).
            </p>
            <p className="mb-4">
              Program a speakery teprve potvrzujeme — sledujte web, postupně
              budeme doplňovat detaily.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button
              href="https://2024.ctvrtcon.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Podívat se na ročník 2024
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

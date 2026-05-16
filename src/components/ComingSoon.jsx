import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

const placeholders = [
  {
    label: 'Speakeři',
    description: 'Sestavu řečníků postupně potvrzujeme.',
  },
  {
    label: 'Program',
    description: 'Dva sály a celodenní program teprve skládáme.',
  },
]

export function ComingSoon() {
  return (
    <Section className="relative">
      <Container className="relative">
        <div className="mx-auto flex flex-col items-start gap-6">
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary-700 lg:text-5xl">
            Brzy zveřejníme
          </h2>
          <p className="max-w-2xl text-primary-900">
            Speakery a program druhého ročníku právě domlouváme. Stránku
            budeme průběžně doplňovat — sledujte nás a nezmeškáte nic
            podstatného. Partnery najdete níže.
          </p>
          <dl className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {placeholders.map(({ label, description }) => (
              <div
                key={label}
                className="rounded-lg border-2 border-dashed border-primary-300 p-6"
              >
                <dt className="font-mono text-primary-700">{label}</dt>
                <dd className="mt-2 text-sm text-primary-900">{description}</dd>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-primary-500">
                  Připravujeme
                </p>
              </div>
            ))}
          </dl>
          <p className="text-primary-900">
            Mezitím si můžete prohlédnout, jak vypadal{' '}
            <a
              className="font-semibold text-primary-600 underline underline-offset-4 hover:text-primary-500"
              href="https://2024.ctvrtcon.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              ročník 2024
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  )
}

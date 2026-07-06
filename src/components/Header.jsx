import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const nav = [
  { label: 'Program', href: '#program' },
  { label: 'Přednášející', href: '#prednasejici' },
  { label: 'Partneři', href: '#partneri' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-3">
        <a
          href="#top"
          aria-label="ČtvrtCON — nahoru"
          className="text-primary-600"
        >
          <Logo className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm tracking-wide text-primary-700 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <BuyTicketButton size="sm" />
      </Container>
    </header>
  )
}

'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { BuyTicketButton } from '@/components/BuyTicketButton'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const nav = [
  { label: 'Program', href: '#program' },
  { label: 'Přednášející', href: '#prednasejici' },
  { label: 'Partneři', href: '#partneri' },
]

export function Header() {
  // Reveal the header only once the hero (#top) has scrolled out of view, so the
  // hero gets a clean, chrome-free first impression.
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero =
      typeof document !== 'undefined' ? document.getElementById('top') : null

    if (
      !hero ||
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window)
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur transition-all duration-300 ease-out',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0',
      )}
    >
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

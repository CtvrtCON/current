'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

// 28 Nov 2026, 08:00 CET. +01:00 is correct: late November is winter time, not CEST (+02:00).
const TARGET = new Date('2026-11-28T08:00:00+01:00').getTime()

function getParts() {
  const total = Math.max(0, TARGET - Date.now())
  return {
    total,
    done: total <= 0,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total % 86_400_000) / 3_600_000),
    minutes: Math.floor((total % 3_600_000) / 60_000),
    seconds: Math.floor((total % 60_000) / 1_000),
  }
}

const units = [
  { key: 'days', label: 'dní' },
  { key: 'hours', label: 'hod' },
  { key: 'minutes', label: 'min' },
  { key: 'seconds', label: 'sek' },
]

function pad(value) {
  return String(value).padStart(2, '0')
}

export function Countdown({ className }) {
  // null on server and first render → stable placeholder, avoids hydration mismatch.
  const [parts, setParts] = useState(null)

  useEffect(() => {
    const initial = getParts()
    setParts(initial)
    if (initial.done) return

    const id = setInterval(() => {
      const next = getParts()
      setParts(next)
      if (next.done) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (parts?.done) {
    return (
      <div
        className={clsx(
          'glass inline-flex items-center gap-2 rounded-2xl px-4 py-2 shadow-card',
          className,
        )}
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Už to začalo!
        </span>
      </div>
    )
  }

  return (
    <div
      className={clsx('flex items-center gap-2 sm:gap-3', className)}
      aria-label="Odpočet do začátku konference"
    >
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="glass flex min-w-[3.75rem] flex-col items-center rounded-2xl px-3 py-2 shadow-card"
        >
          <span className="font-mono text-2xl font-semibold tabular-nums text-accent sm:text-3xl">
            {parts === null
              ? '––'
              : key === 'days'
                ? parts[key]
                : pad(parts[key])}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary-600">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

import clsx from 'clsx'

import { Button } from '@/components/Button'

// Registration is closed (capacity reached) — set to true to enable the button again.
const REGISTRATIONS_OPEN = false

const CLOSED_TOOLTIP = 'Kapacita je naplněna, registrace jsou uzavřeny.'

const TICKET_URL =
  'https://form.fapi.cz/?id=b4850944-58b3-490e-815c-7b1713206693'

export function BuyTicketButton({ className, size }) {
  if (!REGISTRATIONS_OPEN) {
    // Disabled buttons swallow hover in some browsers, so the tooltip lives on a wrapper.
    return (
      <span
        title={CLOSED_TOOLTIP}
        className={clsx('inline-flex cursor-not-allowed', className)}
      >
        <Button
          type="button"
          size={size}
          className="pointer-events-none"
          disabled
          aria-label={`Koupit vstupenku! – ${CLOSED_TOOLTIP}`}
        >
          Koupit vstupenku!
        </Button>
      </span>
    )
  }

  return (
    <Button href={TICKET_URL} target="_blank" size={size} className={className}>
      Koupit vstupenku!
    </Button>
  )
}

import { Button } from '@/components/Button'

// Temporarily off until sales open — flip to true when registration opens.
const REGISTRATIONS_OPEN = false

const TICKET_URL =
  'https://form.fapi.cz/?id=b4850944-58b3-490e-815c-7b1713206693'

export function BuyTicketButton({ className, size }) {
  if (!REGISTRATIONS_OPEN) {
    return (
      <Button type="button" size={size} className={className} disabled>
        Koupit vstupenku!
      </Button>
    )
  }

  return (
    <Button href={TICKET_URL} target="_blank" size={size} className={className}>
      Koupit vstupenku!
    </Button>
  )
}

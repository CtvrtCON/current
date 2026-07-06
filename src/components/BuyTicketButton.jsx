import {Button} from '@/components/Button'

export function BuyTicketButton({className, size}) {
    return (
        <Button href="https://form.fapi.cz/?id=b4850944-58b3-490e-815c-7b1713206693" target="_blank" size={size} className={className}>
            Koupit vstupenku!
        </Button>
    )
}

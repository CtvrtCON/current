import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Footer() {
    return (
        <footer className="relative flex-none py-14">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"/>
            <Container className="flex flex-col items-center justify-between gap-5">
                <a
                    href="https://ctvrtkon.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Čtvrtkon – hlavní web"
                    className="text-primary-600 transition hover:text-accent"
                >
                    <Logo className="h-11 w-auto"/>
                </a>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em]">
                    <span className="text-track-dev-ink">DEV</span>
                    <span className="text-primary-300">·</span>
                    <span className="text-track-mkt-ink">MKT</span>
                    <span className="text-primary-300">·</span>
                    <span className="text-track-dsn-ink">DSN</span>
                </div>
                <p className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} <a href="https://ctvrtkon.cz" className="transition hover:text-accent" target="_blank" rel="noopener noreferrer">Čtvrtkon z.s.</a>
                </p>
            </Container>
        </footer>
    )
}

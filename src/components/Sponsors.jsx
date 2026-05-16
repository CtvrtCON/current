import Image from 'next/image'

import {Container} from '@/components/Container'
import {Section} from '@/components/Section'

import almaCareerLogo from '@/images/partners/almacareer.png'
import briloLogo from '@/images/partners/brilo.png'
import engelLogo from '@/images/partners/engel.png'
import eonLogo from '@/images/partners/eon.png'
import eshopRychleLogo from '@/images/partners/eshop-rychle.png'
import headersLogo from '@/images/partners/headers.png'
import inizioLogo from '@/images/partners/inizio.png'
import marianBencatLogo from '@/images/partners/marian-bencat.png'
import naucimeAiLogo from '@/images/partners/naucime-ai.png'
import simpliaLogo from '@/images/partners/simplia.png'
import smartEmailingLogo from '@/images/partners/smartemailing.png'
import tomasZahalkaLogo from '@/images/partners/tomas-zahalka.png'
import vasHostingLogo from '@/images/partners/vas-hosting.png'
import webstaLogo from '@/images/partners/websta.png'


const generalPartners = [
    {
        name: 'Inizio',
        logo: inizioLogo,
        url: 'https://www.inizio.cz',
        description: 'Webová laboratoř a online marketingová agentura',
    },
    {
        name: 'SmartEmailing',
        logo: smartEmailingLogo,
        url: 'https://www.smartemailing.cz',
        description: 'Inteligentní e-mailingová platforma s 99,9% doručitelností',
    },
]

const eventPartners = [
    {
        name: 'Váš Hosting',
        logo: vasHostingLogo,
        url: 'https://www.vas-hosting.cz',
        description: 'Připravené, bezpečné servery pro aplikace a domény',
    },
    {
        name: 'Alma Career',
        logo: almaCareerLogo,
        url: 'https://www.almacareer.com/cz',
        description: 'Největší zdroj kandidátů v České republice od roku 1996',
    },
]

const ctvrtkonPartners = [
    {
        name: 'Brilo Team',
        logo: briloLogo,
        url: 'https://www.brilo.team',
        description: 'Největší jihočeská digitální agentura',
    },
    {
        name: 'E.ON',
        logo: eonLogo,
        url: 'https://www.eon.cz',
        description: 'Změňte dodavatele energií s online kalkulací cen',
    },
    {
        name: 'Engel',
        logo: engelLogo,
        url: 'https://www.pracevengelu.cz',
        description: 'Jednička ve výrobě vstřikolisů s přes 1100 zaměstnanci',
    },
    {
        name: 'Eshop-Rychle',
        logo: eshopRychleLogo,
        url: 'https://www.eshop-rychle.cz',
        description: 'Vlastní e-shop snadno a rychle za 5 minut',
    },
    {
        name: 'Headers',
        logo: headersLogo,
        url: 'https://www.headers.cz',
        description: 'Specializace na umělou inteligenci, vývoj od analýzy',
    },
    {
        name: 'Inizio',
        logo: inizioLogo,
        url: 'https://www.inizio.cz',
        description: 'Webová laboratoř a online marketingová agentura',
    },
    {
        name: 'Marian Benčat',
        logo: marianBencatLogo,
        url: 'https://www.linkedin.com/in/marian-ben%C4%8Dat-a832b794',
        description: 'Senior Frontend Developer',
    },
    {
        name: 'naučíme.ai',
        logo: naucimeAiLogo,
        url: 'https://naucime.ai',
        description: 'Praktické kurzy umělé inteligence od profesionálů',
    },
    {
        name: 'Simplia',
        logo: simpliaLogo,
        url: 'https://www.simplia.cz',
        description: 'E-shop, skladový systém, pokladny a další funkce',
    },
    {
        name: 'SmartEmailing',
        logo: smartEmailingLogo,
        url: 'https://www.smartemailing.cz',
        description: 'Inteligentní e-mailingová platforma s 99,9% doručitelností',
    },
    {
        name: 'Tomáš Zahálka',
        logo: tomasZahalkaLogo,
        url: 'https://tomaszahalka.cz',
        description: 'SEO konzultant a PPC specialista na e-shopy',
    },
    {
        name: 'Váš Hosting',
        logo: vasHostingLogo,
        url: 'https://www.vas-hosting.cz',
        description: 'Připravené, bezpečné servery pro aplikace a domény',
    },
    {
        name: 'Websta',
        logo: webstaLogo,
        url: 'https://www.websta.cz',
        description: 'Externí týmy programátorů bez náboru a personální agendy',
    },
]

export function Sponsors() {
    return (
        <Section className="relative">
            <Container className="px-8">
                <header className="text-center">
                    <h2 className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
                        Partneři
                    </h2>
                </header>
                <div className="mt-14 flex flex-col gap-16">
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="font-mono text-sm uppercase tracking-widest text-primary-700">
                            Generální partneři
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 lg:gap-x-32">
                            {generalPartners.map((partner) => (
                                <a
                                    href={partner.url}
                                    key={partner.name}
                                    title={partner.description}
                                    className="flex max-w-72 items-center justify-center"
                                    target="_blank"
                                >
                                    <Image src={partner.logo} alt={partner.name} unoptimized/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="font-mono text-sm uppercase tracking-widest text-primary-700">
                            Partneři akce
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 lg:gap-x-24">
                            {eventPartners.map((partner) => (
                                <a
                                    href={partner.url}
                                    key={partner.name}
                                    title={partner.description}
                                    className="flex max-w-56 items-center justify-center"
                                    target="_blank"
                                >
                                    <Image src={partner.logo} alt={partner.name} unoptimized/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="font-mono text-sm uppercase tracking-widest text-primary-700">
                            Čtvrtkon partneři
                        </h3>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-12 md:grid-cols-4 md:gap-x-24 md:gap-y-12">
                            {ctvrtkonPartners.map((partner) => (
                                <a
                                    href={partner.url}
                                    key={partner.name}
                                    title={partner.description}
                                    className="m-auto block max-w-40 self-center justify-center"
                                    target="_blank"
                                >
                                    <Image src={partner.logo} alt={partner.name} unoptimized/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

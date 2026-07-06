import Image from 'next/image'

import {Container} from '@/components/Container'
import {Reveal} from '@/components/Reveal'
import {Section} from '@/components/Section'
import {SectionHeading} from '@/components/SectionHeading'

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
        <Section id="partneri" className="relative scroll-mt-24">
            <Container className="px-8">
                <Reveal>
                    <SectionHeading eyebrow="Děkujeme">Partneři</SectionHeading>
                </Reveal>
                <div className="mt-16 flex flex-col gap-16 sm:gap-20">
                    <Reveal className="flex flex-col items-center gap-8">
                        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary-500">
                            Generální partneři
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 lg:gap-x-28">
                            {generalPartners.map((partner) => (
                                <a
                                    href={partner.url}
                                    key={partner.name}
                                    title={partner.description}
                                    className="flex items-center justify-center transition duration-300 hover:opacity-80"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-48 w-auto max-w-full object-contain sm:max-h-72"
                                        unoptimized
                                    />
                                </a>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal className="flex flex-col items-center gap-7">
                        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary-500">
                            Partneři akce
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 lg:gap-x-20">
                            {eventPartners.map((partner) => (
                                <a
                                    href={partner.url}
                                    key={partner.name}
                                    title={partner.description}
                                    className="flex items-center justify-center transition duration-300 hover:opacity-80"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-32 w-auto max-w-full object-contain sm:max-h-48"
                                        unoptimized
                                    />
                                </a>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal className="flex flex-col items-center gap-6">
                        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary-500">
                            Čtvrtkon partneři
                        </h3>
                        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                            {ctvrtkonPartners.map((partner) => (
                                <a
                                    href={partner.url}
                                    key={partner.name}
                                    title={partner.description}
                                    className="group glass flex items-center justify-center rounded-2xl px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-16 w-auto max-w-full object-contain sm:max-h-24"
                                        unoptimized
                                    />
                                </a>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    )
}

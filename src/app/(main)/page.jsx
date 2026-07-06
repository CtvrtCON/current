import { Hero } from '@/components/Hero'
import { Speakers } from '@/components/Speakers'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
// Coming-soon mode: render <ComingSoon/> instead of Speakers + Schedule.
// import {ComingSoon} from '@/components/ComingSoon'

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Schedule />
      <Sponsors />
    </>
  )
}

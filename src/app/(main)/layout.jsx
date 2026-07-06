import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Layout>{children}</Layout>
    </>
  )
}

import { SocialMedia } from '@/components/common/social-media'
import { Footer } from '@/components/home/footer'
import { Header } from '@/components/home/header'
import { Hero } from '@/components/home/hero'

export default async function HomePage() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <Header />
      <div className='flex flex-1 flex-col items-center justify-center gap-50'>
        <Hero />
        <SocialMedia className='md:scale-200' />
      </div>
      <Footer />
    </div>
  )
}

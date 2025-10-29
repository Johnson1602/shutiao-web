import { ModeToggle } from '@/components/button'
import { CalendarComponent } from '@/components/calendar'

export default async function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <ModeToggle />
      <CalendarComponent />
    </div>
  )
}

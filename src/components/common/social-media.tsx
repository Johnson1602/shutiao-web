import { Github, Mail, MessageCircleMore, Podcast, Youtube } from 'lucide-react'
import Link from 'next/link'
import TelegramIcon from '@/assets/images/svg/tg.svg'
import XIcon from '@/assets/images/svg/x.svg'
import { socialLinks } from '@/config'
import { cn } from '@/lib/utils'

interface SocialMediaProps {
  className?: string
}

export function SocialMedia({ className }: SocialMediaProps) {
  return (
    <div className={cn('flex items-center gap-5', className)}>
      <Link
        href={socialLinks.podcast}
        data-umami-event='social-media:podcast'
      >
        <Podcast className='size-6 cursor-pointer' />
      </Link>

      <Link
        href={socialLinks.x}
        data-umami-event='social-media:x'
      >
        <XIcon className='size-6 cursor-pointer' />
      </Link>

      <Link
        href={socialLinks.github}
        data-umami-event='social-media:github'
      >
        <Github className='size-6 cursor-pointer' />
      </Link>

      <Link
        href={socialLinks.telegram}
        data-umami-event='social-media:telegram'
      >
        <TelegramIcon className='size-6 cursor-pointer' />
      </Link>

      <Link
        href={socialLinks.youtube}
        data-umami-event='social-media:youtube'
      >
        <Youtube className='size-6 cursor-pointer' />
      </Link>

      <Link
        href={socialLinks.wechat}
        data-umami-event='social-media:wechat'
      >
        <MessageCircleMore className='size-6 cursor-pointer' />
      </Link>

      <Link
        href={socialLinks.email}
        data-umami-event='social-media:email'
      >
        <Mail className='size-6 cursor-pointer' />
      </Link>
    </div>
  )
}

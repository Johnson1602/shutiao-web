import { useTranslations } from 'next-intl'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

export function Hero() {
  const t = useTranslations('hero')

  const titleWords = t('title')
    .split(' ')
    .map((word) => ({ text: word }))
  const subtitleWords = t('subtitle')
    .split(' ')
    .map((word) => ({ text: word }))

  const words = [
    ...titleWords,
    {
      text: '-',
    },
    ...subtitleWords,
  ]

  return <TypewriterEffect words={words} />
}

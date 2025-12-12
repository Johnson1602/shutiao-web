'use client'

import { Check, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguageToggle } from '@/hooks/use-language-toggle'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

interface LanguageToggleProps {
  className?: string
  variant?: 'popover' | 'select'
}

export function LanguageToggle({
  className,
  variant = 'popover',
}: LanguageToggleProps) {
  const t = useTranslations('language')
  const { locale: currentLocale, onSelectChange } = useLanguageToggle()
  const [isOpen, setIsOpen] = useState(false)

  if (variant === 'select') {
    return (
      <Select
        value={currentLocale}
        onValueChange={onSelectChange}
      >
        <SelectTrigger className={cn('w-36', className)}>
          <SelectValue placeholder={t(currentLocale)} />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((locale) => (
            <SelectItem
              key={locale}
              value={locale}
            >
              <p className='flex items-center gap-2'>
                <span className='text-sm'>
                  {locale === 'en' ? '🇺🇸 ' : '🇨🇳 '}
                </span>
                <span className='text-sm'>{t(locale)}</span>
              </p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger asChild>
        <Globe
          className={cn('size-6 cursor-pointer', !isOpen && className)}
          strokeWidth={2}
          absoluteStrokeWidth
        />
      </PopoverTrigger>
      <PopoverContent
        className='w-36 border-none bg-white/80 p-1 shadow-lg backdrop-blur-md dark:bg-black/80'
        align='end'
        sideOffset={8}
      >
        <div className='space-y-1'>
          {routing.locales.map((locale) => (
            <Button
              key={locale}
              variant='ghost'
              size='sm'
              onClick={() => onSelectChange(locale)}
              className={cn(
                'w-full cursor-pointer justify-between font-normal text-sm focus-visible:border-none focus-visible:ring-0',
                locale === currentLocale && 'bg-accent dark:bg-accent/50',
              )}
            >
              {t(locale)}
              {locale === currentLocale && <Check className='size-4' />}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

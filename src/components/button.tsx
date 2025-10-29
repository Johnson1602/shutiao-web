'use client'

import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className='flex gap-8'>
      <button
        type='button'
        onClick={() => setTheme('system')}
      >
        System
      </button>
      <button
        type='button'
        onClick={() => setTheme('dark')}
      >
        Dark
      </button>
      <button
        type='button'
        onClick={() => setTheme('light')}
      >
        Light
      </button>
    </div>
  )
}

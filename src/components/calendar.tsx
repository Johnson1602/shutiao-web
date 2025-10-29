'use client'

import type { CalendarProps } from 'antd'
import { Calendar } from 'antd'
import type { Dayjs } from 'dayjs'

export function CalendarComponent() {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return <Calendar onPanelChange={onPanelChange} />
}

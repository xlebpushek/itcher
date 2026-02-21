import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { AvailabilityEvent } from '../types'

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

const getCalendarEventMarkColor = (events: AvailabilityEvent[]) => {
    const hasBusy = events.some((e) => e.type === 'busy')
    const hasFree = events.some((e) => e.type === 'free')

    if (hasBusy && hasFree) return 'bg-yellow-500'
    if (hasBusy) return 'bg-red-500'
    if (hasFree) return 'bg-emerald-500'
    return ''
}

const formatCalendarEventTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    return `${hours}:${minutes}`
}

export { cn, formatCalendarEventTime, getCalendarEventMarkColor }

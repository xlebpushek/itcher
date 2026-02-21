import { getDay, getDaysInMonth, isSameDay, startOfMonth } from 'date-fns'
import { useUnit } from 'effector-react'
import type { FC } from 'react'
import { useMemo } from 'react'
import { $availabilityEvents, setSelectedDay } from '@/entities/availability'
import { cn, getCalendarEventMarkColor } from '@/shared/lib/utils'
import { Button, Card, CardContent } from '@/shared/ui'

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const

const Calendar: FC = () => {
    const availabilityEvents = useUnit($availabilityEvents)

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()

    const daysInMonth = getDaysInMonth(date)
    const firstDayOfMonth = startOfMonth(date)
    const startDayOfWeek = getDay(firstDayOfMonth) === 0 ? 6 : getDay(firstDayOfMonth) - 1

    const handleDayClick = (day: number) => {
        setSelectedDay(new Date(year, month, day))
    }

    const weekDays = WEEK_DAYS.map((day) => (
        <div key={day} className='w-full text-center'>
            {day}
        </div>
    ))

    const emptyDays = useMemo(
        () =>
            Array.from({ length: startDayOfWeek }, (_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: placeholder cells, no stable id
                <div key={i} className='h-10 w-10' />
            )),
        [startDayOfWeek],
    )
    const monthDays = useMemo(() => Array.from({ length: daysInMonth }, (_, i) => i + 1), [daysInMonth])

    return (
        <Card className='w-fit'>
            <CardContent>
                <div className='text-muted-foreground mb-2 grid grid-cols-7 gap-2 text-sm'>{weekDays}</div>
                <div className='grid grid-cols-7 gap-1'>
                    {emptyDays}
                    {monthDays.map((day) => {
                        const date = new Date(year, month, day)
                        const events = availabilityEvents.filter((event) => isSameDay(new Date(event.date), date))
                        const markColor = getCalendarEventMarkColor(events)

                        return (
                            <Button
                                variant='outline'
                                key={day}
                                onClick={() => handleDayClick(day)}
                                className='relative h-10 w-10 bg-transparent p-0 dark:bg-transparent'
                                aria-label={`Выбрать ${day} число`}
                            >
                                <span className='text-sm'>{day}</span>
                                <div
                                    className={cn('absolute bottom-1 h-0.5 w-2.5 rounded-full', markColor)}
                                    aria-hidden
                                />
                            </Button>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}

Calendar.displayName = 'Calendar'

export { Calendar }

import type { FC } from 'react'
import { formatCalendarEventTime } from '@/shared/lib/utils'
import type { AvailabilityEvent } from '@/shared/types'
import { P } from '@/shared/ui'

interface BusyProps {
    events: AvailabilityEvent[]
}

const Busy: FC<BusyProps> = ({ events }) => {
    if (events.length > 0) {
        return (
            <div>
                <div className='mb-2 flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-red-500' aria-hidden />
                    <P className='font-medium'>Занятые периоды</P>
                    <span className='text-muted-foreground text-sm'>({events.length})</span>
                </div>
                <div className='space-y-2'>
                    {events.map((event) => (
                        <div
                            key={`${event.from}-${event.to}`}
                            className='flex items-center justify-between rounded-lg border p-3'
                        >
                            <P className='text-sm font-bold'>
                                {formatCalendarEventTime(event.from)} - {formatCalendarEventTime(event.to)}
                            </P>
                            <P className='text-muted-foreground text-sm'>
                                Длительность: {parseInt(event.to, 10) - parseInt(event.from, 10)}ч
                            </P>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

Busy.displayName = 'Busy'

export { Busy }

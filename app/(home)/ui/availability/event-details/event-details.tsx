import { format, isSameDay } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useUnit } from 'effector-react'
import { Settings } from 'lucide-react'
import type { FC } from 'react'
import { useMemo } from 'react'
import { $availabilityEvents, $selectedDay, setModalVisible } from '@/entities/availability'
import { $user } from '@/entities/user'
import { Button, Card, CardContent, P } from '@/shared/ui'
import { Busy } from './busy'
import { Empty } from './empty'
import { Free } from './free'

const EventDetails: FC = () => {
    const user = useUnit($user)
    const availabilityEvents = useUnit($availabilityEvents)

    const selectedDay = useUnit($selectedDay)
    const firstDayWithEvents = useMemo(
        () => (availabilityEvents.length > 0 ? new Date(availabilityEvents[0].date) : null),
        [availabilityEvents],
    )
    const today = new Date()

    const date = selectedDay || firstDayWithEvents || today

    const dayEvents = useMemo(
        () => availabilityEvents.filter((event) => isSameDay(new Date(event.date), date)),
        [availabilityEvents, date],
    )
    const dayBusyEvents = useMemo(() => dayEvents.filter((e) => e.type === 'busy'), [dayEvents])
    const dayFreeEvents = useMemo(() => dayEvents.filter((e) => e.type === 'free'), [dayEvents])

    const activeModalVisibleHandler = () => {
        setModalVisible(true)
    }

    return (
        <Card className='relative flex-1'>
            {user && user.role === 'Admin' && (
                <Button
                    className='absolute right-5'
                    variant='ghost'
                    onClick={activeModalVisibleHandler}
                    aria-label='Открыть настройки календаря'
                >
                    <Settings className='size-5' aria-hidden />
                </Button>
            )}
            <CardContent>
                <div className='space-y-4'>
                    <P className='text-lg font-semibold'>
                        {format(date, 'd MMMM yyyy', { locale: ru })}{' '}
                        <span className='text-muted-foreground'>({format(date, 'EEEE', { locale: ru })})</span>
                    </P>

                    {dayEvents.length === 0 ? (
                        <Empty date={date} />
                    ) : (
                        <div className='space-y-4'>
                            <Busy events={dayBusyEvents} />
                            <Free events={dayFreeEvents} />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

EventDetails.displayName = 'EventDetails'

export { EventDetails }

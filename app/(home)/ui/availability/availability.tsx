'use client'

import type { FC } from 'react'
import { H3 } from '@/shared/ui'
import { Calendar } from './calendar'
import { EventDetails } from './event-details/event-details'

const AvailabilityWidget: FC = () => {
    return (
        <section id='availability-section' className='mx-auto flex w-full max-w-6xl flex-col gap-y-5 p-7'>
            <H3>Доступность</H3>
            <div className='flex gap-5 max-md:flex-col'>
                <Calendar />
                <EventDetails />
            </div>
        </section>
    )
}

AvailabilityWidget.displayName = 'AvailabilityWidget'

export { AvailabilityWidget }

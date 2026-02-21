import { createEvent, createStore } from 'effector'
import type { AvailabilityEvent } from '@/shared/types'

const januaryEventsControlled: AvailabilityEvent[] = [
    // Несколько событий 1 января
    { type: 'busy', date: '2026-01-01', from: '09:00', to: '12:00' },
    { type: 'free', date: '2026-01-01', from: '14:00', to: '16:00' },

    // Пропускаем 2 января - нет событий

    // 3 января - одно событие
    { type: 'busy', date: '2026-01-03', from: '08:30', to: '10:00' },

    // Пропускаем 4 января - нет событий

    // 5 января - два события
    { type: 'free', date: '2026-01-05', from: '10:00', to: '12:00' },
    { type: 'busy', date: '2026-01-05', from: '13:00', to: '17:00' },

    // 6-7 января (выходные) - события есть
    { type: 'free', date: '2026-01-06', from: '08:00', to: '10:00' },
    { type: 'busy', date: '2026-01-06', from: '11:00', to: '13:00' },

    // Пропускаем 8 января - нет событий

    // 9 января - одно событие
    { type: 'busy', date: '2026-01-09', from: '09:00', to: '12:00' },

    // Пропускаем 10 января - нет событий

    // 11 января - два события
    { type: 'free', date: '2026-01-11', from: '07:00', to: '09:00' },
    { type: 'busy', date: '2026-01-11', from: '10:00', to: '12:00' },

    // Пропускаем 12 января - нет событий

    // 13 января - одно событие
    { type: 'free', date: '2026-01-13', from: '14:00', to: '18:00' },

    // 14 января - три события
    { type: 'free', date: '2026-01-14', from: '08:00', to: '10:00' },
    { type: 'busy', date: '2026-01-14', from: '10:30', to: '12:30' },
    { type: 'free', date: '2026-01-14', from: '13:00', to: '15:00' },

    // Пропускаем 15-16 января - нет событий

    // 17 января - два события
    { type: 'busy', date: '2026-01-17', from: '08:00', to: '10:00' },
    { type: 'free', date: '2026-01-17', from: '10:30', to: '12:30' },

    // Пропускаем 18 января - нет событий

    // 19 января - одно событие
    { type: 'busy', date: '2026-01-19', from: '13:00', to: '15:00' },

    // Пропускаем 20-21 января - нет событий

    // 22 января - три события
    { type: 'free', date: '2026-01-22', from: '09:00', to: '11:00' },
    { type: 'busy', date: '2026-01-22', from: '11:30', to: '13:00' },
    { type: 'free', date: '2026-01-22', from: '14:00', to: '15:30' },

    // Пропускаем 23 января - нет событий

    // 24 января - два события
    { type: 'busy', date: '2026-01-24', from: '10:00', to: '12:00' },
    { type: 'free', date: '2026-01-24', from: '15:00', to: '18:00' },

    // Пропускаем 25 января - нет событий

    // 26 января - одно событие
    { type: 'busy', date: '2026-01-26', from: '09:00', to: '12:00' },

    // 27 января - два события
    { type: 'free', date: '2026-01-27', from: '14:00', to: '16:00' },
    { type: 'busy', date: '2026-01-27', from: '18:00', to: '20:00' },

    // Пропускаем 28 января - нет событий

    // 29 января - одно событие
    { type: 'free', date: '2026-01-29', from: '10:00', to: '13:00' },

    // Пропускаем 30 января - нет событий

    // 31 января - два события
    { type: 'busy', date: '2026-01-31', from: '08:00', to: '10:00' },
    { type: 'free', date: '2026-01-31', from: '11:00', to: '14:00' },
]

const setAvailabilityEvents = createEvent<AvailabilityEvent[]>()
const $availabilityEvents = createStore<AvailabilityEvent[]>(januaryEventsControlled).on(
    setAvailabilityEvents,
    (_, events) => events,
)

const setSelectedDay = createEvent<Date | null>()
const $selectedDay = createStore<Date | null>(null).on(setSelectedDay, (_, day) => day)

export { $availabilityEvents, $selectedDay, setAvailabilityEvents, setSelectedDay }

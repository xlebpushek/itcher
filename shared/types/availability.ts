type EventType = 'busy' | 'free'

interface AvailabilityEvent {
    type: EventType
    date: string // yyyy-MM-dd
    from: string // HH:mm
    to: string // HH:mm
}

export type { AvailabilityEvent, EventType }

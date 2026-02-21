import { createEvent, createStore } from 'effector'
import type { Database } from '@/shared/types/supabase'

const setUser = createEvent<Database['public']['Tables']['users']['Row'] | null>()
const $user = createStore<Database['public']['Tables']['users']['Row'] | null | undefined>(undefined, {
    skipVoid: false,
}).on(setUser, (_, user) => user)

export { $user, setUser }

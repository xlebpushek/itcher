import { createBrowserClient } from '@supabase/ssr'
import { env } from '@/shared/config'
import type { Database } from '@/shared/types/supabase'

const createCSRSupabaseClient = () => {
    return createBrowserClient<Database>(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY)
}

export { createCSRSupabaseClient }

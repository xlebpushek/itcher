'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { env } from '@/shared/config'
import type { Database } from '@/shared/types/supabase'

const createSSRSupabaseClient = async () => {
    const cookieStore = await cookies()

    return createServerClient<Database>(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY, {
        cookies: {
            getAll: () => cookieStore.getAll(),
            setAll: (cookiesToSet) => {
                try {
                    for (const { name, value, options } of cookiesToSet) {
                        cookieStore.set(name, value, options)
                    }
                } catch {}
            },
        },
    })
}

export { createSSRSupabaseClient }

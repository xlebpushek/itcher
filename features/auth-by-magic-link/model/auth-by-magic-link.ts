import { createEffect } from 'effector'
import { createCSRSupabaseClient } from '@/shared/lib/supabase'

const sendMagicLinkFx = createEffect(async (email: string) => {
    const supabase = createCSRSupabaseClient()
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${location.origin}/api/auth/exchange` },
    })

    if (error) throw error
})

export { sendMagicLinkFx }

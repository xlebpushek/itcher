import { NextResponse } from 'next/server'
import { createSSRSupabaseClient } from '@/shared/lib/supabase/server'

const GET = async (request: Request) => {
    const url = new URL(request.url)
    const code = url.searchParams.get('code')

    if (!code) {
        return NextResponse.redirect(new URL('/auth?error=code_required', request.url), { status: 303 })
    }

    const supabase = await createSSRSupabaseClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
        return NextResponse.redirect(
            new URL(`/auth?error=${encodeURIComponent(error.code ?? 'auth_failed')}`, request.url),
            { status: 303 },
        )
    }

    return NextResponse.redirect(new URL('/', request.url), { status: 303 })
}

export { GET }

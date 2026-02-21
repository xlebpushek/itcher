const env = {
    get SUPABASE_URL() {
        const v = process.env.NEXT_PUBLIC_SUPABASE_URL
        if (!v) throw new Error('Missing required env: NEXT_PUBLIC_SUPABASE_URL')
        return v
    },
    get SUPABASE_PUBLISHABLE_KEY() {
        const v = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
        if (!v) throw new Error('Missing required env: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY')
        return v
    },
    get TELEGRAM_ADMIN_URL() {
        const v = process.env.NEXT_PUBLIC_TELEGRAM_ADMIN_URL
        if (!v) throw new Error('Missing required env: NEXT_PUBLIC_TELEGRAM_ADMIN_URL')
        return v
    },
}

export { env }

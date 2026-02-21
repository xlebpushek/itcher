'use client'

import { type FC, type PropsWithChildren, useEffect } from 'react'
import { setUser } from '@/entities/user'
import { createCSRSupabaseClient } from '@/shared/lib/supabase'
import type { Database } from '@/shared/types/supabase'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    useEffect(() => {
        const supabase = createCSRSupabaseClient()
        let channel: ReturnType<typeof supabase.channel> | null = null

        const userFetchAndSubscribe = async () => {
            const {
                data: { user: session },
            } = await supabase.auth.getUser()

            if (!session) {
                setUser(null)
                return
            }

            const { data: user } = await supabase.from('users').select('*').eq('id', session.id).single()

            if (!user) {
                setUser(null)
                return
            }

            setUser(user)

            if (channel) {
                supabase.removeChannel(channel)
                channel = null
            }

            channel = supabase
                .channel(`user:${user.id}`)
                .on(
                    'postgres_changes',
                    {
                        event: '*',
                        schema: 'public',
                        table: 'users',
                        filter: `id=eq.${user.id}`,
                    },
                    (payload) => {
                        if (payload.eventType === 'DELETE') {
                            setUser(null)
                        } else if (payload.eventType === 'UPDATE') {
                            setUser(payload.new as Database['public']['Tables']['users']['Row'])
                        }
                    },
                )
                .subscribe()
        }

        userFetchAndSubscribe()

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session?.user) {
                setUser(null)
                if (channel) {
                    supabase.removeChannel(channel)
                    channel = null
                }
                return
            }
            userFetchAndSubscribe()
        })

        return () => {
            authListener.subscription.unsubscribe()
            if (channel) supabase.removeChannel(channel)
        }
    }, [])

    return <>{children}</>
}

AuthProvider.displayName = 'AuthProvider'

export { AuthProvider }

'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren } from 'react'
import { references } from '@/shared/config'
import { ThemeColorSync } from '@/shared/lib/theme-color-sync'
import { HeaderWidget } from '@/widgets/header'
import { AuthProvider } from './auth'
import { IsNotFoundProvider } from './is-not-found-provider'

const RootProvider: FC<PropsWithChildren<{ isNotFound?: boolean }>> = ({ children, isNotFound = false }) => {
    const pathname = usePathname()

    return (
        <IsNotFoundProvider value={isNotFound}>
            <ThemeProvider attribute='class' enableSystem disableTransitionOnChange defaultTheme='dark'>
                <ThemeColorSync />
                <AuthProvider>
                    <div className='flex min-h-dvh w-full flex-col'>
                        {pathname !== references.auth.href && <HeaderWidget />}
                        <main>{children}</main>
                    </div>
                </AuthProvider>
            </ThemeProvider>
        </IsNotFoundProvider>
    )
}

RootProvider.displayName = 'RootProvider'

export { RootProvider }

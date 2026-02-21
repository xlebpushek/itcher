import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { project } from '@/shared/config'
import { cn } from '@/shared/lib/utils'
import { firaCode, geistMono, geistSans } from './fonts'
import './globals.css'
import { RootProvider } from './providers/provider'

const metadata: Metadata = {
    title: project.pages.home.title,
    description: project.pages.home.description,
}

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
    return (
        <html lang='ru' className='hide-scrollbar' suppressHydrationWarning>
            <head>
                <meta name='theme-color' content='oklch(0.145 0 0)' />
            </head>
            <body className={cn(firaCode.variable, geistMono.variable, geistSans.variable, 'antialiased')}>
                <RootProvider>{children}</RootProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

RootLayout.displayName = 'RootLayout'

export { metadata }
export default RootLayout

import { Construction } from 'lucide-react'
import type { Metadata } from 'next'
import type { FC } from 'react'
import { project } from '@/shared/config'
import { cn } from '@/shared/lib/utils'
import { H1, ReturnToHomePage } from '@/shared/ui'
import { firaCode, geistMono, geistSans } from './fonts'
import './globals.css'
import { RootProvider } from './providers/provider'

const metadata: Metadata = {
    title: project.pages[404].title,
    description: project.pages[404].description,
}

const GlobalNotFoundPage: FC = () => {
    return (
        <html lang='ru' className='hide-scrollbar' suppressHydrationWarning>
            <head>
                <meta name='theme-color' content='oklch(0.145 0 0)' />
            </head>
            <body className={cn(firaCode.variable, geistMono.variable, geistSans.variable, 'antialiased')}>
                <RootProvider isNotFound>
                    <div className='flex flex-1 flex-col items-center justify-center gap-y-5'>
                        <Construction className='size-52' aria-hidden />
                        <H1 className='text-center text-2xl'>
                            Страница, которую вы ищете,
                            <br /> не существует
                        </H1>
                        <ReturnToHomePage />
                    </div>
                </RootProvider>
            </body>
        </html>
    )
}

GlobalNotFoundPage.displayName = 'GlobalNotFoundPage'

export { metadata }
export default GlobalNotFoundPage

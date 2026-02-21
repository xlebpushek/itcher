'use client'

import { Menu, X } from 'lucide-react'
import { type FC, useEffect, useState } from 'react'
import { references } from '@/shared/config'
import { cn } from '@/shared/lib/utils'
import { Button, buttonVariants, H1 } from '@/shared/ui'
import { LinkFeature } from './link'
import { LinksFeature } from './links'
import { ThemeSwitcherFeature } from './theme-switcher'

const HeaderWidget: FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileOpen])

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 h-16 md:h-16 border-b border-border/60 bg-background/80 dark:bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/70 transition-colors duration-200',
                )}
            >
                <nav
                    className='mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'
                    aria-label='Главная навигация'
                >
                    <LinkFeature
                        className={cn(buttonVariants({ variant: 'link' }), 'p-0 h-auto')}
                        onClick={() => setMobileOpen(false)}
                        href={references.home.href}
                        aria-label={references.home.ariaLabel}
                    >
                        <H1 className='font-tech text-base tracking-tight'>ITCHER</H1>
                    </LinkFeature>
                    <div className='hidden md:flex md:items-center md:gap-1 md:gap-x-2'>
                        <LinksFeature />
                        <ThemeSwitcherFeature className='ml-1' />
                    </div>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='md:hidden shrink-0'
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className='size-5' aria-hidden /> : <Menu className='size-5' aria-hidden />}
                    </Button>
                </nav>
            </header>

            <div
                className={cn(
                    'fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] md:hidden bg-background/90 backdrop-blur-md dark:bg-background/92 flex items-center justify-center transition-opacity duration-200 ease-out',
                    mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                )}
                onClick={() => setMobileOpen(false)}
                aria-hidden={!mobileOpen}
            >
                <div
                    className={cn(
                        'flex flex-col items-center justify-center gap-8 transition-transform duration-200 ease-out',
                        mobileOpen ? 'translate-y-0' : '-translate-y-4',
                    )}
                >
                    <LinksFeature linkOnClick={() => setMobileOpen(false)} />
                    <ThemeSwitcherFeature className='mt-2' />
                </div>
            </div>
        </>
    )
}

HeaderWidget.displayName = 'HeaderWidget'

export { HeaderWidget }

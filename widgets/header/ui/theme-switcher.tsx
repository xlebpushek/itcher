'use client'

import { Brush, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { type ComponentProps, type FC, useEffect, useState } from 'react'
import { Button } from '@/shared/ui'

const ThemeSwitcherFeature: FC<ComponentProps<typeof Button>> = (props) => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const Icon = resolvedTheme === 'light' ? Moon : Sun
    const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light'

    return (
        <Button
            variant='ghost'
            onClick={() => setTheme(nextTheme)}
            aria-label={
                !mounted
                    ? 'Переключить тему'
                    : `Переключить на ${resolvedTheme === 'light' ? 'тёмную' : 'светлую'} тему`
            }
            suppressHydrationWarning
            {...props}
        >
            {!mounted ? (
                <Brush className='inline size-5' aria-hidden />
            ) : (
                <Icon className='inline size-5' aria-hidden />
            )}
        </Button>
    )
}

ThemeSwitcherFeature.displayName = 'ThemeSwitcherFeature'

export { ThemeSwitcherFeature }

'use client'

import { type FC, useEffect, useRef } from 'react'

const ThemeColorSync: FC = () => {
    const timeoutRef = useRef<NodeJS.Timeout>(null)

    useEffect(() => {
        let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement
        if (!meta) {
            meta = document.createElement('meta')
            meta.name = 'theme-color'
            document.head.appendChild(meta)
        }

        const update = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)

            timeoutRef.current = setTimeout(() => {
                const html = document.documentElement
                const cssColor = getComputedStyle(html).getPropertyValue('--background').trim()
                const isDark = html.classList.contains('dark')
                const color = cssColor ?? (isDark ? '#0a0a0a' : '#ffffff')

                if (meta.content !== color) {
                    meta.content = color
                }
            }, 10)
        }

        update()

        const observer = new MutationObserver(update)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => {
            observer.disconnect()
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return null
}

ThemeColorSync.displayName = 'ThemeColorSync'

export { ThemeColorSync }

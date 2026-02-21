import { useEffect } from 'react'

const useScrollLock = (lock: boolean) => {
    useEffect(() => {
        const html = document.documentElement
        const body = document.body

        if (lock) {
            body.style.overflow = 'hidden'
            html.style.overflow = 'hidden'

            const scrollbarWidth = window.innerWidth - html.clientWidth
            if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            body.style.overflow = ''
            html.style.overflow = ''
            body.style.paddingRight = ''
        }

        return () => {
            body.style.overflow = ''
            html.style.overflow = ''
            body.style.paddingRight = ''
        }
    }, [lock])
}

export { useScrollLock }

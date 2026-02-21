import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'

const P = forwardRef<HTMLParagraphElement, ComponentProps<'p'>>(({ className, children, ...props }, ref) => {
    return (
        <p className={cn('scroll-m-20 tracking-tight', className)} ref={ref} {...props}>
            {children}
        </p>
    )
})

P.displayName = 'P'

export { P }

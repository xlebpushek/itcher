import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'

type HeadingProps = ComponentProps<'h1'>

const headingConfig = {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight',
    h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
    h6: 'scroll-m-20 text-base font-medium tracking-tight',
} as const

const createHeading = (level: keyof typeof headingConfig) =>
    forwardRef<HTMLHeadingElement, HeadingProps>(({ className, ...props }, ref) => {
        const Component = level
        return <Component className={cn(headingConfig[level], className)} ref={ref} {...props} />
    })

const H1 = createHeading('h1')
const H2 = createHeading('h2')
const H3 = createHeading('h3')
const H4 = createHeading('h4')
const H5 = createHeading('h5')
const H6 = createHeading('h6')

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
H5.displayName = 'H5'
H6.displayName = 'H6'

export { H1, H2, H3, H4, H5, H6 }

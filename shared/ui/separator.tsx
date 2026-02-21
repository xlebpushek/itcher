import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps, FC } from 'react'
import { cn } from '@/shared/lib/utils'

const separatorVariants = cva('bg-muted-foreground/10 min-h-px min-w-px', {
    variants: {
        variant: {
            vertical: 'h-full w-px',
            horizontal: 'h-px w-full',
        },
    },
    defaultVariants: {
        variant: 'vertical',
    },
})

const Separator: FC<ComponentProps<'div'> & VariantProps<typeof separatorVariants>> = ({
    variant,
    className,
    ...props
}) => {
    return <div className={cn(separatorVariants({ variant, className }))} {...props} />
}

Separator.displayName = 'Separator'

export { Separator }

import type { ComponentProps, FC } from 'react'
import { cn } from '@/shared/lib/utils'

const Card: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return (
        <div
            data-slot='card'
            className={cn('text-card-foreground flex flex-col gap-3 rounded-md border p-5 shadow-sm', className)}
            {...props}
        />
    )
}

const CardHeader: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return (
        <div
            data-slot='card-header'
            className={cn('@container/card-header grid auto-rows-min items-start gap-2 [.border-b]:pb-6', className)}
            {...props}
        />
    )
}

const CardTitle: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return <div data-slot='card-title' className={cn('leading-none font-semibold', className)} {...props} />
}

const CardDescription: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return <div data-slot='card-description' className={cn('text-muted-foreground text-sm', className)} {...props} />
}

const CardAction: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return (
        <div
            data-slot='card-action'
            className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
            {...props}
        />
    )
}

const CardContent: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return <div data-slot='card-content' className={className} {...props} />
}

const CardFooter: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return (
        <div data-slot='card-footer' className={cn('flex items-center px-6 [.border-t]:pt-6', className)} {...props} />
    )
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'
CardAction.displayName = 'CardAction'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

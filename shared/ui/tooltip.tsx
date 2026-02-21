'use client'

import { Tooltip as TooltipPrimitive } from 'radix-ui'
import type { ComponentProps, FC } from 'react'
import { cn } from '@/shared/lib/utils'

const TooltipProvider: FC<ComponentProps<typeof TooltipPrimitive.Provider>> = ({ delayDuration = 0, ...props }) => {
    return <TooltipPrimitive.Provider data-slot='tooltip-provider' delayDuration={delayDuration} {...props} />
}

const Tooltip: FC<ComponentProps<typeof TooltipPrimitive.Root>> = ({ ...props }) => {
    return (
        <TooltipProvider>
            <TooltipPrimitive.Root data-slot='tooltip' {...props} />
        </TooltipProvider>
    )
}

const TooltipTrigger: FC<ComponentProps<typeof TooltipPrimitive.Trigger>> = ({ ...props }) => {
    return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />
}

const TooltipContent: FC<ComponentProps<typeof TooltipPrimitive.Content>> = ({
    className,
    sideOffset = 0,
    children,
    ...props
}) => {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                data-slot='tooltip-content'
                sideOffset={sideOffset}
                className={cn(
                    'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance shadow-md',
                    className,
                )}
                {...props}
            >
                {children}
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
    )
}

TooltipProvider.displayName = 'TooltipProvider'
Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }

import Link, { type LinkProps } from 'next/link'
import type { ComponentProps, FC } from 'react'
import { useIsNotFound } from '@/shared/lib/hooks'

const LinkFeature: FC<ComponentProps<'a'> | LinkProps> = (props) => {
    const isNotFound = useIsNotFound()

    if (isNotFound) {
        return <a {...(props as ComponentProps<'a'>)} />
    }

    return <Link {...(props as LinkProps)} />
}

LinkFeature.displayName = 'Link'

export { LinkFeature }

import type { FC, MouseEventHandler } from 'react'
import { references } from '@/shared/config'
import { cn } from '@/shared/lib/utils'
import { buttonVariants } from '@/shared/ui'
import { LinkFeature } from './link'

const headerLinks = [references.faq, references.terms, references.about] as const
const linkClass = cn(buttonVariants({ variant: 'link' }))

const LinksFeature: FC<{ linkOnClick?: MouseEventHandler<HTMLAnchorElement> }> = ({ linkOnClick }) => {
    return headerLinks.map(({ href, label, ariaLabel }) => (
        <LinkFeature key={href} href={href} className={cn(linkClass)} aria-label={ariaLabel} onClick={linkOnClick}>
            {label}
        </LinkFeature>
    ))
}

LinksFeature.displayName = 'LinkFeature'

export { LinksFeature }

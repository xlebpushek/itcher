'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FC, MouseEvent } from 'react'
import { references } from '@/shared/config'
import { useIsNotFound } from '@/shared/lib/hooks'

const ReturnToHomePage: FC = () => {
    const router = useRouter()
    const isNotFound = useIsNotFound()

    const returnHandler = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!isNotFound) {
            event.preventDefault()
            router.push(references.home.href)
            router.refresh()
        }
    }

    const LinkComponent = isNotFound ? 'a' : Link

    return (
        <LinkComponent
            className='font-normal underline'
            href={references.home.href}
            onClick={returnHandler}
            aria-label='Вернуться на главную страницу'
        >
            Вернуться домой
        </LinkComponent>
    )
}

ReturnToHomePage.displayName = 'ReturnToHomePage'

export { ReturnToHomePage }

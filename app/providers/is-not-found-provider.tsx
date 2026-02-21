'use client'

import type { FC, PropsWithChildren } from 'react'
import { IsNotFoundContext } from '@/shared/lib/context'

const IsNotFoundProvider: FC<PropsWithChildren<{ value: boolean }>> = ({ children, value }) => {
    return <IsNotFoundContext.Provider value={value}>{children}</IsNotFoundContext.Provider>
}

IsNotFoundProvider.displayName = 'IsNotFoundProvider'

export { IsNotFoundProvider }

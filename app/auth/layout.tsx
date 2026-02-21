import type { FC, PropsWithChildren } from 'react'
import { project } from '@/shared/config'

export const metadata = {
    title: project.pages.auth.title,
    description: project.pages.auth.description,
}

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return children
}

AuthLayout.displayName = 'AuthLayout'

export default AuthLayout

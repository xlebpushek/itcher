import type { FC } from 'react'
import { project } from '@/shared/config'
import { Separator } from '@/shared/ui'
import { AboutAuthorWidget, ContactsWidget, IntroWidget, LearningWidget } from './ui'
import { AvailabilityWidget } from './ui/availability/availability'

export const metadata = {
    title: project.pages.home.title,
    description: project.pages.home.description,
}

const HomePage: FC = () => {
    return (
        <>
            <IntroWidget />
            <AboutAuthorWidget />
            <Separator variant='horizontal' />
            <LearningWidget />
            <Separator variant='horizontal' />
            <AvailabilityWidget />
            <Separator variant='horizontal' />
            <ContactsWidget />
        </>
    )
}

export default HomePage

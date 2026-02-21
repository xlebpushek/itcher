import type { FC } from 'react'
import { project } from '@/shared/config'
import { Separator } from '@/shared/ui'
import { EducationWidget, IntroWidget, StackWidget, TeachingWidget } from './ui'

export const metadata = {
    title: project.pages.about.title,
    description: project.pages.about.description,
}

const AboutPage: FC = () => {
    return (
        <>
            <IntroWidget />
            <Separator variant='horizontal' />
            <StackWidget />
            <Separator variant='horizontal' />
            <EducationWidget />
            <Separator variant='horizontal' />
            <TeachingWidget />
        </>
    )
}

export default AboutPage

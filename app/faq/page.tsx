import type { FC } from 'react'
import { project } from '@/shared/config'
import { Separator } from '@/shared/ui'
import { GeneralizedQuestionsWidget, TermsQuestionsWidget } from './ui'

export const metadata = {
    title: project.pages.faq.title,
    description: project.pages.faq.description,
}

const FaqPage: FC = () => {
    return (
        <>
            <GeneralizedQuestionsWidget />
            <Separator variant='horizontal' />
            <TermsQuestionsWidget />
        </>
    )
}

FaqPage.displayName = 'FaqPage'

export default FaqPage

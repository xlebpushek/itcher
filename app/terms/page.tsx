import type { FC } from 'react'
import { project, TERMS_INTRO, TERMS_SECTIONS, TERMS_SUBTITLE, TERMS_TITLE } from '@/shared/config'
import { parseTermsText } from '@/shared/lib/terms-text'
import { H3, P, Separator } from '@/shared/ui'

export const metadata = {
    title: project.pages.terms.title,
    description: project.pages.terms.description,
}

const TermsPage: FC = () => {
    return (
        <section className='flex min-h-screen w-full max-w-3xl flex-col items-center p-6 lg:p-7'>
            <div className='space-y-6'>
                <div>
                    <H3 className='mb-3'>{TERMS_TITLE}</H3>
                    <P className='text-muted-foreground'>{TERMS_SUBTITLE}</P>
                </div>
                <Separator variant='horizontal' />
                <div className='text-muted-foreground'>
                    {TERMS_INTRO.map((paragraph, i) => (
                        <P key={paragraph} className={i === 0 ? 'mb-3' : undefined}>
                            {paragraph}
                        </P>
                    ))}
                </div>
                {TERMS_SECTIONS.map((section) => (
                    <div key={section.title}>
                        <Separator variant='horizontal' />
                        <div className='pt-4'>
                            <H3 className='mb-3'>{section.title}</H3>
                            {section.content.map((block) =>
                                block.type === 'paragraph' ? (
                                    <P
                                        key={block.text}
                                        className={block === section.content.at(-1) ? undefined : 'mb-2'}
                                    >
                                        {parseTermsText(block.text)}
                                    </P>
                                ) : (
                                    <ul key={`list-${block.items.join(' ')}`} className='mb-2 ml-6 list-disc space-y-1'>
                                        {block.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                ),
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TermsPage

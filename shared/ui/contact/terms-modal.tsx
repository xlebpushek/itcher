'use client'

import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { TERMS_INTRO, TERMS_SECTIONS, TERMS_SUBTITLE, TERMS_TITLE } from '@/shared/config'
import { useScrollLock } from '@/shared/lib/hooks'
import { parseTermsText } from '@/shared/lib/terms-text'
import { Button, H3, P, Separator } from '@/shared/ui'

interface TermsModalProps {
    onClose: () => void
    onAccept: () => void
}

const TermsModal: FC<TermsModalProps> = ({ onClose, onAccept }) => {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    useScrollLock(true)

    const handleScroll = useCallback(() => {
        const el = contentRef.current
        if (!el) return
        const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50
        setIsScrolledToBottom(isBottom)
    }, [])

    useEffect(() => {
        contentRef.current?.scrollTo({ top: 0 })
        setIsScrolledToBottom(false)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    return (
        <div
            role='dialog'
            aria-modal='true'
            aria-labelledby='terms-modal-title'
            aria-describedby='terms-modal-description'
            className='fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-7'
        >
            <button
                type='button'
                className='absolute inset-0 cursor-default border-0 bg-background/80 p-0 backdrop-blur-sm'
                onClick={onClose}
                aria-label='Закрыть окно'
            />
            <div className='relative z-10 flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg border bg-background shadow-xl'>
                <div className='border-b p-6'>
                    <H3 id='terms-modal-title' className='mb-3'>
                        {TERMS_TITLE}
                    </H3>
                    <P id='terms-modal-description' className='text-muted-foreground'>
                        {TERMS_SUBTITLE}
                    </P>
                </div>
                <div ref={contentRef} onScroll={handleScroll} className='flex-1 overflow-y-auto p-6'>
                    <div className='space-y-6'>
                        <div className='text-muted-foreground rounded-lg'>
                            {TERMS_INTRO.map((para, i) => (
                                <P key={para} className={i === 0 ? 'mb-3' : undefined}>
                                    {para}
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
                                            <ul
                                                key={`list-${block.items.join(' ')}`}
                                                className='mb-2 ml-6 list-disc space-y-1'
                                            >
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
                </div>
                <div className='bg-background/95 sticky bottom-0 border-t p-6 backdrop-blur-sm'>
                    <div className='flex items-center justify-center gap-3 pb-5'>
                        <Button
                            variant='outline'
                            onClick={onClose}
                            className='min-w-30'
                            aria-label='Отклонить условия и закрыть'
                        >
                            Отклонить
                        </Button>
                        <Button
                            onClick={onAccept}
                            disabled={!isScrolledToBottom}
                            className='bg-primary hover:bg-primary/90 min-w-30'
                            aria-label={
                                isScrolledToBottom ? 'Принять условия' : 'Прокрутите вниз, чтобы принять условия'
                            }
                        >
                            Принимаю условия
                        </Button>
                    </div>
                    <P className='text-muted-foreground text-center text-xs'>
                        Нажимая «Принимаю условия», вы подтверждаете, что ознакомились со всеми пунктами и соглашаетесь
                        с ними.
                    </P>
                </div>
            </div>
        </div>
    )
}

TermsModal.displayName = 'TermsModal'

export { TermsModal }

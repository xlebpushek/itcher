import Image from 'next/image'
import type { FC } from 'react'
import ProgrammerImage from '@/public/images/programmer.png'
import { Contact, H2, P } from '@/shared/ui'

const IntroWidget: FC = () => {
    return (
        <section className='flex w-full max-w-6xl gap-8 p-6 max-md:flex-col-reverse lg:gap-12 lg:p-7'>
            <div className='flex flex-col gap-4 md:flex-1 lg:gap-5'>
                <H2>Частное обучение программированию основано на фундаментальных принципах, а не на тенденциях.</H2>
                <P className='text-lg'>
                    Индивидуальные уроки программирования были посвящены логике, архитектуре и решению реальных задач.
                </P>
                <Contact variant='outline' className='mx-auto' size='lg'>
                    Записаться на консультацию
                </Contact>
            </div>
            <div className='relative min-w-0 overflow-hidden md:flex-1'>
                <Image
                    src={ProgrammerImage}
                    alt='Программист за работой'
                    width={626}
                    height={417}
                    className='h-auto w-full max-w-full object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    placeholder='blur'
                    priority
                />
            </div>
        </section>
    )
}

IntroWidget.displayName = 'IntroWidget'

export { IntroWidget }

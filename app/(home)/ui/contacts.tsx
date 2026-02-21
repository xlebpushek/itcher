'use client'

import Image from 'next/image'
import type { FC } from 'react'
import CallCenterCat from '@/public/images/call-center-cat.png'
import { Contact, H3, P } from '@/shared/ui'

const ContactsWidget: FC = () => {
    return (
        <section className='flex w-full max-w-6xl gap-8 p-6 max-md:flex-col lg:gap-12 lg:p-7'>
            <div className='flex flex-col gap-4 md:flex-1 lg:gap-5'>
                <H3>Связь</H3>
                <P>
                    Вы можете связаться со мной по любому вопросу, связанному с предоставляемыми мной услугами.
                    Записаться на консультацию, узнать стоимость услуг, скорректировать уже существующий график работы.
                    Для этого вы можете написать мне в Telegram.
                </P>
                <P>
                    При составлении обращения для записи на консультацию уточняйте такие детали, как: область обучения,
                    текущий уровень обучающегося, желаемый к достижению уровень (конкретные темы при наличии), часы,
                    которые вы готовы уделять за определённый промежуток времени.
                </P>
                <P className='text-muted-foreground'>
                    P.s. Из-за большой нагрузки и наплыва желающих - ответ может немного затянуться, тем не менее я
                    постараюсь ответить всем в течение 30 часов.
                </P>
                <Contact variant='outline' size='lg' className='mx-auto'>
                    Связаться в tg
                </Contact>
            </div>
            <div className='relative min-w-0 overflow-hidden md:flex-1'>
                <Image
                    src={CallCenterCat}
                    alt='Кот связист'
                    width={800}
                    height={800}
                    className='h-auto w-full max-w-full object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    placeholder='blur'
                    priority
                />
            </div>
        </section>
    )
}

ContactsWidget.displayName = 'ContactsWidget'

export { ContactsWidget }

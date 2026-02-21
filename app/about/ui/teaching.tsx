'use client'

import Image from 'next/image'
import { type FC, useMemo } from 'react'
import AnimeGirlCppBookImage from '@/public/images/anime-girl-and-cpp-book.png'
import { techTextToNodes } from '@/shared/lib/tech-text'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, H3, P } from '@/shared/ui'

const teachingData = [
    {
        topic: 'Основы программирования',
        description:
            'Переменные, типы, условия, циклы, функции — как читать чужой код и писать свой. Без воды: разбираем на примерах, закрепляем практикой. Парадигмы и стиль кода, чтобы код был понятным и предсказуемым.',
    },
    {
        topic: 'JavaScript, TypeScript и веб',
        description:
            'Мой основной стек: от чистого JavaScript до React и Next.js на фронте, Node.js и Express на бэкенде. Как устроены компоненты, роутинг, API, как связать фронт и бэк. TypeScript — зачем нужны типы и как с ними жить в реальных проектах.',
    },
    {
        topic: 'Python и автоматизация',
        description:
            'Синтаксис, структуры данных, работа с файлами и API. Декораторы, генераторы, при необходимости — асинхронность. Отдельно могу помочь с Telegram-ботами на aiogram или telegraf: от простого эхо-бота до диалогов и интеграций.',
    },
    {
        topic: 'Бэкенд и базы данных',
        description:
            'REST API, работа с PostgreSQL, MongoDB, Redis — когда что уместно. ORM вроде Prisma, запросы, схемы. Как устроен серверный код, аутентификация, хранение и выборка данных без магии, чтобы ты мог и написать, и отладить.',
    },
    {
        topic: 'Git, терминал и инструменты',
        description:
            'Git: ветки, слияние, конфликты, как не потерять изменения и спокойно экспериментировать. Командная строка и базовый Linux — навигация, процессы, скрипты. Как организовать работу с кодом и окружением, чтобы всё было предсказуемо.',
    },
] as const

const TeachingWidget: FC = () => {
    const accordions = useMemo(
        () =>
            teachingData.map((item) => (
                <AccordionItem key={item.topic} value={item.topic}>
                    <AccordionTrigger className='font-tech hover:underline'>{item.topic}</AccordionTrigger>
                    <AccordionContent>
                        <P>{techTextToNodes(item.description)}</P>
                    </AccordionContent>
                </AccordionItem>
            )),
        [],
    )

    return (
        <section className='flex w-full max-w-6xl gap-8 p-6 max-md:flex-col lg:gap-12 lg:p-7'>
            <div className='relative hidden min-w-0 overflow-hidden lg:flex lg:flex-1 lg:items-start'>
                <Image
                    src={AnimeGirlCppBookImage}
                    alt='Чему могу научить'
                    width={736}
                    height={736}
                    className='h-auto w-full max-w-full object-cover'
                    sizes='50vw'
                />
            </div>
            <div className='flex flex-col gap-4 lg:flex-1 lg:gap-5'>
                <H3>Чему могу научить</H3>
                <P>
                    Готов помогать с тем, чем сам занимаюсь: научиться писать и понимать код, разбирать чужой код,
                    доводить идеи до работающих программ. Никаких гарантий трудоустройства или подготовки к
                    собеседованиям — только практика и объяснения по делу.
                </P>
                <Accordion className='w-full' type='single' defaultValue={teachingData[0].topic}>
                    {accordions}
                </Accordion>
            </div>
        </section>
    )
}

TeachingWidget.displayName = 'TeachingWidget'

export { TeachingWidget }

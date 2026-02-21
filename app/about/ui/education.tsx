'use client'

import type { FC } from 'react'
import { techTextToNodes } from '@/shared/lib/tech-text'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Card,
    CardContent,
    CardHeader,
    H3,
    P,
} from '@/shared/ui'

const educationData = [
    {
        title: 'Саратовский колледж радиоэлектроники имени Яблочкова',
        degree: 'Специальность «Компьютерные системы и комплексы»',
        description:
            'Здесь начался мой путь в программировании: архитектура компьютера, устройство операционных систем, основы схемотехники и сетей. Параллельно я писал первые учебные проекты, разбирался с железом и постепенно переходил от абстрактных дисциплин к реальным задачам.',
        diplomaProject:
            'В качестве демо-версии дипломного проекта полностью переписал веб‑сайт университета, к которому относился колледж: миграция с Ruby на JavaScript/TypeScript и современные фреймворки, что кардинально повысило производительность и устранило множество багов. Дизайн был значительно обновлён в пользу более современного и понятного. Проект получил огласку, однако добиться фидбека от руководства университета и вывода в продакшен не удалось.',
    },
    {
        title: 'Самообразование и практика',
        degree: 'Работа с продакшн‑кодом и реальными проектами',
        description:
            'Дальше шёл уже не по учебникам, а через рабочие задачи: коммерческие проекты, фриланс, пет‑проекты, эксперименты с технологиями. Вместо того чтобы собирать сертификаты, я делал ставку на практику: читать чужой код, разбираться в стек‑трейсах, улучшать существующие решения и доводить проекты до релиза.',
    },
] as const

const EducationWidget: FC = () => {
    return (
        <section className='w-full max-w-6xl p-6 lg:p-7'>
            <div className='flex flex-col gap-4 lg:gap-5'>
                <H3>Образование</H3>
                <P>
                    Мой путь в программировании начался не с онлайн‑курсов, а с очного техникума в Саратове. Формальное
                    образование дало понимание железа и базовых принципов работы компьютеров, а дальше всё упёрлось в
                    практику: реальные проекты, рабочие задачи и постоянное самообучение.
                </P>
                <div className='grid gap-4 md:grid-cols-2'>
                    {educationData.map((item) => (
                        <Card key={item.title}>
                            <CardHeader>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-medium'>{item.title}</span>
                                    <span className='text-muted-foreground text-sm'>{item.degree}</span>
                                </div>
                            </CardHeader>
                            <CardContent className='space-y-3'>
                                <P className='text-sm'>{techTextToNodes(item.description)}</P>
                                {'diplomaProject' in item && item.diplomaProject && (
                                    <Accordion type='single' collapsible className='w-full'>
                                        <AccordionItem value='diploma' className='border-0'>
                                            <AccordionTrigger className='hover:text-foreground py-2 hover:no-underline'>
                                                Про дипломный проект
                                            </AccordionTrigger>
                                            <AccordionContent className='pt-0'>
                                                <P className='text-sm'>{techTextToNodes(item.diplomaProject)}</P>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

EducationWidget.displayName = 'EducationWidget'

export { EducationWidget }

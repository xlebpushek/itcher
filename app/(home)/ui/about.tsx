import Image from 'next/image'
import type { FC } from 'react'
import { useMemo } from 'react'
import CatProgrammerImage from '@/public/images/cat-programmer.png'
import { techTextToNodes } from '@/shared/lib/tech-text'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, H3, P } from '@/shared/ui'

const benefits = [
    {
        title: 'Опыт и экспертиза',
        details:
            'Более 5 лет коммерческой разработки. Мои основные области: бэкенд на Python/JavaScript, веб-фреймворки (например, Django/Express), работа с базами данных, создание клиент-серверных приложений и скриптинг для автоматизации рутины',
    },
    {
        title: 'Философия обучения',
        details:
            'Я убежден, что компьютер — это «центр вселенной» программиста. Понимание того, как работают память, процессор и операционная система, меняет подход к написанию кода. Я делаю сложные темы (например, устройство памяти, асинхронность, протоколы) доступными через понятные аналогии и примеры',
    },
    {
        title: 'Индивидуальная программа',
        details:
            'Нет двух одинаковых учеников. Учебный план составляется и постоянно корректируется под ваши цели, текущий уровень и темп усвоения. Будь то смена карьеры, углубление знаний или запуск собственного проекта — мы движемся по вашему маршруту',
    },
    {
        title: 'Что вы получите в результате',
        details:
            'Уверенное владение выбранным стеком технологий, способность самостоятельно учиться и осваивать новые инструменты, портфолио из учебных проектов и главное — понимание, которое позволит решать незнакомые задачи, а не просто повторять пройденное',
    },
] as const

const AboutAuthorWidget: FC = () => {
    const accordions = useMemo(
        () =>
            benefits.map((item) => (
                <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className='hover:underline'>{item.title}</AccordionTrigger>
                    <AccordionContent>{techTextToNodes(item.details)}</AccordionContent>
                </AccordionItem>
            )),
        [],
    )

    return (
        <section className='flex w-full max-w-6xl gap-8 p-6 max-md:flex-col lg:gap-12 lg:p-7'>
            <div className='relative min-w-0 overflow-hidden md:flex-1'>
                <Image
                    src={CatProgrammerImage}
                    alt='Кот-программист'
                    width={736}
                    height={736}
                    className='h-auto w-full max-w-full object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <div className='flex flex-col gap-4 md:flex-1 lg:gap-5'>
                <H3>Об авторе</H3>
                <P>
                    {techTextToNodes(
                        'Я разработчик программного обеспечения с более чем 5-летним опытом в веб-разработке, создании приложений и автоматизации. Моя цель как ментора — показать вам не просто «как», а «почему» работает код, и помочь сформировать глубокое, системное понимание компьютерных наук.',
                    )}
                </P>
                <Accordion type='single' defaultValue={benefits[0].title}>
                    {accordions}
                </Accordion>
            </div>
        </section>
    )
}

AboutAuthorWidget.displayName = 'AboutAuthorWidget'

export { AboutAuthorWidget }

import type { FC } from 'react'
import { useMemo } from 'react'
import { techTextToNodes } from '@/shared/lib/tech-text'
import { Card, CardDescription, CardTitle, H3 } from '@/shared/ui'

const learningTopics = [
    {
        title: 'Основы программирования',
        description: 'Алгоритмы, структуры данных, поток управления, методы решения проблем',
    },
    {
        title: 'Веб-разработка',
        description: 'HTML, CSS, JavaScript, современные методы разработки',
    },
    {
        title: 'Основы работы с базами данных и серверной частью',
        description: 'Основы SQL, работа с реальными данными',
    },
    {
        title: 'Подготовка к экзаменам и академической деятельности',
        description: 'Поддержка школьных экзаменов, структурированные знания',
    },
] as const

const LearningWidget: FC = () => {
    const cards = useMemo(
        () =>
            learningTopics.map((item) => (
                <Card
                    key={item.title}
                    className='min-w-62.5 flex-1 transition-all duration-300 hover:shadow-lg max-lg:w-full lg:min-w-0'
                >
                    <CardTitle className='font-tech mb-2'>{item.title}</CardTitle>
                    <CardDescription className='text-sm'>{techTextToNodes(item.description)}</CardDescription>
                </Card>
            )),
        [],
    )

    return (
        <section id='learning-section' className='w-full max-w-6xl p-6 lg:p-7'>
            <H3 className='mb-6 lg:mb-8'>Что вы узнаете</H3>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>{cards}</div>
        </section>
    )
}

LearningWidget.displayName = 'LearningWidget'

export { LearningWidget }

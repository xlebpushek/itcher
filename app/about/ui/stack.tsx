'use client'

import Image from 'next/image'
import { type FC, useMemo } from 'react'
import ComputerScienceImage from '@/public/images/computer-science.png'
import { techTextToNodes } from '@/shared/lib/tech-text'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, H3, P } from '@/shared/ui'

const stackData = [
    {
        id: 'languages',
        title: 'Языки программирования',
        items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Bash'],
        description: [
            'Node.js (JavaScript/TypeScript) — основной стек для серверной и фронтенд-разработки. Использую для создания REST API, микросервисов, real-time приложений, серверной логики, а также для фронтенд-разработки через React и Next.js. TypeScript добавляет типобезопасность и помогает избежать ошибок на этапе разработки.',
            'Python — для быстрых решений, автоматизации и специализированных задач. Особенно эффективен для Telegram-ботов через aiogram и telegraf, скриптов обработки данных и прототипирования. Отлично подходит когда нужна скорость разработки.',
            'Java, C++, C# — для более сложных системных задач и понимания различных парадигм программирования. Помогают глубже понять работу компьютера на низком уровне.',
            'Bash — для автоматизации задач в Linux, написания скриптов развёртывания и системного администрирования.',
        ],
    },
    {
        id: 'frameworks',
        title: 'Веб-фреймворки и библиотеки',
        items: ['Next.js', 'NestJS', 'Express.js', 'Django', 'FastAPI', 'React', 'aiogram', 'telegraf'],
        description: [
            'Next.js — полнофункциональный React-фреймворк для production-ready приложений. Использую для SSR, SSG, API routes и оптимизации производительности.',
            'NestJS — прогрессивный Node.js фреймворк с архитектурой, вдохновлённой Angular. Идеален для масштабируемых бэкенд-приложений с модульной структурой и dependency injection.',
            'Express.js — минималистичный фреймворк для быстрого создания REST API и веб-серверов. Отличный выбор когда нужна гибкость и контроль.',
            'Django — мощный Python-фреймворк с встроенной админкой, ORM и системой безопасности. Использую для быстрого прототипирования и проектов где Python уместен.',
            'FastAPI — современный асинхронный Python-фреймворк с автоматической документацией API и валидацией через Pydantic. Отлично подходит для высоконагруженных API.',
            'React — библиотека для построения пользовательских интерфейсов с компонентным подходом и виртуальным DOM. Основа современной фронтенд-разработки.',
            'aiogram и telegraf — библиотеки для создания Telegram-ботов на Python. aiogram — современная асинхронная библиотека с удобным API, telegraf — более простая и легковесная альтернатива. Использую обе в зависимости от сложности проекта.',
        ],
    },
    {
        id: 'databases',
        title: 'Базы данных',
        items: ['Supabase', 'Firebase', 'Prisma', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLite', 'MySQL'],
        description: [
            'Supabase — open-source альтернатива Firebase с PostgreSQL под капотом. Предоставляет аутентификацию, real-time подписки, хранилище и автоматическую генерацию API.',
            'Firebase — платформа от Google для быстрой разработки с NoSQL базой данных, аутентификацией и хостингом. Удобна для MVP и быстрого старта.',
            'Prisma — современный ORM для TypeScript и Node.js с type-safe запросами, миграциями и интроспекцией схемы. Значительно упрощает работу с БД.',
            'PostgreSQL — продвинутая реляционная БД с поддержкой JSON, полнотекстового поиска и расширяемостью. Мой основной выбор для production проектов.',
            'Redis — in-memory хранилище для кэширования, сессий, очередей и pub/sub систем. Критически важен для производительности.',
            'MongoDB — документоориентированная NoSQL БД для гибких схем и горизонтального масштабирования. Использую когда нужна гибкость структуры данных.',
            'SQLite — встраиваемая БД для локальных приложений и прототипирования. MySQL — классическая реляционная БД для веб-приложений с проверенной надёжностью.',
        ],
    },
    {
        id: 'tools',
        title: 'Инструменты и технологии',
        items: [
            'Git',
            'GitHub',
            'Linux',
            'AWS',
            'CI/CD',
            'Docker',
            'Kubernetes',
            'Nginx',
            'Webpack',
            'Vite',
            'Jest',
            'Postman',
            'VS Code',
        ],
        description: [
            'Git — распределённая система контроля версий для отслеживания изменений, ветвления и слияния кода. GitHub — платформа для хостинга репозиториев, code review, issue tracking и CI/CD через GitHub Actions.',
            'Linux — операционная система для серверов и разработки, понимание которой критично для деплоя и администрирования. AWS — облачная платформа с сервисами для вычислений, хранения, баз данных и развёртывания приложений.',
            'CI/CD — автоматизация тестирования и развёртывания через GitHub Actions, GitLab CI или Jenkins. Критически важно для качественной разработки.',
            'Docker — контейнеризация приложений для изоляции зависимостей и единообразного развёртывания. Kubernetes — оркестрация контейнеров для масштабирования и управления микросервисами в production.',
            'Nginx — веб-сервер и reverse proxy для балансировки нагрузки и статического контента. Webpack и Vite — сборщики модулей для оптимизации и бандлинга фронтенд-кода.',
            'Jest — фреймворк для unit и integration тестирования JavaScript/TypeScript кода.',
            'Postman — инструмент для тестирования API, создания документации и автоматизации запросов.',
            'VS Code — редактор кода с расширениями, отладкой и интеграцией с Git.',
        ],
    },
] as const

const StackWidget: FC = () => {
    const accordions = useMemo(
        () =>
            stackData.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>
                        <span className='flex flex-col items-start gap-1 text-left'>
                            <span className='font-tech font-medium hover:underline'>{item.title}</span>
                            <span className='font-tech text-muted-foreground text-sm font-normal no-underline'>
                                {item.items.join(', ')}
                            </span>
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-3'>
                            {item.description.map((paragraph) => (
                                <P key={paragraph}>{techTextToNodes(paragraph)}</P>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            )),
        [],
    )

    return (
        <section className='flex w-full max-w-6xl gap-8 p-6 max-md:flex-col lg:gap-12 lg:p-7'>
            <div className='flex flex-col gap-4 lg:flex-1 lg:gap-5'>
                <H3 className='font-tech'>Технологический стек</H3>
                <P>
                    За годы работы я освоил широкий спектр технологий. Мой подход — выбирать инструменты под задачу, а
                    не наоборот. Ниже представлены основные направления, в которых я имею глубокую экспертизу.
                </P>
                <Accordion type='single' defaultValue={stackData[0].id}>
                    {accordions}
                </Accordion>
            </div>
            <div className='relative hidden min-w-0 overflow-hidden lg:flex lg:flex-1 lg:items-start'>
                <Image
                    src={ComputerScienceImage}
                    alt='Технологический стек'
                    width={736}
                    height={736}
                    className='h-auto w-full max-w-full object-cover'
                    sizes='50vw'
                />
            </div>
        </section>
    )
}

StackWidget.displayName = 'StackWidget'

export { StackWidget }

import type { ReferenceKey } from '../types'

interface Reference {
    label: string
    href: string
    ariaLabel: string
    child?: Array<Reference> | Reference
}

const references: Record<ReferenceKey, Reference> = {
    home: { label: 'Главная', href: '/', ariaLabel: 'Главная страница' },
    about: { label: 'Об авторе', href: '/about', ariaLabel: 'Страница об авторе' },
    faq: { label: 'FAQ', href: '/faq', ariaLabel: 'Часто задаваемые вопросы' },
    terms: { label: 'Условия', href: '/terms', ariaLabel: 'Условия оказания услуг' },
    auth: { label: 'Авторизация', href: '/auth', ariaLabel: 'Страница авторизации' },
}

export { references }

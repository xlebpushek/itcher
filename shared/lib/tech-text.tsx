import type { ReactNode } from 'react'

const TECH_TERMS = [
    'Next.js',
    'Express.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'SQLite',
    'FastAPI',
    'NestJS',
    'Firebase',
    'Supabase',
    'GitHub',
    'GitLab',
    'VS Code',
    'aiogram',
    'telegraf',
    'Pydantic',
    'Webpack',
    'Postman',
    'Django',
    'React',
    'Prisma',
    'Redis',
    'MySQL',
    'Nginx',
    'Vite',
    'Jest',
    'Docker',
    'Python',
    'Angular',
    'NoSQL',
    'REST API',
    'API routes',
    'dependency injection',
    'type-safe',
    'Git',
    'AWS',
    'CI/CD',
    'Linux',
    'Java',
    'Bash',
    'ORM',
    'HTML',
    'CSS',
    'SQL',
    'API',
    'SSR',
    'SSG',
    'Ruby',
].sort((a, b) => b.length - a.length)

const TECH_LOWER = new Set(TECH_TERMS.map((t) => t.toLowerCase()))

const escapeRegex = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const TECH_PATTERN = new RegExp(`(${TECH_TERMS.map(escapeRegex).join('|')})`, 'gi')

const techTextToNodes = (text: string): ReactNode[] => {
    const parts = text.split(TECH_PATTERN)
    return parts.map((part, i) => {
        const isTech = TECH_LOWER.has(part.toLowerCase())
        if (isTech) {
            return (
                <span key={`tech-${i}-${part}`} className='font-tech'>
                    {part}
                </span>
            )
        }
        return part
    })
}

export { techTextToNodes }

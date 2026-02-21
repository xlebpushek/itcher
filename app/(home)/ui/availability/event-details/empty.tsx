import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import type { FC } from 'react'
import { P } from '@/shared/ui'

interface EmptyProps {
    date: Date
}

const Empty: FC<EmptyProps> = ({ date }) => {
    return (
        <div className='py-8 text-center'>
            <P className='text-muted-foreground'>События для {format(date, 'd MMMM', { locale: ru })} не найдены</P>
        </div>
    )
}

Empty.displayName = 'Empty'

export { Empty }

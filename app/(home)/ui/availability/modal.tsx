import { useUnit } from 'effector-react'
import type { FC } from 'react'
import { $modalVisible, setModalVisible } from '@/entities/availability'
import { cn } from '@/shared/lib/utils'

const ModalWidget: FC = () => {
    const modalVisible = useUnit($modalVisible)
    const deactivateModalVisibleHandler = () => {
        setModalVisible(false)
    }

    return (
        <button
            type='button'
            className={cn(
                'absolute top-0 left-0 flex h-screen w-screen cursor-default items-center justify-center border-0 bg-transparent p-0',
                modalVisible ? 'flex' : 'hidden',
            )}
            onClick={deactivateModalVisibleHandler}
            aria-label='Закрыть окно'
        >
            <div className='bg-background h-60 w-60' />
        </button>
    )
}

ModalWidget.displayName = 'ModalWidget'

export { ModalWidget }

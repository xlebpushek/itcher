'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, CircleX } from 'lucide-react'
import type { FC } from 'react'
import { cn } from '@/shared/lib/utils'
import { ReturnToHomePage } from '@/shared/ui'

interface StatusProps {
    className?: string
}

interface SuccessStatusProps extends StatusProps {
    status: 'success'
}

interface ErrorStatusProps extends StatusProps {
    status: 'error'
    error: string
}

const Status: FC<SuccessStatusProps | ErrorStatusProps> = ({ className, status, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={cn('flex flex-col items-center gap-y-4 px-6 py-12 text-center', className)}
        >
            <div className='relative flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 0.5, scale: 2.0 }}
                    transition={{ delay: 0.2, duration: 1.5, ease: 'easeOut' }}
                    className='pointer-events-none absolute size-[16.25rem] rounded-full'
                    style={{
                        background:
                            status === 'success'
                                ? 'radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(34,197,94,0.0) 75%)'
                                : 'radial-gradient(circle, rgba(239,68,68,0.45) 0%, rgba(239,68,68,0.0) 75%)',
                        filter: 'blur(40px)',
                    }}
                />
                <motion.div
                    initial={{ opacity: 0.7, scale: 0.4 }}
                    animate={{ opacity: 0.25, scale: 1.6 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
                    className='pointer-events-none absolute size-[12.5rem] rounded-full'
                    style={{
                        background:
                            status === 'success'
                                ? 'radial-gradient(circle, rgba(74,222,128,0.6) 0%, rgba(74,222,128,0.0) 70%)'
                                : 'radial-gradient(circle, rgba(248,113,113,0.6) 0%, rgba(248,113,113,0.0) 70%)',
                        filter: 'blur(30px)',
                    }}
                />
                <motion.div
                    initial={{ opacity: 0.8, scale: 0.3 }}
                    animate={{ opacity: 0, scale: 2.7 }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    className='pointer-events-none absolute size-[18.75rem] rounded-full'
                    style={{
                        background:
                            status === 'success'
                                ? 'radial-gradient(circle, rgba(110,231,183,0.8) 0%, rgba(110,231,183,0) 60%)'
                                : 'radial-gradient(circle, rgba(252,165,165,0.8) 0%, rgba(252,165,165,0) 60%)',
                        filter: 'blur(45px)',
                    }}
                />
                <motion.div
                    initial={{ scale: 0, rotate: -20, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                    {status === 'success' ? (
                        <CheckCircle2 className='relative z-10 h-20 w-20 text-green-500 drop-shadow-2xl' aria-hidden />
                    ) : (
                        <CircleX className='relative z-10 h-20 w-20 text-red-500 drop-shadow-2xl' aria-hidden />
                    )}
                </motion.div>
            </div>
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.35 }}
                    className='mt-6 text-3xl font-semibold'
                >
                    {status === 'success' ? 'Успешно' : 'Ошибка'}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.35 }}
                    className='text-muted-foreground mt-2 max-w-md text-lg'
                >
                    {status === 'success' ? 'Магическая ссылка отправлена!' : (props as ErrorStatusProps).error}
                </motion.p>
            </div>
            <ReturnToHomePage />
        </motion.div>
    )
}

Status.displayName = 'Status'

export { Status }

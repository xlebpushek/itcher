'use client'

import { LogIn } from 'lucide-react'
import type { ChangeEvent, FC, FormEvent } from 'react'
import { useState } from 'react'
import { sendMagicLinkFx } from '@/features/auth-by-magic-link'
import { cn } from '@/shared/lib/utils'
import { Button, H2, Input, Label } from '@/shared/ui'
import { Status as StatusComponent } from './ui/status'

type Status = 'idle' | 'pending' | 'error' | 'success'

const validateEmail = (email: string): string | null => {
    if (!email.trim()) return 'Почта обязательна'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Пожалуйста, введите корректный email адрес'

    return null
}

const AuthPage: FC = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<Status>('idle')
    const [error, setError] = useState<string | null>(null)

    const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (error !== null) setError(null)
        setEmail(e.target.value)
    }

    const sendMagicLinkHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationError = validateEmail(email)
        if (validationError) {
            setError(validationError)
            return
        }

        try {
            setStatus('pending')
            await sendMagicLinkFx(email)
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    return (
        <section className='flex h-screen w-full flex-col items-center justify-center gap-y-6'>
            {status === 'idle' && (
                <>
                    <H2>Sign in with link</H2>
                    <form className='flex items-end gap-x-3' onSubmit={sendMagicLinkHandler}>
                        <div className='space-y-3'>
                            <Label className={cn('text-ring', error && 'text-red-400')} htmlFor='email-field'>
                                {error ? error : 'Введите ваш email'}
                            </Label>
                            <Input
                                className='w-auto'
                                id='email-field'
                                type='email'
                                autoComplete='email'
                                value={email}
                                onChange={changeEmailHandler}
                                placeholder='Email'
                            />
                        </div>
                        <Button type='submit' aria-label='Отправить ссылку для входа на почту'>
                            <LogIn className='size-5' aria-hidden />
                        </Button>
                    </form>
                </>
            )}
            {status === 'success' && <StatusComponent status='success' />}
            {status === 'error' && <StatusComponent status='error' error='Что-то пошло не так' />}
        </section>
    )
}

AuthPage.displayName = 'AuthPage'

export default AuthPage

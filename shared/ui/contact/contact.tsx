'use client'

import type { ComponentProps, FC } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { env } from '@/shared/config'
import { Button } from '@/shared/ui'
import { TermsModal } from './terms-modal'

const TERMS_ACCEPTED_KEY = 'terms_accepted'
const TERMS_ACCEPTED_DATE_KEY = 'terms_accepted_date'

const Contact: FC<ComponentProps<typeof Button>> = (props) => {
    const [showTerms, setShowTerms] = useState(false)
    const [termsAccepted, setTermsAccepted] = useState(false)

    useEffect(() => {
        const accepted = localStorage.getItem(TERMS_ACCEPTED_KEY) ?? localStorage.getItem('public_offer_accepted')
        if (accepted === 'true') setTermsAccepted(true)
    }, [])

    const handleContactClick = useCallback(() => {
        if (!termsAccepted) setShowTerms(true)
        else window.open(env.TELEGRAM_ADMIN_URL, '_blank')
    }, [termsAccepted])

    const handleAcceptTerms = useCallback(() => {
        localStorage.setItem(TERMS_ACCEPTED_KEY, 'true')
        localStorage.setItem(TERMS_ACCEPTED_DATE_KEY, new Date().toISOString())
        setTermsAccepted(true)
        setShowTerms(false)
        window.open(env.TELEGRAM_ADMIN_URL, '_blank')
    }, [])

    const handleCloseTerms = useCallback(() => setShowTerms(false), [])

    return (
        <>
            <Button {...props} onClick={handleContactClick} />
            {showTerms && <TermsModal onClose={handleCloseTerms} onAccept={handleAcceptTerms} />}
        </>
    )
}

Contact.displayName = 'Contact'

export { Contact }

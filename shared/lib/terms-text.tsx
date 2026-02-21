import type { ReactNode } from 'react'

const parseTermsText = (text: string): ReactNode[] => {
    const parts: ReactNode[] = []
    let rest = text
    let key = 0
    while (rest.length > 0) {
        const strongMatch = rest.match(/^\*\*(.+?)\*\*/)
        const emMatch = rest.match(/^\*(.+?)\*/)
        if (strongMatch) {
            parts.push(<strong key={key++}>{strongMatch[1]}</strong>)
            rest = rest.slice(strongMatch[0].length)
        } else if (emMatch) {
            parts.push(<em key={key++}>{emMatch[1]}</em>)
            rest = rest.slice(emMatch[0].length)
        } else {
            const nextStrong = rest.indexOf('**')
            const nextEm = rest.indexOf('*')
            const next = [nextStrong === -1 ? Infinity : nextStrong, nextEm === -1 ? Infinity : nextEm]
            const cut = Math.min(next[0], next[1])
            if (cut === Infinity) {
                parts.push(rest)
                break
            }
            parts.push(rest.slice(0, cut))
            rest = rest.slice(cut)
        }
    }
    return parts
}

export { parseTermsText }

import { Fira_Code, Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin', 'cyrillic'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    display: 'swap',
})

const firaCode = Fira_Code({
    variable: '--font-fira-code',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export { firaCode, geistMono, geistSans, jetBrainsMono }

import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'FOOD QUIZ — Otestuj svůj chuťový přehled', description: 'Zábavný český kvíz o jídle, chutích a kuchyních světa. Kolik toho víš?', applicationName: 'FOOD QUIZ' }
export const viewport: Viewport = { themeColor: '#fffaf2', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="cs"><body>{children}</body></html> }

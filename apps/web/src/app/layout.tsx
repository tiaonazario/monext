import { cn } from '@monext/ui/utils'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'MoNext',
    template: '%s | MoNext',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.className,
          'h-screen w-screen bg-background antialiased',
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}

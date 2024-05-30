import '../styles/globals.css'

import { BottomBar } from '@/components/bottom-bar'
import { Header } from '@/components/header'
import { Providers } from '@/components/providers'
import { SidebarMenu } from '@/components/sidebar-menu'
import { SidebarMenuButton } from '@/components/sidebar-menu-button'
import { cn } from '@monext/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
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
          'flex h-screen w-screen flex-col bg-background text-sm antialiased',
        )}
        suppressHydrationWarning
      >
        <Providers>
          <Header />

          <main className="flex grow">
            <SidebarMenuButton>
              <SidebarMenu />
            </SidebarMenuButton>

            <div className="grow">{children}</div>
          </main>

          <BottomBar />
        </Providers>
      </body>
    </html>
  )
}

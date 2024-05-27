'use client'

import { cn } from '@monext/ui/utils'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ElementType, ReactNode } from 'react'

export interface MobileMenuProps extends LinkProps {
  children: ReactNode
  className?: string
  icon?: ElementType
}

export const MobileMenu = ({
  children,
  className,
  ...rest
}: MobileMenuProps) => {
  const pathname = usePathname()

  return (
    <Link
      {...rest}
      data-active={pathname === rest.href}
      className={cn(
        'flex flex-col px-4 py-2 text-muted-foreground',
        'data-[active=true]:bg-accent data-[active=true]:text-accent-foreground',
        className,
      )}
    >
      {children}
    </Link>
  )
}

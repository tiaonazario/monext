'use client'

import { cn } from '@monext/utils'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export interface ActiveLinkProps extends LinkProps {
  className?: string
}

export const ActiveLink = ({ className, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      {...rest}
      data-active={pathname === rest.href}
      className={cn(
        'data-[active=true]:bg-accent data-[active=true]:text-accent-foreground',
        className,
      )}
    />
  )
}

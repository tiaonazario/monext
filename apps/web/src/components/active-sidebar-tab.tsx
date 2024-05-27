'use client'

import { cn } from '@monext/ui/utils'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

export interface ActiveSidebarTabProps extends LinkProps {
  className?: string
  children?: ReactNode
}

export const ActiveSidebarTab = ({
  className,
  ...rest
}: ActiveSidebarTabProps) => {
  const isActive = usePathname() === rest.href

  return <Link {...rest} data-active={isActive} className={cn(className)} />
}

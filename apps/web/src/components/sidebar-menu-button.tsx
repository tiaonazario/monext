'use client'

import { Button } from '@monext/ui'
import { PanelLeftIcon } from 'lucide-react'
import { type ReactNode, useState } from 'react'

export interface SidebarMenuButtonProps {
  children: ReactNode
}

export const SidebarMenuButton = ({ children }: SidebarMenuButtonProps) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <>
      <Button
        className="absolute top-4 left-5 hidden rounded-full p-1 sm:inline-flex"
        variant="ghost"
        onClick={() => setShow(!show)}
      >
        <PanelLeftIcon />
      </Button>

      {show && children}
    </>
  )
}

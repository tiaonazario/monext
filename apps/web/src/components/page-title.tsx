import { cn } from '@monext/ui/utils'
import type { HTMLAttributes } from 'react'

export interface PageTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

export const PageTitle = ({
  title,
  description,
  className,
  ...rest
}: PageTitleProps) => {
  return (
    <div className={cn('flex flex-col', className)} {...rest}>
      <h2 className="font-bold text-base">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}

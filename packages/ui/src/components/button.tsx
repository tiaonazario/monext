import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

import { cn } from '../cn'

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      secondary:
        'bg-secondary text-secondary-foreground shadow hover:bg-secondary/90',
      outline: 'border shadow hover:bg-accent hover:text-accent-foreground',
      ghost:
        'bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      sm: 'h-8 gap-1 px-2 py-1 text-xs',
      base: 'h-10 gap-2 px-4 py-2 text-sm',
      md: 'h-13 gap-3 px-6 py-3 text-base',
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

import { cn } from '@monext/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
const Root = React.forwardRef<HTMLDivElement, RootProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        className={cn('flex h-full flex-col gap-4 border-r py-4', className)}
        ref={ref}
        {...rest}
      />
    )
  },
)
Root.displayName = 'SidebarRoot'

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {}
const Tabs = React.forwardRef<HTMLElement, TabsProps>(
  ({ className, ...rest }, ref) => {
    return (
      <nav className={cn('mr-2 grid gap-1', className)} ref={ref} {...rest} />
    )
  },
)
Tabs.displayName = 'SidebarTabs'

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}
const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  ({ children, asChild, className, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(
          'flex items-center gap-2 rounded-md px-6 py-3 text-muted-foreground',
          'hover:bg-accent/90 hover:text-accent-foreground',
          'data-[active=true]:border-primary data-[active=true]:border-l-4 data-[active=true]:pl-5',
          'data-[active=true]:bg-accent data-[active=true]:text-accent-foreground',
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Comp>
    )
  },
)
Tab.displayName = 'SidebarTab'

export const Sidebar = { Root, Tabs, Tab }

import { Button } from '@monext/ui'
import { Logo } from './logo'
import { ThemeToggleButton } from './theme-toggle-button'

export const Header = () => {
  return (
    <div className="sticky flex h-16 items-center justify-between border-b bg-background-alt px-6">
      <div className="flex items-center sm:ml-9">
        <Logo />
      </div>

      <div className="flex gap-4">
        <ThemeToggleButton />
        <Button variant="primary" size="base">
          Login
        </Button>
      </div>
    </div>
  )
}

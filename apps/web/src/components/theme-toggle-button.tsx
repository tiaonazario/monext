'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { type Theme, themeTranslator } from '@/helpers/theme-translator'
import { Button, DropdownMenu } from '@monext/ui'

export const ThemeToggleButton = () => {
  const { resolvedTheme, theme: activeTheme, themes, setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" className="rounded-full p-1.5">
          {resolvedTheme === 'dark' ? (
            <MoonIcon className="size-6 transition-all" />
          ) : (
            <SunIcon className="size-6 transition-all" />
          )}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="space-y-2">
        <DropdownMenu.Label className="px-4">Change theme</DropdownMenu.Label>
        <DropdownMenu.Separator />

        <div className="space-y-0.5">
          {themes.map((theme) => (
            <DropdownMenu.Item
              key={theme}
              data-active={activeTheme === theme}
              className="cursor-pointer px-4 py-2 text-muted-foreground data-[active=true]:border data-[active=true]:bg-accent hover:bg-accent/90 data-[active=true]:text-accent-foreground hover:text-accent-foreground"
              onClick={() => setTheme(theme)}
            >
              {themeTranslator[theme as Theme]}
            </DropdownMenu.Item>
          ))}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

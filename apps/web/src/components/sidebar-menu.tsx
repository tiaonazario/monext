import { Sidebar } from '@monext/ui'
import { CompassIcon, HomeIcon, UserIcon } from 'lucide-react'
import { ActiveSidebarTab } from './active-sidebar-tab'

export const SidebarMenu = () => {
  return (
    <Sidebar.Root className="hidden sm:flex">
      <Sidebar.Tabs>
        <Sidebar.Tab asChild>
          <ActiveSidebarTab href="/feed">
            <HomeIcon />
            Feed
          </ActiveSidebarTab>
        </Sidebar.Tab>
        <Sidebar.Tab asChild>
          <ActiveSidebarTab href="/explore">
            <CompassIcon />
            Explore
          </ActiveSidebarTab>
        </Sidebar.Tab>
        <Sidebar.Tab asChild>
          <ActiveSidebarTab href="/account">
            <UserIcon />
            Account
          </ActiveSidebarTab>
        </Sidebar.Tab>
      </Sidebar.Tabs>
    </Sidebar.Root>
  )
}

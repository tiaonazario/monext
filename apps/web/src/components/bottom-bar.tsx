import { Button } from '@monext/ui'
import { CompassIcon, HomeIcon, UserIcon } from 'lucide-react'
import { MobileMenu } from './mobile-menu'

export const BottomBar = () => {
  return (
    <div className="sticky grid w-full grid-cols-3 items-center justify-center border-t bg-background-alt sm:hidden">
      <Button asChild>
        <MobileMenu href="/feed">
          <HomeIcon className="size-5" />
          <span className="text-xxs">Feed</span>
        </MobileMenu>
      </Button>
      <Button asChild>
        <MobileMenu href="/explore">
          <CompassIcon className="size-5" />
          <span className="text-xxs">Explore</span>
        </MobileMenu>
      </Button>
      <Button asChild>
        <MobileMenu href="/account">
          <UserIcon className="size-5" />
          <span className="text-xxs">Account</span>
        </MobileMenu>
      </Button>
    </div>
  )
}

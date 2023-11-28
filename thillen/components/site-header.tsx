import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background opacity-90 backdrop:blur:md">
      <div className="container flex h-16 items-center sm:justify-between ">
        <div>
          <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/47916202?v=4" />
          <AvatarFallback>TH</AvatarFallback>
          <span className="hidden font-bold sm:inline-block">
            {/* {siteConfig.name} */}
          </span>
        </Avatar>
        </div>
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

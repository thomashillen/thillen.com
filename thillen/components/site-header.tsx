import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b ">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between ">
        <div id="AvatarLogo">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/47916202?v=4" />
              <AvatarFallback>TH</AvatarFallback>
            </Avatar>
            <span className="hidden font-bold sm:inline-block">
              {/* {siteConfig.name} */}
            </span>
          </Link>
        </div>
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  // className: "text-slate-700 dark:text-slate-400 ",
                })}
              >
                <Icons.github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  // className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Icons.twitter className="h-5 w-5 " />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

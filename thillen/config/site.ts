import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}

export const siteConfig: SiteConfig = {
  name: "thillen.com",
  description:
    "Thomas Hillenmeyer is a software engineer. He lives in NYC.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    // {
    //   title: "About",
    //   href: "/about",
    // },
    // {
    //   title: "Contact",
    //   href: "/contact",
    // },

  ],
  links: {
    twitter: "https://twitter.com/thomas_hillen",
    github: "https://github.com/thomashillen",
    linkedin: "https://www.linkedin.com/in/thomashillenmeyer",
  },
}

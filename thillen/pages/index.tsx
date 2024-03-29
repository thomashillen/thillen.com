import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>thillen.com</title>
        <meta
          name="description"
          content="thillen.com website built with Next.js, Radix UI, and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile_sketch.jpeg" />
      </Head>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className=" text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Thomas <br className="hidden sm:inline" />
            Hillenmeyer
          </h1>

          <div id="links" className="my-6 flex items-center rounded-md border">
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants({ size: "sm", variant: "ghost" })}>
                <Icons.readcv className="h-5 w-5 " />
                <span className="sr-only">read.cv</span>
                <div className="ml-1">read.cv</div>
              </div>
            </Link>
            <div className="border-l py-2"></div>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants({ size: "sm", variant: "ghost" })}>
                <Icons.github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                <div className="ml-1">Github</div>
              </div>
            </Link>
            <div className="border-l py-2"></div>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants({ size: "sm", variant: "ghost" })}>
                <Icons.twitter className="h-5 w-5 " />
                <span className="sr-only">Twitter</span>
                <div className="ml-1">Twitter</div>
              </div>
            </Link>
          </div>

          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            I am a software engineer based in NYC who loves to build things. I
            specialize in building web applications with modern technologies.
          </p>
        </div>
        <div className="w-full max-w-sm">
          <h1 className="text2xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-2xl lg:text-3xl">
            Some good music:
          </h1>
          <iframe
            className="my-2 w-full rounded-xl"
            src="https://open.spotify.com/embed/playlist/2AzVQANSOEgrk3nHafzEv6?utm_source=generator"
            // width="100%"
            height="452"
            // frameBorder="0"
            // allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

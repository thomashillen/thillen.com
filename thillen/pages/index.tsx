import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

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
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Thomas <br className="hidden sm:inline" />
            Hillenmeyer
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            I am a recent graduate of NYU with a passion for building innovative
            software solutions. My skills include proficiency in multiple
            programming languages, experience with agile development
            methodologies, and a strong ability to work collaboratively in a
            team environment.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.resume}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Resume
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
        <div>
          <iframe
            className="br-12 h-99 w-full shadow-lg"
            src="https://open.spotify.com/embed/playlist/2AzVQANSOEgrk3nHafzEv6?utm_source=generator"
            width="100%"
            height="452"
            // frameBorder="0"
            // allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

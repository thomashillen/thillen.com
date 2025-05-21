import Head from "next/head"
import Image from "next/image" // Added Image import
import Link from "next/link"

import { Project, projects } from "@/config/projects" // Added Project and projects import
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { InteractiveGridAnimation } from "@/components/interactive-grid" // Added InteractiveGridAnimation import
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function IndexPage() {
  const featuredProjects = projects.slice(0, 3)
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
      {/* Updated classes for consistent width and centering */}
      <section className="max-w-[980px] mx-auto pt-6 pb-8 md:py-10">
        {/* Removed max-w-[980px] as parent section now handles it */}
        <div className="flex flex-col items-start gap-2">
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

        {/* InteractiveGridAnimation Wrapper */}
        <div className="max-w-[980px] mx-auto my-12 border border-slate-200 dark:border-slate-700 rounded-md p-4"> {/* Changed my-8 to my-12 */}
          <InteractiveGridAnimation />
        </div>

        {/* Featured Projects Section */}
        <section className="max-w-[980px] mx-auto my-12"> {/* Applied max-width, centering, and vertical margin */}
          <h2 className="my-8 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"> {/* Heading will be contained by parent */}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project: Project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="hover:bg-secondary h-full transition-colors">
                  <CardHeader className="text-xl font-bold">
                    <div className="flex items-center justify-between">
                      <h2>{project.title}</h2>
                      <Icons.link className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative flex justify-center">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={300}
                        height={200}
                        objectFit="cover"
                        className="mb-4 rounded border"
                      />
                    </div>
                    <div className="mb-4 flex items-center">
                      <Icons.laptop className="h-5 w-5" />
                      <span className="ml-2 truncate text-xs text-slate-700 dark:text-slate-400">
                        {project.link}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-400">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <Link
            href="/projects"
            className={
              buttonVariants({ variant: "outline", size: "lg" }) +
              " mx-auto mt-8 block w-fit"
            }
          >
            View all projects
          </Link>
        </section>

        {/* Spotify Embed Section */}
        <div className="max-w-[980px] mx-auto my-12"> {/* Outer wrapper for section alignment */}
          <div className="mx-auto max-w-lg"> {/* Changed max-w-md to max-w-lg */}
            <h1 className="text2xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-2xl lg:text-3xl mb-4 text-center"> {/* Added mb-4 and text-center */}
              Some good music:
            </h1>
            <iframe
              className="my-2 w-full rounded-xl h-[380px]" // Removed aspect-video, added h-[380px]
              src="https://open.spotify.com/embed/playlist/2AzVQANSOEgrk3nHafzEv6?utm_source=generator"
              // width="100%" removed as w-full handles it
              // height attribute removed, using Tailwind class now
              // frameBorder="0" (can be kept or removed, typically fine)
              // allowFullScreen="true" (can be kept)
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          </div> {/* Closes "mx-auto max-w-md" */}
        </div>   {/* ADDED MISSING CLOSING TAG HERE for "max-w-[980px] mx-auto my-12" */}
      </section>
    </Layout>
  )
}

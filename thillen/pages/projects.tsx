import Head from "next/head"
import Link from "next/link"

import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Burger Builder",
      description: "A fun and interactive way to build your perfect burger.",
      link: "https://my-perfect-burger.vercel.app/",
      imageUrl: "/path-to-burger-builder-image.jpg", // Replace with your image URL
    },
        {
      title: "nannü website",
      description: "A website for a fashion brand.",
      link: "https://nannu.us/",
    },
    {
      title: "My Portfolio",
      description: "This website!",
      link: "https://thillen.com",
      imageUrl: "/path-to-portfolio-image.jpg", // Replace with your image URL
    },


    // ... more projects
  ]

  return (
    <Layout>
      <Head>
        <title>thillen.com - Projects</title>
        {/* ... other head elements ... */}
      </Head>
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold mb-4">Projects</h1>
        <p className="mb-6">
          Here are some of my projects. I am always working on new things so
          check back soon!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="block h-full">
                <Card className="hover:bg-secondary transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h2>{project.title}</h2>
                      <Icons.link className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <div className="p-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="mb-4 w-full object-cover"
                    />{" "}
                    {/* Image */}
                    <CardContent>
                      <p>{project.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

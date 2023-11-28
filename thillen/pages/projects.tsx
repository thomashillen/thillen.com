import Head from "next/head";
import Image from "next/image";
import Link from "next/link";



import { Icons } from "@/components/icons";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function ProjectsPage() {
  const projects = [
    {
      title: "Burger Builder",
      description: "A fun and interactive way to build your perfect burger.",
      link: "https://my-perfect-burger.vercel.app/",
      imageUrl: "/BurgerBuilderScreenshot.png",
    },
    {
      title: "nannü website",
      description: "A website for a fashion brand.",
      link: "https://nannu.us/",
      imageUrl: "/nannuScreenshot.png",
    },
    {
      title: "My Portfolio",
      description: "This website!",
      link: "https://thillen.com",
      imageUrl: "/thillenScreenshot.png",
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
        <h1 className="mb-4 text-3xl font-extrabold">Projects</h1>
        <p className="mb-6">
          Here are some of my projects. I am always working on new things so
          check back soon!
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="block h-full">
                <Card className="hover:bg-secondary h-full transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h2>{project.title}</h2>
                      <Icons.link className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <div className="p-4">
                    {/* <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="mb-4 w-full object-cover"
                    />{" "} */}
                    {/* Image */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={500} // replace with your image's width
                      height={300} // replace with your image's height
                      className="mb-4 object-cover"
                    />
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
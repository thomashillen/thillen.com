export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "Burger Builder",
    description: "A fun and interactive way to build your perfect burger.",
    link: "https://my-perfect-burger.vercel.app/",
    imageUrl: "/BurgerBuilderScreenshot.png",
  },
  {
    title: "nannü website",
    description: "A website for a fashion brand.",
    link: "https://nannu-website.vercel.app/",
    imageUrl: "/nannuScreenshot.png",
  },
  {
    title: "My Portfolio",
    description: "This website!",
    link: "https://thillen.com",
    imageUrl: "/thillenScreenshot.png",
  },

  // ... more projects
];

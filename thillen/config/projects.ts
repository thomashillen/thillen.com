export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "Bar Chimera",
    description:
      "A service guide for a bar, covering food, drinks, wine, and allergy info.",
    link: "https://bar-chimera.vercel.app/",
    imageUrl: "/bar-chimera.png",
  },
  {
    title: "Floor Notes",
    description:
      "A study tool for exploring restaurant menus, beverage guides, and allergy matrices.",
    link: "https://floor-notes.vercel.app/",
    imageUrl: "/floor-notes.png",
  },
  {
    title: "SubwaySurfer",
    description:
      "A real-time NYC subway tracker that visualizes subway car movement across every line.",
    link: "https://subwaysurfer-sooty.vercel.app/",
    imageUrl: "/subwaysurfer.png",
  },
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
];

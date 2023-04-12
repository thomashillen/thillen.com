import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <div className="bg-gray-800">
          <div className="container mx-auto py-16">
            <h1 className="text-5xl font-bold text-white">Hi, I'm Thomas Hillenmeyer</h1>
            <p className="text-xl text-white my-4">
              I'm a recently graduated software engineer based in NYC. I specialize in Full-Stack
              Web Development.
            </p>
            <a
              href="#"
              className="bg-white text-gray-800 py-3 px-6 rounded-lg font-bold hover:bg-gray-200"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center mt-12">
            <div className="mr-8">
              <Link href="/projects">
                <div className="rounded-full h-36 w-36 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 hover:shadow-lg transition duration-300">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <p className="mt-2">Check out my latest work</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <div className="rounded-full h-36 w-36 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-yellow-400 hover:shadow-lg transition duration-300">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold">Blog</h2>
                    <p className="mt-2">Read my thoughts and musings</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="container mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64">
                  <Image
                    src="/images/featured-project.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="featured project"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="mb-4">Short project description</p>
                <Link href="/projects/project-name">
                  <div className="text-purple-600 hover:underline">Learn more</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

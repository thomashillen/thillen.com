import Link from 'next/link';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
          <p className="text-lg">
            I am a recent graduate from NYU with a bachelor's degree in
            Computer Science, currently living in NYC.
          </p>


        </div>
      </main>

    </div>
  );
};

export default Home;
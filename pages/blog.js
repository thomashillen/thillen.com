import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';
import { getSortedPostsData } from '../lib/posts';

const Blog = ({ postsData }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-12 px-4">
          {postsData.map(({ id, date, title, content }) => (
            <BlogContent key={id} date={date} title={title} content={content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const postsData = getSortedPostsData();
  return {
    props: {
      postsData,
    },
  };
}

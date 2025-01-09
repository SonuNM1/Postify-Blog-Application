import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
      <h1 className='text-3xl font-bold lg:text-6xl'>
      Welcome to my{' '}
      <TypeAnimation
        sequence={[
          'Digital Space', // First phrase
          1000, // 1 second delay before switching
          'Exploration Zone', // Second phrase
          1000,
          'Tech Talks', // Third phrase
          1000,
          'Learning Center', // Fourth phrase
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity} // This will make the animation repeat forever
      />
    </h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Your go-to space for articles across multiple topics, from tech and business to lifestyle and environment. Find everything you love here!
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
     
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 '>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

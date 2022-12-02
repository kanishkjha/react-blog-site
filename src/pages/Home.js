import React from 'react';
import BlogList from '../components/BlogList';
import { useFetch } from '../hooks/useFetch';

export default function Homepage() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  );
}

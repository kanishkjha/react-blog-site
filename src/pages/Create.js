import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='blog-title'>Blog Title:</label>
        <input
          type='text'
          name='blog-title'
          id='blog-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor='blog-body'>Blog Body:</label>
        <textarea
          name='blog-body'
          id='blog-body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label
          htmlFor='blog-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          Blog Author:
        </label>
        <input
          type='text'
          name='blog-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id='blog-author'
        />

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}

import React from 'react';

const BlogContent = ({ title, date, content }) => {
  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-4">{date}</p>
      <div className="prose max-w-none">{content}</div>
    </article>
  );
};

export default BlogContent;

import React, { useState } from 'react';
import { allNews } from '../blog/blog-data.js';
import PageIntro from '../page-intro/PageIntro';
import bePartOfUsImage from '../../images/home-box/be-part-of-us.webp';
import BlogDisplay from '../blog/BlogDisplay';

import './Blog.scss';

const blogData = {
  title: 'Blog',
  image: bePartOfUsImage,
};

const Blog = () => {
  const lang = 'sr';
  document.documentElement.lang = lang;
  const [numBlogs, SetNumBlogs] = useState(3);

  const slicedArray = allNews.slice(0, numBlogs);

  const setBlogs = () => {
    if (numBlogs === 3) {
      SetNumBlogs(allNews.length);
    } else {
      SetNumBlogs(3);
    }
  };

  return (
    <div className='blog'>
      <PageIntro pageIntro={blogData} />
      <div className='blog-body'>
        {slicedArray.map((news) => (
          <BlogDisplay key={news.id} news={news} />
        ))}
      </div>
      <div className='blog-button'>
        <button className='button-blue' onClick={setBlogs}>
          {numBlogs === 3 ? ' Show More ' : 'Show Less'}
        </button>
      </div>
    </div>
  );
};

export default Blog;

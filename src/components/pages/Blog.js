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
  return (
    <div className='blog'>
      <PageIntro pageIntro={blogData} />
      <div className='blog-body'>
        {allNews.map((news) => (
          <BlogDisplay key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

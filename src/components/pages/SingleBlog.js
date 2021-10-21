import React from 'react';

import { allNews } from '../blog/blog-data.js';
import SingleBlogDisplay from '../blog/SingleBlogDisplay.js';

const SingleBlog = ({ match }) => {
  return (
    <div className='single-blog'>
      {allNews.map(
        (news) =>
          news.id == match.params.id && (
            <SingleBlogDisplay key={news.id} news={news} />
          )
      )}
    </div>
  );
};

export default SingleBlog;

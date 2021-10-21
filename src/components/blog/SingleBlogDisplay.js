import React from 'react';
import parse from 'html-react-parser';

import './SingleBlogDisplay.scss';

const SingleBlogDisplay = ({ news }) => {
  return (
    <div className={`single-blog-display `}>
      <div className={`single-blog-display-item `}>
        <h5 className={`single-blog-display-item__title`}>{news.title}</h5>
        <div className={`single-blog-display-item__body `}>
          <div className={`single-blog-display-item__body__media `}>
            <img src={news.image.path} alt={news.image.desc} />
            <span>{news.image.desc}</span>
          </div>
          <div className={`single-blog-display-item__body__text`}>
            {parse(news.text)}
          </div>
        </div>
        <div className={`single-blog-display-item__footer `}>
          <p>{news.date}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDisplay;

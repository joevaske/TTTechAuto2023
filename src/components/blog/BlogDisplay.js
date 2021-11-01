import React from 'react';

import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import './BlogDisplay.scss';

const BlogDisplay = ({ news }) => {
  return (
    <div className={`blog-display blog-display-${news.id}`}>
      <div className={`blog-card blog-card-${news.id}`}>
        <h5 className={`blog-card__title blog-card__title-${news.id}`}>
          <Link to={`/blog-single/${news.id}`}>{news.title}</Link>
        </h5>
        <div className={`blog-card__body blog-card__body-${news.id}`}>
          <div className={`blog-card__media blog-card__media-${news.id}`}>
            <Link to={`/blog-single/${news.id}`}>
              <img src={news.image.path} alt={news.image.desc} />
            </Link>
          </div>
          <div className={`blog-card__text blog-card__text-${news.id}`}>
            {parse(news.excerpt)}
          </div>
        </div>
        <div className={`blog-card__footer blog-card__footer-${news.id}`}>
          <p>{news.date}</p>
          <Link to={`/blog-single/${news.id}`} className='read-more'>
            Read More ...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;

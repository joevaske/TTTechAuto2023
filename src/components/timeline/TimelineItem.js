import React from 'react';

const TimelineItem = ({ timelineData }) => {
  return (
    <div className='timeline__content'>
      {timelineData.map((data) => (
        <div key={data.id} className='timeline__content__item'>
          <div className='timeline__content__item__title'>
            <h3>{data.year}</h3>
            <span className='page-title-decoration__left'></span>
          </div>
          <div className='timeline__content__item__text'>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineItem;

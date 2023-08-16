import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './TalentlyftList.scss';

const TelentlyftList = ({ jobs }) => {
  /*  const [jobs] = useState(jobs); */
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = jobs.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, jobs]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className='jobs-list'>
      {jobs.map((item, indexJobs) => {
        const { Id, Title, Country, City, ShortlinkUrl } = item;
        let position = 'nextSlide';
        if (indexJobs === index) {
          position = 'activeSlide';
        }
        if (
          indexJobs === index - 1 ||
          (index === 0 && indexJobs == jobs.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <div className={`job ${position}`} key={Id}>
            <h2>{Title}</h2>
            <p>
              {Country} - {City}
            </p>

            <a className='apply-btn' href={ShortlinkUrl}>
              Apply now
            </a>
          </div>
        );
      })}
      <div className='next' onClick={() => setIndex(index + 1)}>
        <HiChevronRight />
      </div>
      <div className='prev' onClick={() => setIndex(index - 1)}>
        <HiChevronLeft />
      </div>
    </div>
  );
};

export default TelentlyftList;

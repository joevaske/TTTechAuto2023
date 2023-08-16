import './Talentlyft.scss';
import { Fragment } from 'react';
import TalentlyftList from './TelentlyftList';
import useFetch from '../fetch/useFetch';
import talenlyftImage from '../../images/home-box/new/students-corner.webp';

const Talentlyft = () => {
  const { data, error, isLoading } = useFetch(
    'https://api.talentlyft.com/v2/public/tttech-auto/jobs'
  );

  return (
    <Fragment>
      <div className='talenlyft'>
        <div className='talentlyft__bg'>
          <img src={talenlyftImage} alt='Open positions' />
        </div>

        {!isLoading && <TalentlyftList jobs={data.Results} />}
      </div>
    </Fragment>
  );
};

export default Talentlyft;

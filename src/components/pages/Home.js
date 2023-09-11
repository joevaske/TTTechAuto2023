import HomeBox from '../home-box/HomeBox';
import PageIntro from '../page-intro/PageIntro';

import homePageImage from '../../images/backgrounds/Automotive_MotionWise_flip_s.jpg';
import Talentlyft from '../talentlyft/Talentlyft';
import Paragraph from '../layout/elements/Paragraph';
import PageHeading from '../layout/PageHeading';
import Button from '../layout/elements/Button';

const homePageData = {
  title: 'You are at TTTech Auto CEE',
  image: homePageImage,
};

const Home = () => {
  const lang = 'en-RS';
  document.documentElement.lang = lang;

  return (
    <div>
      {/*  <Hero /> */}
      <PageIntro pageIntro={homePageData} />
      {/*   <HomeBoxTwo /> */}
      <PageHeading title='About us' />
      <HomeBox />
      <Paragraph
        text='The people who work with us are experts in their fields and we depend on
        every single one of them to drive innovation'
        align='center'
      />
      <Talentlyft />
      <PageHeading title='Follow us on LinkedIn' />
      <Paragraph
        text='Follow us for information about automated driving and TTTech Auto CEE'
        align='center'
      />
      <Button
        setClass='button-blue'
        text='Follow TTTech Auto'
        link='https://www.linkedin.com/company/tttech-auto/'
        target='__blank'
      />
    </div>
  );
};

export default Home;

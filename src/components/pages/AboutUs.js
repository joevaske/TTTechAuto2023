import PageIntro from '../page-intro/PageIntro';
import aboutUsPageImage from '../../images/backgrounds/about-us-bg.webp';
import PageHeading from '../layout/PageHeading';
import Paragraph from '../layout/elements/Paragraph';
import Button from '../layout/elements/Button';
import TextHeading from '../layout/elements/TextHeading';
import AboutUsIntro from '../about-us-intro/AboutUsIntro';
import OurTeam from '../our-team/OurTeam';

const AboutUs = () => {
  const aboutUsPageData = {
    title: 'About us',
    image: aboutUsPageImage,
  };
  return (
    <div>
      <PageIntro pageIntro={aboutUsPageData} />
      <PageHeading title='What we do' />
      <Paragraph
        text='TTTech Auto provides solutions for the challenges of future vehicle generations. The company specializes in safe software and hardware platforms for automated driving and beyond, applicable in series production programs.
'
        align='left'
      />
      <Paragraph
        text='TTTech Auto CEE is a regional authority on engineering and development of safety critical software. As part of TTTech Auto we are globally acting on product development and customer support all over the world. 
ama'
        align='left'
      />
      <Paragraph
        text='Today TTTech Auto CEE count more than 500 employees located in Novi Sad, Belgrade (Serbia), Osijek (Croatia) and Banja Luka (Bosnia and Herzegovina).
'
        align='left'
      />
      <Paragraph
        text='Our teams are developing software for ADAS (Advance driver-assistance systems) and AD (Autonomous driving). The systems we develop are of high level of autonomy (levels 3, 4, 5) and the software intended for these purposes must be highly reliable, i.e., failure-free. In the critical operations of steering, acceleration, braking, and others, failures are not allowed, as they can directly endanger safety of the passengers.
As this is a real time software requiring timely exchange of information according to predefined priorities, we are also dealing with development of software components which provide fast and reliable communication. 
'
        align='left'
      />
      <Paragraph
        text='An important aspect of our development are specific support mechanisms in the case of failure of parts of the HW system, ensuring that the system remains in operation (continues to drive or safely stops the vehicle).
'
        align='left'
      />
      <Button
        setClass='button-blue'
        text='TTTech Auto'
        link='https://www.tttech-auto.com/'
        target='__blank'
      />
      <PageHeading title='Products' />
      <TextHeading text='Technical Stack' />
      <Paragraph
        text='ADAS, Autosar Classic, Autosar Adaptive, ISO 26262, ASPICE, POSIX, QNX, C/C++, CAN, CANoe, CANalyzer, CANape, Tracer32 -Lauterbach, RTOS, Embedded C, Embedded Linux, SPI , ETHERNET, BSW configuration, PTC Integrity, VectorCast, SAFe, SCRUM, GIT, SVN, Python, Jira, Bitbucket, Gptp, U-boot, Docker, Jenkins, UML, SysML, FOTA, Yocto, Some/IP.'
        align='left'
      />
      <Button
        setClass='button-blue'
        text='Learn more'
        link='https://www.tttech-auto.com/software-products'
        target='__blank'
      />
      <AboutUsIntro />
      <PageHeading title='Our team' />
      <OurTeam />
    </div>
  );
};

export default AboutUs;

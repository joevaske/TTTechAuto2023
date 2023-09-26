import './OurTeam.scss';
import danijelSpasojevic from '../../images/our-team/DanijelSpasojevic.webp';
import markoHalak from '../../images/our-team/MarkoHalak.webp';
import milovanVidovic from '../../images/our-team/MilovanVidovic.webp';
import zvjezdanSpasic from '../../images/our-team/ZvjezdanSpasic.webp';
import sladjanaIvivc from '../../images/our-team/SladjanaIvic.webp';
import ivanaTesevic from '../../images/our-team/IvanaTesevic.webp';
/* import PageHeading from '../layout/PageHeading';
 */ import Paragraph from '../layout/elements/Paragraph';

const ourTeam = [
  {
    id: 1,
    name: 'Danijel Spasojevic',
    title: 'Regional Managing Director CEE',
    img: danijelSpasojevic,
    text: 'The most impressive thing has been to see how people have matured through all this, how our knowledge has built up, and how those who once followed have become those who lead.',
  },
  {
    id: 2,
    name: 'Marko Halak',
    title: 'Group Leader - CP - Engineering Testing SP & CX',
    img: markoHalak,
    text: 'Testing ADAS in development is a major challenge. Such a complex testing system must also be capable of solving all problems independently during runtime, so that the results are always available and without exception.',
  },
  {
    id: 3,
    name: 'Milovan Vidović',
    title: 'Group Leader - CP - Engineering Development',
    img: milovanVidovic,
    text: 'In 2017, I got a job at ZF in Germany, where I spent two years working on the ABS platform and traction control system for the BMW cars. When I returned to Serbia in 2019, I also returned to TTTech Auto, ruling out any other option.',
  },
  {
    id: 4,
    name: 'Zvjezdan Spasic',
    title: 'Chief Architect - SP - AD Platform Development',
    img: zvjezdanSpasic,
    text: 'What is the most important characteristic that we should possess? It is "to be engineers." This may sound like a cliché, but for me, being an engineer means being able to solve a problem you encounter for the first time. Giving up is not an option, instead, it\'s about changing your approach and perspective on the problem.',
  },
  {
    id: 5,
    name: 'Sladjana Ivic',
    title: 'Team Lead,  MotionWise™ Creator Use Case Testing',
    img: sladjanaIvivc,
    text: 'We are constantly trained to work with the most up-to-date equipment and tools. A large number of trainings are always available and help us to improve our knowledge.',
  },
  {
    id: 6,
    name: 'Ivana Tesevic',
    title: 'Manager Software Developer - CP - Engineering Development',
    img: ivanaTesevic,
    text: 'TTTech Auto company believes in nurturing talent and empowering you to become leader in your respective field. From my early days, TTTech Auto company has been incredibly supportive and encouraging, fostering my growth and development. Thanks to their guidance and mentorship, I have now become a team leader, ready to continue inspiring others and achieving new milestones.',
  },
];
const OurTeam = () => {
  return (
    <div className='our-team'>
      {ourTeam.map((member, index) => {
        if (index % 2 === 0) {
          return (
            <div className='member' key={member.id}>
              <div className='member__text'>
                {/*    <PageHeading title={`${member.name} - ${member.title}`} /> */}
                <h2>
                  {member.name}
                  <span>{member.title}</span>
                </h2>
                <Paragraph text={`${member.text}`} align='left' />
              </div>
              <div className='member__image'>
                <img src={member.img} alt={member.name} />
              </div>
            </div>
          );
        } else {
          return (
            <div className='member' key={member.id}>
              <div className='member__image'>
                <img src={member.img} alt={member.name} />
              </div>
              <div className='member__text'>
                {/* <PageHeading title={`${member.name} - ${member.title}`} /> */}
                <h2>
                  {member.name}
                  <span>{member.title}</span>
                </h2>
                <Paragraph text={`${member.text}`} align='left' />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default OurTeam;

import React from 'react';
import './Timeline.scss';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    id: 1,
    year: 2020,
    text: 'TTTech Auto Iberia opens a new office in Madrid, Spain.',
  },
  {
    id: 2,
    year: 2019,
    text: 'TTTech Auto (company which operates under the umbrella of the TTTech Group and was set up as an independent company in 2018) acquires Silicon Gears SL. One of the main projects was the development and delivery of a safe and secure platform software for the HCP1 ECU. This was targeted as the main chassis and powertrain ECU in the HCPx family based on the E3 architecture.',
  },
  {
    id: 3,
    year: 2018,
    text: 'Silicon Gears SL. opens its second office in Barcelona. One of the main projects was the centralization into a single board, the increasing number of ECU in the car. The central unit enabled a variety of systems in the car: from the infotainment system to high-level and safe-critical functionalities for autonomous driving.',
  },
  {
    id: 4,
    year: 2017,
    text: 'Silicon Gears SL. opens its first office in Barcelona. One of the main projects was within the Network ECU team, where we developed a high performance gateway with 10 CAN channels and 7 Ethernet channels.',
  },
  {
    id: 5,
    year: 2016,
    text: 'Silicon Gears SL. was created by Xavier Tisaire and established in Barcelona, Spain, as TTTech Group SW development partner. A team of 4 started to work from Vienna.',
  },
];

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='timeline__heading title-blue'>Timeline</div>

      <TimelineItem timelineData={timelineData} />
    </div>
  );
};

export default Timeline;

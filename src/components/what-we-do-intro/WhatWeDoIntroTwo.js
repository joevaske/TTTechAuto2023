import React from 'react';
import './WhatWeDoIntroTwo.scss';

const WhatWeDoIntroTwo = () => {
  return (
    <div className='what-we-do-intro-2'>
      <div className='what-we-do-intro-2__content'>
        <p>
          Our teams are developing software for ADAS (Advance Driver Assistance
          Systems) and AD (Autonomous Driving). The systems we develop are of
          high level of autonomy (levels 3, 4, 5) and the software intended for
          these purposes must be highly reliable, i.e., failure-free. In the
          critical operations of steering, acceleration, braking, and others,
          failures are not allowed, as they can directly endanger safety of the
          passengers.
        </p>
        <p>
          As this is a real time software requiring timely exchange of
          information according to predefined priorities, we are also dealing
          with development of software components which provide fast and
          reliable communication. An important aspect of our development are
          specific support mechanisms in the case of failure of parts of the HW
          system, ensuring that the system remains in operation (continues to
          drive or safely stops the vehicle).
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoIntroTwo;

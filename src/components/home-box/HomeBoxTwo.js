import React from 'react';
import './HomeBoxTwo.scss';

const HomeBoxTwo = () => {
  return (
    <div className='home-box-2'>
      <h2 className='home-box-2__title'>
        About TTTech Auto Central and Eastern Europe
      </h2>
      <span className='home-box-2__title__decoration'></span>
      <div className='home-box-2__content'>
        <p>
          TTTech Auto CEE is a group of TTTech Auto companies operating in
          Serbia, Croatia, and Bosnia and Herzegovina. The group is established
          as a result of fruitful cooperation of TTTech with RT-RK Institute for
          Computer Based Systems LLC, since 2012. From a perspective NSDC in the
          region, to automotive projects including:
        </p>
        <p>
          zFAS for the first Audi A8 with level 3 autonomy, <br />a project with
          BMW on automated driving functions,
          <br /> and finally to MotionWise, the TTTech Auto’s flagship product,
        </p>
        <p>
          TTTech Auto CEE is globally acting both on product development and
          customer support all over the world.
        </p>
        <p>
          Today we are rightfully considered a regional authority in the field
          of embedded engineering and development of safety critical software.
        </p>
        <p>
          We currently count over 500 employees located in Novi Sad (Serbia),
          Belgrade (Serbia), Osijek (Croatia) and Banja Luka (Bosnia and
          Herzegovina).
        </p>
      </div>
    </div>
  );
};

export default HomeBoxTwo;

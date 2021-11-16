import React from 'react';
import Hero from '../hero/Hero';
import HomeBoxTwo from '../home-box/HomeBoxTwo';

const Home = () => {
  const lang = 'en-RS';
  document.documentElement.lang = lang;

  return (
    <div>
      <Hero />
      <HomeBoxTwo />
    </div>
  );
};

export default Home;

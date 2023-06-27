import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import HomeHero from './HomeHero';

const HomeScreen = () => {
  return (
    <div className="bg-black ">
      <HomeHeader />
      <HomeHero />
    </div>
  );
};

export default HomeScreen;

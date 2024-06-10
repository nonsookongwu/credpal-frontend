import React from 'react'
import { HeroBackground, HomeBackground, InnerHomeBackground, InnerHomeBackgroundWhite } from './Home.styles'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/Hero/Hero';
import Features from '../../components/features/Features';
import Marketing from '../../components/marketing/Marketing';

const Home = () => {
    return (
      <HomeBackground>
        <InnerHomeBackground>
          <NavBar />
          <Hero/>
        </InnerHomeBackground>
        <InnerHomeBackgroundWhite>
          <Features />
          <Marketing/>
        </InnerHomeBackgroundWhite>
      </HomeBackground>
    );
}

export default Home
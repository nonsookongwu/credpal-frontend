import React from 'react'
import { HeroBackground, HomeBackground, InnerHomeBackground, InnerHomeBackgroundWhite } from './Home.styles'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/Hero/Hero';
import Features from '../../components/features/Features';

const Home = () => {
    return (
      <HomeBackground>
        <InnerHomeBackground>
          <NavBar />
          <Hero/>
        </InnerHomeBackground>
        <InnerHomeBackgroundWhite>
          <Features />
        </InnerHomeBackgroundWhite>
      </HomeBackground>
    );
}

export default Home
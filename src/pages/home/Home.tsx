import React from 'react'
import { HeroBackground, HomeBackground, InnerHomeBackground } from './Home.styles'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/Hero/Hero';

const Home = () => {
    return (
      <HomeBackground>
        <InnerHomeBackground>
          <NavBar />
          <Hero/>
        </InnerHomeBackground>
      </HomeBackground>
    );
}

export default Home
import React from 'react'
import { HeroBackground, HomeBackground, InnerHomeBackground, InnerHomeBackgroundWhite } from './Home.styles'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/Hero/Hero';
import Features from '../../components/features/Features';
import Marketing from '../../components/marketing/Marketing';
import CTA from '../../components/cta/CTA';
import Action from '../../components/app_CTA/Action';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
      <HomeBackground>
        <InnerHomeBackground>
          <NavBar />
          <Hero />
        </InnerHomeBackground>
        <InnerHomeBackgroundWhite>
          <Features />
          <Marketing />
          <CTA />
          <Action />
          <Footer/>
        </InnerHomeBackgroundWhite>
        {/* <InnerHomeBackground>
          
        </InnerHomeBackground> */}
      </HomeBackground>
    );
}

export default Home
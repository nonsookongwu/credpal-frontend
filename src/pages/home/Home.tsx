import React from 'react'
import { HeroBackground, HomeBackground, InnerHomeBackground } from './Home.styles'
import NavBar from '../../components/navbar/NavBar'

const Home = () => {
    return (
      <HomeBackground>
        <InnerHomeBackground>
          <NavBar />
        </InnerHomeBackground>
      </HomeBackground>
    );
}

export default Home
import React from 'react'
import { HeroBackground, HomeBackground } from './Home.styles'
import NavBar from '../../components/navbar/NavBar'

const Home = () => {
    return (
      <HomeBackground>      
      <HeroBackground>
          <NavBar/>
    </HeroBackground>
      </HomeBackground>
  )
}

export default Home
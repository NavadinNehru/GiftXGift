import React from 'react'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Hero from '../Components/Hero/Hero'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>

      {/* <FilterBar/> */}
      <Hero/>
      <Popular/> 
      <Offers/>
      <NewsLetter/>
    </div>
  )
}

export default Home

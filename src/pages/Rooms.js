import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../Components/RoomContainer'
const Rooms = () => {
    return (
      <div>
        <Hero hero="roomHero">
          <Banner title="our rooms" >
            <Link to="/" className="btn-primary">Return home</Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </div>
    )
}

export default Rooms


import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../images/homeImage.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer' >
          <h1>Beast Boy's Skateshop</h1>
          <p>Conquer the Concrete with Beast Boy's Skateshop!</p>
          <Link to="/shop">
          <button>Shop Now</button>
          </Link>
        </div>
    </div>
  )
}

export default Home

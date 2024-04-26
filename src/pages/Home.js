import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home' >
      <div className='headerContainer' >
        <h1 className="shopName">Beast Boy's Skateshop</h1>
        <p>Conquer the Concrete with Beast Boy's Skateshop!</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  )   
}

export default Home

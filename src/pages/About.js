import React from 'react'
import aboutImage from '../images/aboutImg.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${aboutImage})`}}>

        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Hey there! Welcome to Beast Boy's Skateshop, your go-to spot for all things skateboarding in Eindhoven since 1999!

We're all about the skate life here. Whether you're a seasoned pro or just starting out, we've got everything you need to shred the streets or tear up the park.

From killer boards to top-notch gear, we've handpicked the best stuff from the coolest brands. Plus, our crew is always here to hook you up with expert advice and a friendly vibe.

But Beast Boy's is more than just a shop—it's a community. We're all about supporting local skaters, hosting rad events, and spreading the stoke wherever we go.

So whether you're chasing that next trick or just soaking up the skate scene, swing by Beast Boy's and join the ride!</p>
        </div>
    </div>
  )
}

export default About

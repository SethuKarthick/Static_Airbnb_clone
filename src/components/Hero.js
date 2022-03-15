import React from 'react'
import '../style.css';
import photoGrid from "../images/photo-grid.png"


export default function Hero() {
  return (
    <section className='hero'>
        <img src={photoGrid} className='hero--photo'/>
        <h1 className='hero--header'>Online Experience</h1>
        <p className='hero--text'>Join unique interative activities led by 
            one of a kind hosts all without leaving home.
        </p>
    </section>
  )
}

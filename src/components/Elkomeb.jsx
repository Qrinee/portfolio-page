import Page from './Page'
import React from 'react'
import img from '../assets/ipad.png'
import video from '../assets/videos/Untitled.mp4'
export default function Elkomeb() {
  return (
    <>
        <h1 className='thin'>Elkomeb</h1>
        <p>Elkomeb Grzegorz Moskal is a company specializing in providing modern solutions in the fields of photovoltaics, air conditioning, computers, and furniture production.</p>
      <video src={video} autoPlay muted loop  className='video'></video>
      <a href='https://elkomeb.pl/' target='_blank'>
      <button className='btn'>Watch Demo</button>
      </a>




    </>

  )
}

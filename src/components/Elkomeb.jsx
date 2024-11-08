import Page from './Page'
import React, { useState } from 'react'
import img from '../assets/ipad.png'
import video from '../assets/videos/Untitled.mp4'
export default function Elkomeb() {
  const [load,setLoad] = useState(false)
  return (
    <>
        <h1 className='thin'>Elkomeb</h1>
        <p>Elkomeb Grzegorz Moskal is a company specializing in providing modern solutions in the fields of photovoltaics, air conditioning, computers, and furniture production.</p>
        <div className='load' style={{display: load ? 'block' : 'none'}}>
          <div class="loader"></div>
        </div>
        <video src={video} onLoad={() => setLoad(true)} autoPlay muted loop  className='video' style={{display: load ? 'none' : 'block'}}></video>
      <a href='https://elkomeb.pl/' target='_blank'>
      <button className='btn'>Watch Demo</button>
      </a>




    </>

  )
}

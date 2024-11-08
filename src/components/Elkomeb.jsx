import React, { useState } from 'react'
import video from '../assets/videos/Untitled.mp4'

export default function Elkomeb() {
  const [load, setLoad] = useState(false)

  const handleVideoLoad = () => {
    setLoad(true)
  }

  return (
    <>
      <h1 className='thin'>Elkomeb</h1>
      <p>Elkomeb Grzegorz Moskal is a company specializing in providing modern solutions in the fields of photovoltaics, air conditioning, computers, and furniture production.</p>
      
      <div className='load' style={{ display: load ? 'none' : 'flex' }}>
        <div className="loader"></div>
      </div>
      
      <video 
        src={video} 
        onLoadedData={handleVideoLoad} 
        autoPlay 
        muted 
        loop 
        className='video' 
        style={{ display: load ? 'block' : 'none' }}
      ></video>
      
      <a href='https://elkomeb.pl/' target='_blank' rel='noopener noreferrer'>
        <button className='btn'>Watch Demo</button>
      </a>
    </>
  )
}

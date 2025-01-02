import React, { useState } from 'react'
import video from '../assets/videos/smartni.mp4'

export default function Smartni() {
  const [load, setLoad] = useState(false)

  const handleVideoLoad = () => {
    setLoad(true)
  }

  return (
    <>
      <h1 className='thin'>Smartni</h1>
      <p>We prepare and execute electrical, Smart Home and teletechnical installations for single-family houses and apartments</p>
      
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
      
      <a href='https://smartni.com.pl/' target='_blank' rel='noopener noreferrer'>
        <button className='btn'>Watch Demo</button>
      </a>
    </>
  )
}

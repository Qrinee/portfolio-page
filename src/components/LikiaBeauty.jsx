import React, { useState } from 'react'
import video from '../assets/videos/likia.mp4'

export default function LikiaBeauty() {
  const [load, setLoad] = useState(false)

  const handleVideoLoad = () => {
    setLoad(true)
  }

  return (
    <>
      <h1 className='thin'>Likia Beauty</h1>
      <p>Likia Beauty specializes in skincare products designed to simplify your daily routine while fulfilling all your skincare needs and expectations. Our mission is to provide a comprehensive experience that engages multiple senses and takes you on a journey with our products’ unique scents.</p>
      
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
      
      <a href='https://likiabeauty.com/' target='_blank' rel='noopener noreferrer'>
        <button className='btn'>Watch Demo</button>
      </a>
    </>
  )
}

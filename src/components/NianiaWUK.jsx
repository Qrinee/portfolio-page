import React, { useState } from 'react'
import video from '../assets/videos/niania.mp4'

export default function NianiawUK() {
  const [load, setLoad] = useState(false)

  const handleVideoLoad = () => {
    setLoad(true)
  }

  return (
    <>
      <h1 className='thin'>Niania W UK</h1>
      <p>Are you thinking about a career change, looking for the perfect job for yourself, or do you love children and enjoy taking care of them? Maybe you're already caring for children. Many of you may have faced rejection when applying for childcare jobs because you weren’t formally registered. Our services will help you complete the necessary training in Polish, obtain certificates in English, and formally register as a nanny.</p>
      
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
      
      <a href='https://nianiawuk.co.uk/' target='_blank' rel='noopener noreferrer'>
        <button className='btn'>Watch Demo</button>
      </a>
    </>
  )
}

import React from 'react'
import Page from './Page'
import video from '../assets/videos/likia.mp4'
export default function LikiaBeauty() {
  return (
    <>
        <h1 className='thin'>Likia Beauty</h1>
        <p>Likia Beauty specializes in skincare products designed to simplify your daily routine while fulfilling all your skincare needs and expectations. Our mission is to provide a comprehensive experience that engages multiple senses and takes you on a journey with our products’ unique scents.</p>
        <video src={video} autoPlay muted loop  className='video'></video>
      <a href='https://likiabeauty.com/' target='_blank'>
      <button className='btn'>Watch Demo</button>
      </a>

    </>
  )
}

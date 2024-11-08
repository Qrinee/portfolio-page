import React, { useState } from 'react'
import video from '../assets/videos/niania.mp4'
export default function NianiawUK() {
    const [load, setLoad] = useState(false)
  return (
    <>
    <h1 className='thin'>Niania W UK</h1>
    <p>Are you thinking about a career change, looking for the perfect job for yourself, or do you love children and enjoy taking care of them? Maybe you're already caring for children. Many of you may have faced rejection when applying for childcare jobs because you weren’t formally registered. Our services will help you complete the necessary training in Polish, obtain certificates in English, and formally register as a nanny.</p>
    <div className='load' style={{display: load ? 'block' : 'none'}}>
          <div class="loader"></div>
        </div>
        <video src={video} onLoad={() => setLoad(true)} autoPlay muted loop  className='video' style={{display: load ? 'none' : 'block'}}></video>
  <a href='https://nianiawuk.co.uk/' target='_blank'>
  <button className='btn'>Watch Demo</button>
  </a>
  </>
  )
}

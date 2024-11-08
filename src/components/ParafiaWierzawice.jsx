import React, { useState } from 'react'
import Page from './Page'
import video from '../assets/videos/parafia.mp4'
export default function ParafiaWierzawice() {
  const [load, setLoad] = useState(false)
  return (
    <>
        <h1 className='thin'>Parafia Wierzawice</h1>
        <p>Parafia Matki Bożej Wspomożenia Wiernych w Wierzawicach – Roman Catholic parish located in the Archdiocese of Przemyśl, within the Leżajsk I Deanery.</p>
        <div className='load' style={{display: load ? 'block' : 'none'}}>
          <div class="loader"></div>
        </div>
        <video src={video} onLoad={() => setLoad(true)} autoPlay muted loop  className='video' style={{display: load ? 'none' : 'block'}}></video>
        <a href='https://wierzawice.przemyska.pl/' target='_blank'>
            <button className='btn'>Watch Demo</button>
        </a>

    </>

  )
}

import Page from './Page'
import React from 'react'
import img from '../assets/ipad.png'
import video from '../assets/videos/Untitled.mp4'
export default function Elkomeb() {
  return (
    <>
        <h1 className='thin'>Elkomeb</h1>
        <p>Elkomeb Grzegorz Moskal to firma, która specjalizuje się w dostarczaniu nowoczesnych rozwiązań z zakresu fotowoltaiki, klimatyzacji, komputerów oraz produkcji mebli.</p>
      <video src={video} autoPlay muted loop  className='video'></video>
      <a href='https://elkomeb.pl/' target='_blank'>
      <button className='btn'>Watch Demo</button>
      </a>


    </>

  )
}

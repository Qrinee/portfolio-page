import React from 'react'
import Page from './Page'
import video from '../assets/videos/parafia.mp4'
export default function ParafiaWierzawice() {
  return (
    <>
        <h1 className='thin'>Parafia Wierzawice</h1>
        <p>Parafia Matki Bożej Wspomożenia Wiernych w Wierzawicach – parafia rzymskokatolicka, znajdująca się w archidiecezji przemyskiej, w dekanacie Leżajsk I.</p>
        <video src={video} autoPlay muted loop  className='video'></video>
        <a href='https://wierzawice.przemyska.pl/' target='_blank'>
            <button className='btn'>Watch Demo</button>
        </a>

    </>

  )
}

import React from 'react'
import video from '../assets/videos/niania.mp4'
export default function NianiawUK() {
  return (
    <>
    <h1 className='thin'>Niania W UK</h1>
    <p>Myślisz o zmianie kariery, szukasz idelanej pracy dla siebie, kochasz dzieci i opiekowac sie nimi, A moze juz opiekujesz sie dziecmi. Zapewne wielu z was opiekujac sie dziecmi lub przyjujac nowe oferty otrzymali odmowe bo nie byliscie formalnie zarejestrowani. Nasze uslugi pomoga wam w jezyku polskim przejsc odpowiednie szkolenia i uzyskac certifikaty w jezyku angielskim oraz formalnie sie zarejestrowac jako nianie.</p>
    <video src={video} autoPlay muted loop  className='video'></video>
  <a href='https://nianiawuk.co.uk/' target='_blank'>
  <button className='btn'>Watch Demo</button>
  </a>
  </>
  )
}

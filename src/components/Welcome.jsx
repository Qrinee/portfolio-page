import React from 'react'
import logo from '../assets/icon.png'

export default function Welcome() {
  return (
    <div className='flex'>
    <div>
      <img src={logo} width={100} className='logo'  />
    </div>
    <div>
      <div>Krystian Niemczyk</div>
      <div className='state'>Wordpress & React developer</div>
      <div className='socials'>
        <div className='social'><a href='https://read.cv/qrin'>About</a></div>
        <div className='social'><a href='mailto:kajman5021@gmail.com'>Email</a></div>
        <div className='social'><a href='https://github.com/Qrinee' target='_blank'>Github</a></div>
        <div className='social'><a href='https://www.facebook.com/krxxxian/' target='_blank'>Facebook</a></div>
      </div>
    </div>
  </div>
  )
}

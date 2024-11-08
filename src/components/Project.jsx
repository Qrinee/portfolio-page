import React from 'react'

export default function Project({name, year, icon}) {
  return (
    <a href={'/' + name.replaceAll(' ', '').toLowerCase()}>
        <div className='project'>
        <div style={{display: 'flex', alignItems: 'center'}}><img style={{marginRight: 10}} src={icon} height={20} />{name}</div> 
        <div className='year'>{year}</div>
        </div>
    </a>
  )
}

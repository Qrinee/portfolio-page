import React from 'react'
import Project from './Project'
import logo from '../assets/icon.png'
import smartni from '../assets/smartni.png'
import elkomeb from '../assets/elkomeb.png'
import parafia from '../assets/parafia.png'
import likia from '../assets/likia.png'
import mebloza from '../assets/mebloza.png'
import niania from '../assets/1.webp'
import MobileMenu from './MobileMenu'
export default function Page({children}) {
  return (
    <div className='app'>
        <MobileMenu/>
      <nav className='menu'>
        <div className='projects'>

            <a href={'/'}>
                <div className='project'>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={logo} width={25}/>    
                        <b style={{marginLeft: 10}}>Home</b>
            </div> 
                <div className='year'></div>
                </div>
            </a>
            <div className='text-projects'>Projects:</div>
            <Project name={"Smartni"} year={"2025"} icon={smartni}/>
            <Project name={"Mebloza"} year={"2024"} icon={mebloza} />
            <Project name={"Elkomeb"} year={"2024"} icon={elkomeb} />
            <Project name={"Parafia Wierzawice"} year={"2024"} icon={parafia} />
            <Project name={"Likia Beauty"} year={"2023"} icon={likia} />
            <Project name={"Niania w UK"} year={"2022"} icon={niania} />

        </div>
      </nav>
      <div className='main-block'>
            {children}
      </div>
      
    </div>
  )
}

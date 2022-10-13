import React from 'react';
import './header.css';
import Me from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <section className='home container' id="home">
      <div className="intro">
        <img src={Me} alt="" className='home__img' />
        <h1 className="home__name">Sanchez Braian Ariel</h1>
        <span className='home__subtitle'>i'm Front-end developer</span>

        <HeaderSocials />

        <a href="#contact" className='button'>Hire me</a>

      </div>
    </section>
  )
}

export default Header
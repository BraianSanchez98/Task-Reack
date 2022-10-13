import React from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
  <header className="header">
    <a href="index.html" className='nav__logo'>SB</a>
    <nav className="nav">
        <div className="nav__menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-home nav__icon"></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user-circle nav__icon"></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#resume" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-envelope-check nav__icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
  )
}

export default SideBar
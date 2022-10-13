import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Porfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Sidebar from './components/sidebar/SideBar';

import './App.css';

function App() {
  return (
    <>
      <Sidebar />
        <main className='main'>
          <Header />
          <About />
          <Resume />
          <Porfolio />
          <Contact />
        </main>
    </>
  )
}

export default App

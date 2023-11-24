import React from 'react';
import Navmenu from '../components/General/Nav';
import Header from '../components/General/Header';
import Slogan from '../components/Home/Slogan';
import About from '../components/Home/About';
import Value from '../components/Home/Value';
import Skills from '../components/Home/Skills';
import Logo from '../components/Home/Logo';
import Consult from '../components/Home/Consult';

import Country from '../components/General/Country';
import Footer from '../components/General/Footer';
// import '../css/Home.css';

function Home() {
  return (
    <div className="home">
        <Header />
        <Navmenu />
        <Slogan />
        <About />
        <Value />
        <Skills />
        <Logo />
        <Consult />
        <Footer showBorderTop={false} />
        <Country />
    </div>
  );
}

export default Home;

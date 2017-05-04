import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Hero from '../hero/hero';
import Footer from '../footer/footer';
import About1 from '../about_1/about_1';
import About2 from '../about_2/about_2';
import About3 from '../about_3/about_3';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About1 />
      <About2 />
      <About3 />
      <Footer />
    </div>
  );
};

export default Home;

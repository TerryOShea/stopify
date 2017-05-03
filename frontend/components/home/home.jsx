import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Hero from '../hero/hero';
import Footer from '../footer/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;

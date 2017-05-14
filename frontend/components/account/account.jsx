import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Hero from './hero/hero';
import Sidebar from './sidebar/sidebar';

const Account = () => (
  <div>
    <Header />
    <section className="account-main">
      <Hero />
      <Sidebar />
    </section>
    <Footer />
  </div>
);

export default Account;

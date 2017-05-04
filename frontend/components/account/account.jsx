import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Hero from './hero/hero';

const Account = () => (
  <div>
    <Header />
    <section className="account-main">
      <Hero />
    </section>
    <Footer />
  </div>
);

export default Account;

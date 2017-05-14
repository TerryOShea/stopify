import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Hero from './hero/hero';
import Main from './main/main';

const Account = () => (
  <div>
    <Header />
    <section className="account-page">
      <Hero />
      <Main />
    </section>
    <Footer />
  </div>
);

export default Account;

import React from 'react';
import { Link } from 'react-router-dom';

const About3 = () => (
  <section className="about-3">
    <section className="about-3-svg">svg here</section>
    <h2>One account. Listen everywhere.</h2>
    <ul className="about-3-list">
      <li>Mobile</li>
      <li>-</li>
      <li>Computer</li>
      <li>-</li>
      <li>Tablet</li>
      <li>-</li>
      <li>Car</li>
      <li>-</li>
      <li>Speaker</li>
      <li>-</li>
      <li><Link to="/">Playstation&reg;</Link></li>
      <li>-</li>
      <li>TV</li>
      <li>-</li>
      <li><Link to="/">Web Player</Link></li>
    </ul>
  </section>
);

export default About3;

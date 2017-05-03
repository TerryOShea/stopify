import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <section className="footer-top">
      <section className="footer-links">
        <p>Stopify</p>
        <ul>
          <li className="list-title">Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>News</li>
        </ul>
        <ul>
          <li className="list-title">Communities</li>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Brands</li>
        </ul>
        <ul>
          <li className="list-title">Useful Links</li>
          <li>Help</li>
          <li>Gift</li>
          <li>Web Player</li>
        </ul>
      </section>

      <section className="footer-social-media">
        <div className="footer-social-media-btn"><i className="fa fa-instagram"></i></div>
        <div className="footer-social-media-btn"><i className="fa fa-twitter"></i></div>
        <div className="footer-social-media-btn"><i className="fa fa-facebook"></i></div>
      </section>
    </section>
    <section className="footer-bottom">
      <ul className="footer-bottom-left">
        <li>Legal</li>
        <li>Privacy</li>
        <li>Cookies</li>
        <li>About Ads</li>
      </ul>
      <section className="footer-bottom-right">
        <p>USA</p>
        <p>&copy; 2017 Stopify BAAA</p>
      </section>
    </section>
  </footer>
);

export default Footer;

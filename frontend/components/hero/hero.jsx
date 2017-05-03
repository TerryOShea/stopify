import React from 'react';
import { Link } from 'react-router-dom';

class Hero extends React.Component {
  constructor() {
    super();
    this.updateSlide = this.updateSlide.bind(this);
    this.state = {
      slide: 0,
      previousSlide: 0
    }
  }

  shiftSlide(direction) {
    return e => {
      if (direction === 'left') {
        const newSlide = this.state.slide - 1
        this.updateSlide(newSlide < 0 ? 3 : newSlide);
      } else {
        this.updateSlide((this.state.slide + 1) % 4);
      }
    }
  }

  updateSlide(i) {
    this.setState({ slide: i, previousSlide: this.state.slide });
  }

  render() {
    const { slide, previousSlide } = this.state;

    const sliderButtons = [0, 1, 2, 3].map(i => (
      <li
        id={i}
        key={i}
        className={i === slide ? "selected" : ""}
        onClick={e => this.updateSlide(i)}></li>
    ));

    const slideClasses = [0, 1, 2, 3].map(i => {
      let slideAttr;
      if (i === slide) slideAttr = "shown";
      else if (i < slide || (slide === 0 && i === 3)) slideAttr = "left";
      else slideAttr = "right";
      const showTransition = i === slide || i === previousSlide ? " slide-transition" : "";
      return `slide slide-${i} ${slideAttr}-slide${showTransition}`;
    });

    return (
      <section className="hero-gradient">
        <section className="slider">
          <div className="slider-left-arrow" onClick={this.shiftSlide('left')}>&lt;</div>
          <div className="slider-right-arrow" onClick={this.shiftSlide('right')}>&gt;</div>

          <section className={slideClasses[0]}>
            <h2>Music for anybody.</h2>
            <section className="hero-btns">
              <button type="button" className="stopify-primary-btn">Get Stopify Free</button>
              <button type="button" className="stopify-secondary-btn">Get Stopify Premium</button>
            </section>
          </section>

          <section className={slideClasses[1]}>
            <h2>Premium for your whole family.</h2>
            <h2>Just $14.99.</h2>
            <section className="hero-btns">
              <button type="button" className="stopify-primary-btn">Learn More</button>
            </section>
          </section>

          <section className={slideClasses[2]}>
            <h2>Students get 50% off Premium.</h2>
            <section className="hero-btns">
              <button type="button" className="stopify-primary-btn">Learn More</button>
            </section>
          </section>

          <section className={slideClasses[3]}>
            <h2>Play Stopify on PlayStation&reg;.</h2>
            <section className="hero-btns">
              <button type="button" className="stopify-primary-btn">Learn More</button>
            </section>
          </section>
        </section>

        <ul className="slider-btns">
          {sliderButtons}
        </ul>

        <section className="stopify-learn">
          <h4>Learn About Stopify</h4>
          <div className="learn-arrows">&raquo;</div>
        </section>
      </section>
    )
  }
}

export default Hero;

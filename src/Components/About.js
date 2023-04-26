import React from 'react'
import Explore from '../images/Explore.jpg'
import Navigation from '../images/Navigation.PNG'
import Satellite from '../images/Satellite.PNG'
import Carousel from 'react-bootstrap/Carousel';


export default function About() {

  return (
    <div className='about' >
      <h1>What Do We Offer?</h1>
      <hr/>
      <Carousel>
        <Carousel.Item>
          <img
            className="aboutPic"
            src={Explore}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Explore</h3>
            <p>You can explore all around the world through our Maps.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="aboutPic"
            src={Navigation}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Find Directions</h3>
            <p>Get directions between two places</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="aboutPic"
            src={Satellite}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Satellite View</h3>
            <p>We offer High resolution satellite view</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

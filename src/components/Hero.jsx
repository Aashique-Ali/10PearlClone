import React from "react"
import { useState, useEffect } from "react"
import "./hero.css"
import fintech from "../images/fintech_ticker.png"
import ticker from "../images/AI_ticker.png"
import { GoArrowDown } from "react-icons/go"

const Hero = () => {
  const images = [fintech, ticker]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000) // Change image every 3 seconds

    return () => clearInterval(timer) // Cleanup on component unmount
  }, [])

  return (
    <>
      <div className="hero">
        <div className="hero-first">
          <h1>Reimagine. Deliver. Repeat.</h1>
        </div>
        <div className="hero-second">
          <p>
            Global digital partner helping businesses transform, create new
            products and scale teams.
          </p>
        </div>
        <p style={{ color: "greenyellow" }}>
          AI is embedded in everything we do.
        </p>
        <div className="btn">
          <button>Let`s connect</button>
        </div>
        <div className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="bar">
        <ul>
          <li>
            OUR CLIENTS
            <GoArrowDown />
          </li>
          <li>
            OUR TEAM <GoArrowDown />
          </li>
          <li>
            OUR STRENGTHS <GoArrowDown />
          </li>
          <li>
            INSIGHTS <GoArrowDown />
          </li>
          <li>
            CASE STUDIES <GoArrowDown />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Hero

import React from "react"
import client from "../images/client.jpg"
import client1 from "../images/client1.png"
import client2 from "../images/client2.png"
import client3 from "../images/client3.png"
import image1 from "../images/mobile-bg.webp"
import "./client.css"

const Client = () => {
  const slides = [client1, client2, client3]
  return (
    <>
      <div className="clientContainer">
        <h2>You are in great company</h2>
        <div className="imgContainer">
          {slides.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
      <div className="team">
        <h3>Global team of creators and innovators</h3>
        <img src={image1} alt="" />
      </div>
    </>
  )
}

export default Client

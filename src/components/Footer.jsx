import React from "react"
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footer-first">
          <div>
            <img src={logo} alt="" />
            <p>
              10Pearls is an award-winning digital development company, helping
              businesses with product design, development, and technology
              acceleration.
            </p>
          </div>
        </div>
        <div className="ul-container">
          <ul className="footer-last">
            <li>company</li>
            <li>services</li>
            <li>Industries</li>
          </ul>
          <ul>
            <li>Insights</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="ul-container">
          <ul className="footer-last">
            <li>USA (HQ in Wash DC)</li>
            <li>Costa Rica</li>
            <li>Pakistan</li>
          </ul>
          <ul>
            <li>Columbia</li>
            <li>Peru</li>
            <li>UK</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React, { useState } from "react"
import { LuBold, LuSearch } from "react-icons/lu"
import { PiCaretRightBold } from "react-icons/pi"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import "./navbar.css"
const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="list">
        <ul className={nav ? "show" : ""}>
          <li>
            <Link>
              Company
              <span>
                <PiCaretRightBold />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              Services
              <span>
                <PiCaretRightBold />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              Platforms
              <span>
                <PiCaretRightBold />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              Industries
              <span>
                <PiCaretRightBold />
              </span>
            </Link>
          </li>
          <li>
            <Link>Insights</Link>
          </li>
          <li>
            <Link>
              Careers
              <span>
                <PiCaretRightBold />
              </span>
            </Link>
          </li>
          <li>Contact</li>
        </ul>
        <LuSearch size={20} fontWeight={800} />
        <div className="hamburger-menu" onClick={() => setNav(!nav)}>
          {nav ? (
            <IoClose size={30} />
          ) : (
            <>
              <div className="line line1"></div>
              <div className="line line2"></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

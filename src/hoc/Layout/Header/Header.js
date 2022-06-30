import React from "react"
import { Link } from "react-router-dom"
import yerer from "./yerer.png"
import "./Header.css"

const Header = () => {
  const logo = () => (
    <div className='header-logo'>
      <Link to='/'>
        <img src={yerer} alt='yerer-logo' />
      </Link>
    </div>
  )

  const headText = () => (
    <div className='header-tx'>
      <div>"  Let Us See What We Could Do For You "</div>
    </div>
  )

  return (
    <div className='header-container'>
      <div>{logo()}</div>
      <div>{headText()}</div>
    </div>
  )
}

export default Header

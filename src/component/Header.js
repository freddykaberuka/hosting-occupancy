import React from 'react'
import Search from './Search'
import { Link } from "react-router-dom";

const Header=() =>{
  return (
    <>
    <div className="top-header">
        <div className="logo">
            <h2>SMART HOST</h2>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="#">Guest 1</Link>
            </li>
            <li>
              |
            </li>
            <li>
              <Link to="#">Compain</Link>
              </li>
          </ul>
        </div>
    </div>
    < Search />
    </>
  )
}

export default Header
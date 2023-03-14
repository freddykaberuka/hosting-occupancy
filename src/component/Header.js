import React from 'react'
import Search from './Search'

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
              Guest 1
            </li>
            <li>Compain</li>
          </ul>
        </div>
    </div>
    < Search />
    </>
  )
}

export default Header
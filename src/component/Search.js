import React from 'react'

const Search=()=> {
  return (
    <div className="top-search">
        <div className="buttons">
            <button className="all-button">all</button>
            <button className="economy-button">Economy</button>
            <button className="premium-button">Premium</button>
        </div>
        <div  className="search">
            <input type="text" placeholder="Search here"/>
        </div>
    </div>
  )
}

export default Search
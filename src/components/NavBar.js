import React from 'react'

function NavBar ({totalCounters}) {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand" style={{fontWeight:'bold'}}>
          <i className="fa fa-shopping-cart fa-lg m-2"/>
          <span
            className="badge rounded-pill text-bg-primary"
            style={{ width: 60}}>
            {totalCounters}
            </span> Items
        </div>
      </nav>
    )
  }
  
export default NavBar

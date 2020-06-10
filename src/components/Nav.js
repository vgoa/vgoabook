import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

function Nav() {

  const style = {
    color:'red',
    height: '100px',
  }

  return (
      <div style={style}>
        <header className="App-header">
          <nav>
            <ul>
            <li>
                <Link to="/">HOME</Link>
              </li>  
              <li>
                <Link to="/Contacto">CONTACTO</Link>
              </li>  
            </ul>  
          </nav>  
        </header>
      </div>
  )
}

export default Nav

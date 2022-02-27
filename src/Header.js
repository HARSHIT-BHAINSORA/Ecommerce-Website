// Header Component

import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
       <img src = "https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"></img>


       <div className = "header__search">
           <input
           className='header__searchInput' type = "text"/>
            {/* logo */}
       </div>
    </div>
  )
}

export default Header
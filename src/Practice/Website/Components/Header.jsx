import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
            <a className='navbar-brand' href="/">Restarent</a>
            <button className='btn bg-primary'>Orders<span className='badge bg-light'>0</span></button>
        </nav>
    </div>
  )
}

export default Header
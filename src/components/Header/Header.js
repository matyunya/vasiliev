import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    {/*<IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>*/}
    {' · '}
    <h1><Link to='/play' activeClassName='route--active'>
      ▶
    </Link></h1>
  </div>
)

export default Header

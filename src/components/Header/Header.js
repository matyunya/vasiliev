import React from 'react'
import { Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1><Link to='/play'>
      ▶
    </Link></h1>
  </div>
)

export default Header

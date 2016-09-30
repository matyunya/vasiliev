import React from 'react'
import { Link } from 'react-router'
import './Header.scss'

export const Header = () => (
    <h1>
        <Link to='/play'>
            ▶
        </Link>
    </h1>
)

export default Header

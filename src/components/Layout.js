import { Link } from 'gatsby'
import React from 'react'

const Layout = ({ pageTitle, pageHeading, children }) => {
    return (
        <>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <h1>{pageHeading}</h1>
            {children}
        </>
    )
}

export default Layout

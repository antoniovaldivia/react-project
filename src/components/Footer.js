import React from "react"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer yellow-background">
      <p>&copy; <Link to="/">DLOREAN</Link></p>
      <p>W3C Validated</p>
    </footer>
  )
}

export default Footer
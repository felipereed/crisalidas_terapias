import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuList({ closeDropdown }) {
  return (
    <ul>
      <li><Link className="header-dropdown-menu-links" to="/" onClick={closeDropdown}>INÍCIO</Link></li>
      <li><Link className="header-dropdown-menu-links" to="/sobre-mim" onClick={closeDropdown}>SOBRE MIM</Link></li>
      <li><a className="header-dropdown-menu-links" href="#home-services" onClick={closeDropdown}>SERVIÇOS</a></li>
      <li><Link className="header-dropdown-menu-links" to="/blog" onClick={closeDropdown}>BLOG</Link></li>
      <li><a className="header-dropdown-menu-links" href='#home-contact' onClick={closeDropdown}>CONTATO</a></li>
    </ul>
  )
}
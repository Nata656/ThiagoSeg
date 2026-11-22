import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { services } from '../data/services'
import { site } from '../data/site'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { pathname } = useLocation()

  // Fecha os menus ao clicar em qualquer link
  const closeOnLink = (e) => {
    if (e.target.closest('a')) {
      setMenuOpen(false)
      setServicesOpen(false)
    }
  }

  // Fecha o submenu ao clicar fora dele
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const isServices = pathname.startsWith('/servicos')
  const navClass = ({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label={`${site.name} – página inicial`}>
          <Logo />
        </Link>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Menu principal" onClick={closeOnLink}>
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/quem-somos" className={navClass}>Quem Somos</NavLink>
          <NavLink to="/gestao-integrada" className={navClass}>Gestão Integrada</NavLink>

          <div className={`nav__dropdown${servicesOpen ? ' is-open' : ''}`} ref={dropdownRef}>
            <button
              className={`nav__link nav__dropdown-btn${isServices ? ' is-active' : ''}`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Serviços <FaChevronDown className="nav__chevron" />
            </button>
            <ul className="nav__submenu">
              {services.map((s) => (
                <li key={s.slug}>
                  <NavLink to={`/servicos/${s.slug}`} className="nav__sublink">
                    {s.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/contato" className={navClass}>Contato</NavLink>

          <a href={site.clientPortalUrl} className="btn header__cta">
            Portal do Cliente
          </a>
        </nav>
      </div>
    </header>
  )
}

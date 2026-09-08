import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Profil' },
  { to: '/programs', label: 'Program' },
  { to: '/events', label: 'Kegiatan' },
  { to: '/donation', label: 'Donasi' },
  { to: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path
                d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="navbar__logo-text">
            <strong>Al-Manshur</strong>
            <span>Islamic Center · Sumpiuh</span>
          </span>
        </NavLink>

        <nav className="navbar__pill" aria-label="Utama">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''} ${
                  link.to === '/donation' ? 'navbar__link--donate' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        <nav aria-label="Menu mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

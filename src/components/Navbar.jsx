import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const hashPrefix = pathname === '/' ? '' : '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' nav--open' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-container">
        <Link to="/" className="logo nav-brand-logo" onClick={closeMenu}>
          Ameen <span>·</span> Consultancy
        </Link>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
        <div
          className="nav-links"
          id="primary-navigation"
          role="navigation"
          aria-label="Primary"
        >
          <a href={`${hashPrefix}#about`} onClick={closeMenu}>About</a>
          <a href={`${hashPrefix}#services`} onClick={closeMenu}>Services</a>
          <a href={`${hashPrefix}#team`} onClick={closeMenu}>Partners</a>
          <a href={`${hashPrefix}#industries`} onClick={closeMenu}>Sectors</a>
          <a href={`${hashPrefix}#analytics`} onClick={closeMenu}>Analytics</a>
          <a href={`${hashPrefix}#events`} onClick={closeMenu}>Events</a>
          <Link to="/careers" onClick={closeMenu}>Careers</Link>
          <a
            href={`${hashPrefix}#contact`}
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            className="nav-mobile-backdrop"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

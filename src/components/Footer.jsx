import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  const p = pathname === '/' ? '' : '/';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              AMEEN <span style={{ color: 'var(--accent)' }}>·</span> CONSULTANCY
            </Link>
            <p>
              Executive advisory from Tanzania for strategy, finance, and institutional legal risk.
            </p>
          </div>

          <nav className="footer-pairs" aria-label="Footer">
            <Link to="/">Company</Link>
            <a href={`${p}#about`}>About</a>
            <a href={`${p}#team`}>Partners</a>
            <a href={`${p}#industries`}>Sectors</a>
            <a href={`${p}#analytics`}>Analytics</a>
            <a href={`${p}#events`}>Events</a>
            <Link to="/careers">Careers</Link>
            <a href={`${p}#contact`}>Connect</a>
            <a href="#">LinkedIn</a>
            <a href="#">Newsletter</a>
            <a href="mailto:solutions@ameen.com">Email Us</a>
            <a href={`${p}#contact`}>Contact</a>
          </nav>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ameen Consultancy International. All rights reserved.</p>
          <span>Strategic Excellence · Tactical Integrity</span>
        </div>
      </div>
    </footer>
  );
}

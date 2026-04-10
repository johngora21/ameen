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
              Tanzania&apos;s leading executive advisory house—specialising in high-stakes
              strategy, financial engineering, and institutional legal security for
              global enterprises.
            </p>
          </div>

          <div className="footer-col">
            <h5>Solutions</h5>
            <a href={`${p}#services`}>Finance Solutions</a>
            <a href={`${p}#services`}>Tax Compliance</a>
            <a href={`${p}#services`}>Legal Advisory</a>
            <a href={`${p}#services`}>Business Solutions</a>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <a href={`${p}#about`}>About</a>
            <a href={`${p}#team`}>Partners</a>
            <a href={`${p}#industries`}>Sectors</a>
            <a href={`${p}#analytics`}>Analytics</a>
            <a href={`${p}#events`}>Events</a>
            <Link to="/careers">Careers</Link>
          </div>

          <div className="footer-col">
            <h5>Connect</h5>
            <a href="#">LinkedIn</a>
            <a href="#">Newsletter</a>
            <a href="mailto:solutions@ameen.com">Email Us</a>
            <a href={`${p}#contact`}>Contact</a>
          </div>
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

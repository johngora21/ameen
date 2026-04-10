import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { insightPublications } from './data/insightPublications';
import {
  BarChart4, Gavel, FileBadge, Cpu,
  Phone, Mail, Globe, MapPin,
  ArrowRight, ArrowUpRight, ChevronRight,
  Users, Shield, X
} from 'lucide-react';

/** Alternating section titles: About=left, Services=center, Industries=left, Team=center, … */
function sectionHeadingAlign(i) {
  return i % 2 === 0 ? 'left' : 'center';
}

/** Initials from partner display name (no stock photos). */
function partnerInitials(fullName) {
  const main = fullName.split(',')[0].trim();
  const words = main.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  return main.slice(0, 2).toUpperCase();
}

/** Sector / event cards: navy–accent gradients only (no external imagery). */
const sectorPortalGradients = [
  'linear-gradient(155deg, #0f2847 0%, #1a4a6e 42%, #0d1f3c 100%)',
  'linear-gradient(155deg, #0c2438 0%, #14532d 45%, #0d1f3c 100%)',
  'linear-gradient(155deg, #1a1f2e 0%, #3d2c1e 48%, #0d1f3c 100%)',
  'linear-gradient(155deg, #0f2847 0%, #1e3a5f 50%, #152a45 100%)',
  'linear-gradient(155deg, #0d1f3c 0%, #1e3a8a 45%, #0f2847 100%)',
  'linear-gradient(155deg, #0f2847 0%, #0e4a5c 48%, #0d1f3c 100%)',
  'linear-gradient(155deg, #1e1b2e 0%, #4a3728 45%, #0d1f3c 100%)',
  'linear-gradient(155deg, #0d2838 0%, #164e63 50%, #0d1f3c 100%)',
  'linear-gradient(155deg, #0f172a 0%, #312e81 48%, #0d1f3c 100%)',
  'linear-gradient(155deg, #14532d 0%, #0f2847 50%, #0d1f3c 100%)',
  'linear-gradient(155deg, #1e293b 0%, #4c1d95 42%, #0d1f3c 100%)',
  'linear-gradient(155deg, #292524 0%, #431407 45%, #0d1f3c 100%)',
];

const eventPortalGradients = [
  'linear-gradient(160deg, #0d1f3c 0%, #1e3a5f 40%, #0f2847 100%)',
  'linear-gradient(160deg, #0f2847 0%, #134e4a 45%, #0d1f3c 100%)',
  'linear-gradient(160deg, #1e1b4b 0%, #312e81 48%, #0d1f3c 100%)',
  'linear-gradient(160deg, #0c4a6e 0%, #0d1f3c 50%, #0f2847 100%)',
  'linear-gradient(160deg, #422006 0%, #0d1f3c 45%, #1e3a5f 100%)',
  'linear-gradient(160deg, #134e4a 0%, #0f2847 48%, #0d1f3c 100%)',
  'linear-gradient(160deg, #312e81 0%, #0d1f3c 50%, #1e3a8a 100%)',
  'linear-gradient(160deg, #14532d 0%, #0d1f3c 42%, #164e63 100%)',
  'linear-gradient(160deg, #4c1d95 0%, #0d1f3c 48%, #1e3a5f 100%)',
  'linear-gradient(160deg, #0f2847 0%, #854d0e 40%, #0d1f3c 100%)',
];

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

/* ─── Hero ───────────────────────────────────────────────────── */
const heroImages = ['/hero-bg.jpg'];

const Hero = () => {
  return (
    <header className="hero">
      {/* Background container */}
      <div className="hero-slider">
        <motion.img
          src={heroImages[0]}
          className="slider-img"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          alt=""
        />
      </div>

      <div className="hero-overlay" />
      <div className="hero-grain" />

      {/* Decorative dots */}
      <div className="hero-dots" aria-hidden="true">
        {[...Array(25)].map((_, i) => <span key={i} />)}
      </div>

      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming uncertainty
            <br />
            into confidence
            <br />
            <em>through integrity and innovation.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            We deliver trusted guidance that helps businesses navigate complexity and grow with confidence.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#services" className="btn btn-gold">
              Services <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-outline-white">
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-line" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>
    </header>
  );
};

/* ─── About ──────────────────────────────────────────────────── */
const stats = [
  { value: '8+', label: 'Years in practice' },
  { value: '13', label: 'Sectors served' },
  { value: '98%', label: 'Satisfaction rate' },
];

const About = () => (
  <motion.section
    id="about"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
  >
    <div className="container">
      <div className="about-split-layout">
        {/* Text block */}
        <div className="about-text-block">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className={`section-heading-block section-heading-block--${sectionHeadingAlign(0)}`}>
            <div className="eyebrow">About Us</div>
            <h2 className="section-heading-block__title">About Us</h2>
          </div>
        </motion.div>
        <motion.div className="about-para" variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>
            At Ameen Consultancy, we help businesses navigate complexity with confidence. Our expertise spans finance, tax, legal, and business solutions, ensuring strict compliance with regulatory standards. We provide trusted advisory and assurance services that deliver clarity, strengthen resilience, and support sustainable growth. Through strategic insight and reliable guidance, we empower businesses to thrive in an evolving global environment.
          </p>
        </motion.div>

        </div> {/* End text block */}

        {/* Right side image */}
        <motion.div
          className="about-image-container"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about-image about-image--brand" role="img" aria-label="Brand accent" />
        </motion.div>

        {/* Stats: left column under copy on desktop; after image on mobile */}
        <motion.div
          className="about-stats-scroll"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="region"
          aria-label="Firm highlights"
        >
          <div className="stats-strip">
            {stats.map(({ value, label }, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div> {/* End split layout */}
    </div>
  </motion.section>
);

/* ─── Services ───────────────────────────────────────────────── */
const pillars = [
  {
    Icon: BarChart4, num: '01',
    title: 'Finance Solutions',
    desc: 'Bespoke audit, accounting, and strategic M&A advisory. We provide rigorous financial intelligence and compliance for institutional entities.',
    sections: [
      {
        title: 'Accounting & Assurance',
        items: [
          'Audit & assurance (Statutory and External)',
          'Outsourced accounting & bookkeeping services',
          'Financial statement preparation & technical reporting',
          'M&A, valuation, and due diligence',
          'Technical reporting and compliance frameworks'
        ]
      }
    ]
  },
  {
    Icon: FileBadge, num: '02',
    title: 'Tax Compliance',
    desc: 'Bespoke cross-border tax optimization and efficiency auditing. We ensure institutional compliance while maximizing fiscal health and long-term viability.',
    sections: [
      {
        title: 'Core Tax Services',
        items: [
          'Tax planning for compliance with TRA regulations',
          'Filing corporate income tax (CIT), VAT, PAYE, and Withholding taxes',
          'Support with tax filing and payment requirements',
          'Maintenance of tax position summaries and deadline monitoring'
        ]
      },
      {
        title: 'Specialized Advisory',
        items: [
          'Advisory on tax incentives (Export Processing Zones / Special Economic Zones)',
          'Handling TRA audits and resolving tax disputes',
          'Guidance on local taxes (Property tax, Service levy)',
          'Tax compliance for cross-border trade (EAC and SADC regulations)'
        ]
      }
    ]
  },
  {
    Icon: Gavel, num: '03',
    title: 'Legal Advisory',
    desc: 'Global regulatory compliance, corporate governance, and complex dispute resolution frameworks for multi-national entities operating across jurisdictions.',
    sections: [
      {
        title: 'Intellectual Property & IP',
        items: [
          'Application for Registration of a Trademark',
          'Application for a Patent or Industrial Design',
          'Trademarks and business names protection'
        ]
      },
      {
        title: 'NGO & Institutional Setup',
        items: [
          'NGO structuring (Non-Governmental Organizations Act, 2002)',
          'Registration with the Registrar of NGOs',
          'Drafting constitutions and governance documents',
          'Obtaining tax-exempt status for charitable activities'
        ]
      }
    ]
  },
  {
    Icon: Cpu, num: '04',
    title: 'Business Solutions',
    desc: 'Complete business registration and operational licensing solutions. We streamline corporate setup from initial filing to full sector-specific compliance.',
    sections: [
      {
        title: 'Registration & Setup',
        items: [
          'Business structure advisory (Sole, Partnership, LLC)',
          'BRELA registration, filing and preparation of MEMART (Name search, reservation, and submission)',
          'Obtaining TIN and VAT registration with TRA',
          'Assistance with opening business bank accounts',
          'Registration with local government authorities'
        ]
      },
      {
        title: 'Digital & Systems Strategy',
        items: [
          'IT Audit & Systems Assurance',
          'Data Analytics & Business Intelligence',
          'Digital transformation (ERP, AI systems implementations)',
          'Process automation and operational scaling'
        ]
      },
      {
        title: 'Compliance Forms & Licensing',
        items: [
          'Lodge forms (Notice of change, Director particulars, Allotment of shares)',
          'Sector-specific permits and local government business licenses',
          'Health, Safety, and Environmental regulation compliance',
          'Managing renewals through BRELA and industry bodies'
        ]
      }
    ]
  }
];

const Services = ({ openModal }) => (
  <section id="services" className="section bg-soft">
    <div className="container">
      <div className={`services-header section-heading-block section-heading-block--${sectionHeadingAlign(1)}`}>
        <div className="eyebrow eyebrow--title-case">Our Professional Services</div>
        <h2>What We Offer</h2>
        <p style={{ fontSize: '1.05rem' }}>
          Integrated advisory for institutions that need depth across finance, tax, legal, and operations.
        </p>
      </div>

      <div className="services-scroll" role="region" aria-label="Service pillars">
        <div className="services-grid">
        {pillars.map(({ Icon, num, title, desc }, i) => (
          <motion.div
            key={i}
            className="service-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ cursor: 'pointer' }}
            onClick={() => openModal({ ...pillars[i], type: 'Service' })}
          >
            <div className="service-num">{num}</div>
            <div className="service-icon">
              <Icon size={26} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button className="service-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              Enquire <ArrowUpRight size={14} />
            </button>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Team ───────────────────────────────────────────────────── */
const teamColors = [
  'linear-gradient(135deg,#1e4799,#2563eb)',
  'linear-gradient(135deg,#7c3aed,#a78bfa)',
  'linear-gradient(135deg,#065f46,#10b981)',
  'linear-gradient(135deg,#9a3412,#f97316)',
];

const members = [
  { 
    name: 'Suleiman Ameen, CPA, CFE', 
    role: 'Managing Partner', 
    bio: 'A distinguished expert in statutory audit and financial investigation. As a Certified Public Accountant and Certified Fraud Examiner, he has spearheaded complex restructuring and high-stakes financial intelligence for multinational entities across East Africa and the Middle East.',
  },
  { 
    name: 'Dr. Sarah Thorne, CIA, CISA', 
    role: 'Senior Partner · Risk & Assurance', 
    bio: 'Specializing in sovereign risk and institutional resilience. With two decades of experience in the Big Four, she advises NGOs and global development agencies on internal audit frameworks and systemic project impact assessments.',
  },
  { 
    name: 'Arthur Vance, CISA, PMP', 
    role: 'Partner · Systems & Digital Strategy', 
    bio: 'Architecting digital resilience for modern enterprises. A leading Information Systems Auditor with a deep focus on ERP integrity, cybersecurity governance, and technical due diligence for cross-border M&A operations.',
  },
  { 
    name: 'Linda Kemp, CGAP, MEL', 
    role: 'Partner · Public Sector & Development', 
    bio: 'An authority on public sector capital allocation and social impact monitoring. Her global footprint includes strategic advisory for the World Bank and UN-affiliated NGOs on large-scale developmental infrastructure projects.',
  },
];

const Team = () => (
  <section id="team" className="section team-section">
    <div className="container">
      <motion.div
        className={`team-header section-heading-block section-heading-block--${sectionHeadingAlign(3)}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="eyebrow" style={{ color: 'var(--accent)' }}>
          Our team
        </div>
        <h2>Meet our Partners</h2>
        <p>
          Partners and senior specialists across audit, risk, systems, and public-sector programmes.
        </p>
      </motion.div>

      <div className="team-scroll" role="region" aria-label="Partners and team">
        <div className="team-grid">
        {members.map(({ name, role, bio }, i) => (
          <motion.div
            key={i}
            className="team-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="team-avatar">
              <span className="team-initials" style={{ background: teamColors[i % teamColors.length] }}>
                {partnerInitials(name)}
              </span>
              <div className="avatar-ring" />
            </div>
            
            <div className="team-card-content">
              <h3>{name}</h3>
              <p className="team-role">{role}</p>
              
              <p className="team-bio">{bio}</p>
              
              <div className="team-footer">
                <div className="team-social">
                  <a href="#" aria-label="Phone"><Phone size={14} /></a>
                  <a href="#" aria-label="Email"><Mail size={14} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Industries ─────────────────────────────────────────────── */
const sectors = [
  { 
    num: '01', 
    title: 'Tourism & Hospitality', 
    overview: 'Hotels, safaris, tours—arrivals, jobs, and long supply chains.',
    policy: 'Tanzania treats tourism as a strategic export: policy pushes higher quality grades, visitor safety, and sustainable carrying capacity rather than volume alone. TTB steers national promotion and operator standards; TALA and TFDA align licensing with health and product integrity. Investment incentives and EAC travel integration favour upgraded inventory and regional circuits.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Hospitality Strategy</h4>
        <ul class="modal-bullet-list">
          <li>Hotel And Lodge Licensing (TALA)</li>
          <li>Tour Operator Permits (TTB)</li>
          <li>Tourism Board Registration (TTB)</li>
          <li>Health And Safety Compliance (TFDA)</li>
          <li>Staff Training Documentation</li>
          <li>Tourism Investment Advisory</li>
          <li>Industry-Specific Tax Guidance (TRA)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">TTB</span>
          <span class="reg-label">TALA</span>
          <span class="reg-label">TFDA</span>
          <span class="reg-label">TRA</span>
        </div>
      </div>
    `,
    Icon: Globe
  },
  { 
    num: '02', 
    title: 'Renewable Energy', 
    overview: 'Grid and off-grid power for industry, cities, and rural areas.',
    policy: 'National policy links electrification targets to private participation: MEM sets sector direction; EWURA regulates tariffs and utility interfaces; REA prioritises rural access; NEMC embeds environmental safeguards in new capacity. The thrust is reliable supply and cleaner additions where procurement and PPAs are credible.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Sustainable Energy</h4>
        <ul class="modal-bullet-list">
          <li>Solar Project Permits (EWURA)</li>
          <li>Wind Farm Development (EWURA, TANESCO)</li>
          <li>Geothermal Exploration Rights (MEM)</li>
          <li>Environmental Impact Assessments (NEMC)</li>
          <li>Green Energy Certifications</li>
          <li>Power Purchase Agreements (TANESCO)</li>
          <li>Renewable Energy Compliance (REA)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">EWURA</span>
          <span class="reg-label">TANESCO</span>
          <span class="reg-label">MEM</span>
          <span class="reg-label">REA</span>
          <span class="reg-label">NEMC</span>
        </div>
      </div>
    `,
    Icon: Cpu
  },
  { 
    num: '03', 
    title: 'Construction & Real Estate', 
    overview: 'Housing, offices, and civil infrastructure that shape cities.',
    policy: 'Urbanisation and housing deficits keep construction on the policy agenda: municipalities enforce planning and permits; MLHHSD frames housing supply; large works face NEMC scrutiny. PPP and mortgage-market reforms influence how projects are financed and phased.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Infrastructure</h4>
        <ul class="modal-bullet-list">
          <li>Building Permits (CRB)</li>
          <li>Construction Licenses (AQRB)</li>
          <li>Property Development Compliance (MLHHSD)</li>
          <li>Safety Certifications (OSHA)</li>
          <li>Environmental Clearances (NEMC)</li>
          <li>Urban Planning Compliance</li>
          <li>Real Estate Regulations (BRELA)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">CRB</span>
          <span class="reg-label">AQRB</span>
          <span class="reg-label">MLHHSD</span>
          <span class="reg-label">OSHA</span>
        </div>
      </div>
    `,
    Icon: BarChart4
  },
  { 
    num: '04', 
    title: 'Transportation & Logistics', 
    overview: 'Road, sea, and air—fleets, ports, freight, and warehousing.',
    policy: 'Policy emphasises corridor efficiency and port throughput under EAC integration. SUMATRA, TPA, and TASAC divide surface and maritime oversight; TRA customs align with the customs union. The bet is on faster transit, safer fleets, and lower logistics costs for regional trade.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Logistics Strategy</h4>
        <ul class="modal-bullet-list">
          <li>Transport Licenses (SUMATRA)</li>
          <li>Fleet Management Compliance (TPA)</li>
          <li>Logistics Permits (TASAC)</li>
          <li>Cross-Border Regulations (TRA)</li>
          <li>Safety Standards (SUMATRA)</li>
          <li>Route Optimization</li>
          <li>Customs Documentation (TRA)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">SUMATRA</span>
          <span class="reg-label">TPA</span>
          <span class="reg-label">TASAC</span>
          <span class="reg-label">TRA</span>
        </div>
      </div>
    `,
    Icon: Globe
  },
  { 
    num: '05', 
    title: 'Finance', 
    overview: 'Banks, insurance, markets, and payments for households and firms.',
    policy: 'BOT anchors monetary and banking stability; CMSA deepens market transparency; TIRA opens insurance in stages; FIU aligns AML/CFT with regional peers. Inclusion and digital channels are explicit policy goals—supervision is tightening rather than retreating.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Financial Services</h4>
        <ul class="modal-bullet-list">
          <li>Insurance Permits (TIRA)</li>
          <li>Microfinance Registration (BOT)</li>
          <li>Regulatory Compliance (CMSA, BOT)</li>
          <li>Risk Management Frameworks</li>
          <li>Financial Reporting Standards</li>
          <li>Anti-Money Laundering Compliance (FIU)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">BOT</span>
          <span class="reg-label">TIRA</span>
          <span class="reg-label">CMSA</span>
          <span class="reg-label">FIU</span>
        </div>
      </div>
    `,
    Icon: BarChart4
  },
  { 
    num: '06', 
    title: 'Import/Export', 
    overview: 'Import and export—customs, standards, and trade finance.',
    policy: 'EAC customs union law and TRA administration set the baseline; TanTrade supports facilitation; TBS and TFDA programmes stress quality and SPS for market access. Industrial policy increasingly ties incentives to compliant, value-added exports.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Global Trade</h4>
        <ul class="modal-bullet-list">
          <li>Import Licenses (TBS, TFDA)</li>
          <li>Export Permits (TanTrade)</li>
          <li>Customs Compliance (TRA)</li>
          <li>Trade Documentation (BRELA)</li>
          <li>Quality Certifications (TBS)</li>
          <li>International Trade Regulations</li>
          <li>Trade Finance Compliance (BOT)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">TRA</span>
          <span class="reg-label">TBS</span>
          <span class="reg-label">TFDA</span>
          <span class="reg-label">TanTrade</span>
          <span class="reg-label">BOT</span>
        </div>
      </div>
    `,
    Icon: Globe
  },
  { 
    num: '07', 
    title: 'Retail', 
    overview: 'Shops, chains, and wholesale—goods to consumers and industry.',
    policy: 'Formalisation pushes digital tax tools and VAT compliance; councils retain local licensing; consumer protection and product standards gain weight as modern formats grow. Policy implicitly rewards traceable supply chains and visible revenue.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Retail Strategy</h4>
        <ul class="modal-bullet-list">
          <li>Retail Licenses (BRELA)</li>
          <li>Local Government Business Licenses (PO-RALG)</li>
          <li>Strategic Tax Compliance And Filings (TRA)</li>
          <li>Consumer Protection Compliance (FCC)</li>
          <li>Store Location Permits And Safety Standards</li>
          <li>Retail Standards Compliance (TBS)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">BRELA</span>
          <span class="reg-label">PO-RALG</span>
          <span class="reg-label">TRA</span>
          <span class="reg-label">FCC</span>
          <span class="reg-label">TBS</span>
        </div>
      </div>
    `,
    Icon: BarChart4
  },
  { 
    num: '08', 
    title: 'NGOs', 
    overview: 'Non-profits and donors—health, education, livelihoods, governance.',
    policy: 'The NGO Act and Board supervision define how organisations register, report, and use foreign funds. Policy links civic space to national development plans; compliant NGOs retain access to partnerships and larger funding windows.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">NGO Framework</h4>
        <ul class="modal-bullet-list">
          <li>NGO Registration (NGO Board)</li>
          <li>Compliance Requirements (NGO Board)</li>
          <li>Grant Management</li>
          <li>Project Implementation</li>
          <li>Regulatory Reporting</li>
          <li>Operational Permits</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">NGO Board</span>
          <span class="reg-label">Ministry Of Home Affairs</span>
        </div>
      </div>
    `,
    Icon: Shield
  },
  { 
    num: '09', 
    title: 'ICT & Telecommunications', 
    overview: 'Telecoms, internet, software, and digital platforms.',
    policy: 'TCRA remains the gatekeeper for spectrum, licensing, and service quality; expectations on cybersecurity and data are converging with regional practice. National broadband targets signal continued room for licensed network investment and enterprise digitalisation.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Digital Infrastructure</h4>
        <ul class="modal-bullet-list">
          <li>Telecommunications Licenses (TCRA)</li>
          <li>Internet Service Provider Permits (TCRA)</li>
          <li>Data Center Compliance (TCRA)</li>
          <li>Software Development Licenses (BRELA)</li>
          <li>Cybersecurity Compliance (TCRA)</li>
          <li>Digital Content Regulations (TCRA)</li>
          <li>IT Equipment Import Permits (TBS)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">TCRA</span>
          <span class="reg-label">BRELA</span>
          <span class="reg-label">TBS</span>
          <span class="reg-label">COSTECH</span>
        </div>
      </div>
    `,
    Icon: Cpu
  },
  { 
    num: '10', 
    title: 'Agriculture & Agro-Processing', 
    overview: 'Farming, inputs, storage, and agro-processing for local and export markets.',
    policy: 'MALF strategies emphasise productivity and value addition; TFDA and TBS align food safety with export competitiveness. Agro-industrial hubs and EAC trade corridors reward certified, traceable supply chains over informal spot trade.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Agricultural Systems</h4>
        <ul class="modal-bullet-list">
          <li>Farm Registration (MALF)</li>
          <li>Food Processing Licenses (TFDA)</li>
          <li>Agricultural Input Permits (TPRI)</li>
          <li>Export Certifications (TBS)</li>
          <li>Storage Facility Compliance (TFRA)</li>
          <li>Pesticide Permits (TPRI)</li>
          <li>Quality Standards (TBS)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">MALF</span>
          <span class="reg-label">TFDA</span>
          <span class="reg-label">TPRI</span>
          <span class="reg-label">TFRA</span>
        </div>
      </div>
    `,
    Icon: Users
  },
  { 
    num: '11', 
    title: 'Pharmaceuticals & Cosmetics', 
    overview: 'Medicines and cosmetics—manufacture, import, and distribution.',
    policy: 'TFDA policy tracks EAC and WHO harmonisation on quality and safety; government encourages reliable supply and gradual local production. Registration, GMP, and post-market surveillance will tighten as universal health ambitions grow.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Health Compliance</h4>
        <ul class="modal-bullet-list">
          <li>Drug Manufacturing Licenses (TFDA)</li>
          <li>Product Registration (TFDA)</li>
          <li>GMP Certification (TFDA)</li>
          <li>Import Permits (TFDA)</li>
          <li>Clinical Trial Permits (NIMR)</li>
          <li>Quality Control Systems (TBS)</li>
          <li>Distribution Licenses (TFDA)</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">TFDA</span>
          <span class="reg-label">NIMR</span>
          <span class="reg-label">TBS</span>
          <span class="reg-label">Pharmacy Council</span>
        </div>
      </div>
    `,
    Icon: Shield
  },
  { 
    num: '12', 
    title: 'Media & Broadcasting', 
    overview: 'Radio, TV, streaming, and publishing—news, entertainment, ads.',
    policy: 'TCRA licensing balances access to spectrum with content and competition rules; COSOTA reinforces copyright in a digital economy. Policy continues to favour pluralism and orderly digital migration over unregulated grey broadcasting.',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Media Solutions</h4>
        <ul class="modal-bullet-list">
          <li>Broadcasting Licenses (TCRA)</li>
          <li>Content Regulations (TCRA)</li>
          <li>Media House Registration (BRELA)</li>
          <li>Frequency Allocation (TCRA)</li>
          <li>Copyright Compliance (COSOTA)</li>
          <li>Advertising Standards (TCRA)</li>
          <li>Cross-Media Ownership Compliance</li>
        </ul>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Key Regulatory Bodies</h4>
        <div class="reg-label-group">
          <span class="reg-label">TCRA</span>
          <span class="reg-label">COSOTA</span>
          <span class="reg-label">Media Council</span>
          <span class="reg-label">BRELA</span>
        </div>
      </div>
    `,
    Icon: BarChart4
  }
];

const Industries = ({ openModal }) => (
  <motion.section
    id="industries"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="container">
      <div className={`industries-header section-heading-block section-heading-block--${sectionHeadingAlign(2)}`}>
        <div className="eyebrow">Global Reach</div>
        <h2 className="section-heading-block__title">Strategic Sector Intelligence</h2>
        <p className="section-heading-block__lead">
          Multisector coverage—audit, diligence, and risk for large projects and global enterprises.
        </p>
      </div>

      <div className="industries-list">
        {sectors.map(({ num, title, overview, policy, details, Icon }, i) => (
          <motion.div
            key={i}
            className="industry-portal"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              openModal({
                title,
                subtitle: `Sector ${num}`,
                content: policy,
                details,
                Icon,
                type: 'Industry',
              })
            }
          >
            <div className="portal-overlay"></div>
            <div
              className="portal-image"
              style={{ background: sectorPortalGradients[i % sectorPortalGradients.length] }}
              role="img"
              aria-hidden="true"
            />
            <div className="portal-content">
              <div className="portal-num">{num}</div>
              <h3 className="portal-title">{title}</h3>
              <p className="portal-desc">{overview}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const AnalyticsReports = ({ openModal }) => (
  <section id="analytics" className="section bg-soft">
    <div className="container">
      <div className={`services-header section-heading-block section-heading-block--${sectionHeadingAlign(4)}`}>
        <div className="eyebrow">Analytics</div>
        <h2>Analytics & Reports</h2>
        <p style={{ fontSize: '1.05rem', maxWidth: '42rem' }}>
          Tanzania analytics and reference notes drawn from public regulatory and official sources.
        </p>
      </div>

      <div className="insights-scroll" role="region" aria-label="Tanzania analytics reports">
        <div className="insights-track">
          {insightPublications.map((item, i) => (
            <motion.div
              key={`${item.num}-${item.title}`}
              className="insight-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{ cursor: 'pointer' }}
              onClick={() => openModal({ ...item, content: item.desc })}
              onKeyDown={(e) => e.key === 'Enter' && openModal({ ...item, content: item.desc })}
              role="button"
              tabIndex={0}
            >
              <div className="insight-img">
                <div className="insight-img-gradient" style={{ background: item.gradient }} aria-hidden="true" />
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="insight-img-graphic"
                  aria-hidden="true"
                >
                  <circle cx="60" cy="60" r="50" fill="none" stroke={item.shape} strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="30" fill="none" stroke={item.shape} strokeWidth="1" />
                  <line x1="30" y1="60" x2="90" y2="60" stroke={item.shape} strokeWidth="0.75" />
                  <line x1="60" y1="30" x2="60" y2="90" stroke={item.shape} strokeWidth="0.75" />
                </svg>
                <span className="insight-tag">{item.tag}</span>
              </div>
              <div className="insight-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="insight-meta">{item.date}</div>
                <span className="insight-read-more">Read more <ArrowUpRight size={14} /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const firmEvents = [
  {
    num: '01',
    title: 'East Africa Institutional Risk Roundtable',
    desc: 'Hosted roundtable for CFOs and general counsel on risk, FX, and assurance across the EAC.',
    venue: 'Dar es Salaam',
    role: 'Hosted',
    dateLine: '18 Mar 2025',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Overview</h4>
        <p>Closed-door Ameen-hosted session convening CFOs, heads of internal audit, and general counsel from banks, telecoms, and industrials with East African operations.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Themes discussed</h4>
        <ul class="modal-bullet-list">
          <li>Sovereign and currency risk in multi-country treasury structures</li>
          <li>Board reporting on assurance, fraud, and regulatory examinations</li>
          <li>Coordination with development finance and donor compliance</li>
        </ul>
      </div>
    `,
  },
  {
    num: '02',
    title: 'TRA & Private Sector Tax Dialogue',
    desc: 'Satellite session on digital filing, disputes, and withholding—Dar es Salaam.',
    venue: 'Dar es Salaam',
    role: 'Attended',
    dateLine: '06 Feb 2025',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Participation</h4>
        <p>Our tax partners joined industry peers in a TRA-adjacent dialogue focused on practical compliance and dispute trends affecting large taxpayers.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Focus areas</h4>
        <ul class="modal-bullet-list">
          <li>E-invoicing and VAT administration</li>
          <li>Withholding on cross-border services</li>
          <li>Settlement and objection timelines</li>
        </ul>
      </div>
    `,
  },
  {
    num: '03',
    title: 'African Infrastructure & PPP Forum',
    desc: 'Attended alongside sponsors and DFIs on project finance and Tanzanian pipeline themes.',
    venue: 'Nairobi',
    role: 'Attended',
    dateLine: '22 Nov 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Why we were there</h4>
        <p>Representation to track infrastructure procurement, PPP structuring, and financing patterns that inform Tanzanian project pipelines and due diligence mandates.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Takeaways</h4>
        <ul class="modal-bullet-list">
          <li>Risk allocation between public authorities and sponsors</li>
          <li>DFI co-financing and ESG covenants</li>
          <li>Cross-border guarantees and offtake structures</li>
        </ul>
      </div>
    `,
  },
  {
    num: '04',
    title: 'Client Briefing: Corporate Governance 2025',
    desc: 'Invite-only hybrid briefing on BRELA, beneficial ownership, and audit committees.',
    venue: 'Hybrid · Dar es Salaam',
    role: 'Hosted',
    dateLine: '09 Oct 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Audience</h4>
        <p>Annual Ameen briefing for portfolio companies and long-standing institutional clients—directors, company secretaries, and finance leads.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Agenda highlights</h4>
        <ul class="modal-bullet-list">
          <li>BRELA filings and beneficial-ownership registers</li>
          <li>Audit committee cadence and external auditor oversight</li>
          <li>Related-party and governance disclosures</li>
        </ul>
      </div>
    `,
  },
  {
    num: '05',
    title: 'EAC CFO & Treasury Exchange',
    desc: 'Regional peer exchange on liquidity, hedging, and cross-border tax administration.',
    venue: 'Arusha',
    role: 'Attended',
    dateLine: '14 Aug 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Focus</h4>
        <p>East African finance leaders comparing treasury practice, TRA interfaces, and donor-reporting alignment.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Topics</h4>
        <ul class="modal-bullet-list">
          <li>Multi-entity cash pooling</li>
          <li>VAT and customs in the customs union</li>
          <li>DFI covenant reporting</li>
        </ul>
      </div>
    `,
  },
  {
    num: '06',
    title: 'HR & Payroll Compliance Clinic',
    desc: 'Half-day working session on PAYE, SDL, and statutory filings for scaling employers.',
    venue: 'Dar es Salaam',
    role: 'Hosted',
    dateLine: '27 Jun 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Audience</h4>
        <p>HR directors and payroll leads from manufacturing, retail, and NGO sectors.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Covered</h4>
        <ul class="modal-bullet-list">
          <li>PAYE bands and benefit-in-kind</li>
          <li>NSSF / PSSSF updates</li>
          <li>Skills development levy mechanics</li>
        </ul>
      </div>
    `,
  },
  {
    num: '07',
    title: 'Mining & Extractives Disclosure Forum',
    desc: 'Panel on EITI-style reporting, local content, and assurance expectations for listed operators.',
    venue: 'Dar es Salaam',
    role: 'Attended',
    dateLine: '30 Apr 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Context</h4>
        <p>Dialogue with operators, regulators, and investors on transparency and audit-ready project economics.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Themes</h4>
        <ul class="modal-bullet-list">
          <li>Production-sharing and fiscal terms</li>
          <li>Community development agreements</li>
          <li>Independent assurance on reserves</li>
        </ul>
      </div>
    `,
  },
  {
    num: '08',
    title: 'Digital Services & Data Protection Breakfast',
    desc: 'Briefing on TCRA expectations, cross-border data flows, and vendor due diligence.',
    venue: 'Dar es Salaam',
    role: 'Hosted',
    dateLine: '12 Mar 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Why it mattered</h4>
        <p>Clients modernising ERP, cloud, and fintech stacks needed a common baseline on licensing and privacy risk.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Takeaways</h4>
        <ul class="modal-bullet-list">
          <li>Processor vs controller roles in enterprise SaaS</li>
          <li>Incident reporting norms</li>
          <li>Contract clauses for African deployments</li>
        </ul>
      </div>
    `,
  },
  {
    num: '09',
    title: 'Agricultural Value Chain Finance Roundtable',
    desc: 'Banks, cooperatives, and processors on warehouse receipts, insurance, and TRA treatment.',
    venue: 'Dodoma',
    role: 'Attended',
    dateLine: '08 Feb 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Participation</h4>
        <p>Joined lenders and agribusinesses discussing collateral, seasonality, and export certification friction.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Discussion points</h4>
        <ul class="modal-bullet-list">
          <li>TFDA and TBS alignment for exports</li>
          <li>Working capital structures</li>
          <li>Smallholder aggregation models</li>
        </ul>
      </div>
    `,
  },
  {
    num: '10',
    title: 'Annual Assurance & Internal Audit Summit (Satellite)',
    desc: 'Observing global IA trends session with a Tanzania regulatory lens—COSO, ITGC, and fraud analytics.',
    venue: 'Virtual · EAT',
    role: 'Attended',
    dateLine: '18 Jan 2024',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Participation</h4>
        <p>Firm delegates tracked emerging IA standards and mapped implications for Tanzanian listed and SOE clients.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Mapped to local practice</h4>
        <ul class="modal-bullet-list">
          <li>Board audit committee charters</li>
          <li>Continuous monitoring vs statutory audit</li>
          <li>Whistleblower and fraud hotlines</li>
        </ul>
      </div>
    `,
  },
];

const Events = ({ openModal }) => (
  <motion.section
    id="events"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="container">
      <div className={`industries-header section-heading-block section-heading-block--${sectionHeadingAlign(5)}`}>
        <div className="eyebrow">Calendar</div>
        <h2 className="section-heading-block__title">Events & Engagements</h2>
        <p className="section-heading-block__lead">
          Hosted programmes and selected forums—open a card for venue, date, and detail.
        </p>
      </div>

      <div className="industries-list">
        {firmEvents.map(({ title, desc, details, role, venue, dateLine }, i) => (
          <motion.div
            key={i}
            className="industry-portal"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              openModal({
                title,
                subtitle: `${role} · ${venue} · ${dateLine}`,
                content: desc,
                details,
                type: 'Event',
              })
            }
          >
            <div className="portal-overlay" />
            <div
              className="portal-image"
              style={{ background: eventPortalGradients[i % eventPortalGradients.length] }}
              role="img"
              aria-hidden="true"
            />
            <div className="portal-content">
              <div className="portal-num">{role.toUpperCase()} · {dateLine}</div>
              <h3 className="portal-title">{title}</h3>
              <p className="portal-desc">{venue}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

/* ─── Contact ────────────────────────────────────────────────── */
const Contact = () => (
  <motion.section
    id="contact"
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="container">
      <div className="contact-grid">
        {/* Left */}
        <div className="contact-left">
          <div className={`section-heading-block section-heading-block--${sectionHeadingAlign(6)}`}>
            <div className="eyebrow">Get In Touch</div>
            <h2>Consultation Request</h2>
            <p>
              Use the form or the contacts below to request a confidential consultation.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon"><Mail size={18} /></div>
              solutions@ameen.com
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><Globe size={18} /></div>
              Tanzanian Global HQ
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><MapPin size={18} /></div>
              Dar es Salaam, Tanzania
            </div>
          </div>
        </div>

        {/* Right — form */}
        <motion.div
          className="form-card"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Full Name" id="contact-name" />
            </div>
            <div className="form-group">
              <label>Organisation</label>
              <input type="text" placeholder="Company / Institution" id="contact-org" />
            </div>
            <div className="form-group">
              <label>Service Area</label>
              <select id="contact-service">
                <option value="">Select a service...</option>
                <option>Finance Solutions</option>
                <option>Tax Compliance</option>
                <option>Legal Advisory</option>
                <option>Business Solutions</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                id="contact-message"
                placeholder="Outline your requirements and objectives..."
              />
            </div>
            <button className="btn btn-primary form-submit" type="submit">
              Submit Inquiry <ArrowRight size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

/* ─── App ────────────────────────────────────────────────────── */
const App = () => {
  const [modalData, setModalData] = useState(null);
  const [modalMobileSheet, setModalMobileSheet] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const id = location.hash?.replace(/^#/, '');
    if (!id) return;
    const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const t = window.setTimeout(run, 100);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const sync = () => setModalMobileSheet(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (modalData) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [modalData]);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services openModal={setModalData} />
      <Industries openModal={setModalData} />
      <Team />
      <AnalyticsReports openModal={setModalData} />
      <Events openModal={setModalData} />
      <Contact />
      <Footer />

      {/* Detail Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="modal-container"
              initial={
                modalMobileSheet
                  ? { y: '100%', opacity: 1 }
                  : { opacity: 0, scale: 0.97, y: 14 }
              }
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={
                modalMobileSheet
                  ? { y: '100%', opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.97, y: 14 }
              }
              transition={{
                type: 'tween',
                ease: [0.22, 1, 0.36, 1],
                duration: modalMobileSheet ? 0.45 : 0.32,
              }}
              onClick={e => e.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={() => setModalData(null)}>
                <X size={20} />
              </button>
              {modalMobileSheet && <div className="modal-sheet-handle" aria-hidden="true" />}
              <div className="modal-eyebrow">
                {modalData.type === 'Industry'
                  ? (modalData.subtitle || 'Sector')
                  : modalData.type === 'Report'
                    ? `${modalData.tag} · Tanzania · ${modalData.date}`
                    : modalData.type === 'Service'
                      ? `Pillar ${modalData.num}`
                      : modalData.type === 'Event'
                        ? (modalData.subtitle || 'Event')
                        : (modalData.num != null ? `Pillar ${modalData.num}` : 'Details')}
              </div>
              <h3 className="modal-title">{modalData.title}</h3>
              
              <div className="modal-content-area">
                {modalData.type === 'Industry' && (
                  <div className="modal-eyebrow modal-eyebrow--in-body">
                    Tanzania — policy &amp; market context
                  </div>
                )}
                <p className="modal-desc-text">{modalData.content || modalData.desc}</p>
                
                {modalData.details ? (
                  <div className="modal-details-html" dangerouslySetInnerHTML={{ __html: modalData.details }} />
                ) : modalData.sections && modalData.sections.map((section, idx) => (
                  <div key={idx} className="modal-section">
                    <h4 className="modal-section-title">{section.title}</h4>
                    <ul className="modal-features-list">
                      {section.items.map((item, i) => (
                        <li key={i} className="modal-feature-item">
                          <ChevronRight size={14} className="feature-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

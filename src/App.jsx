import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BarChart4, Gavel, FileBadge, Cpu,
  Linkedin, Mail, Globe, MapPin,
  ArrowRight, ArrowUpRight, ChevronRight,
  Award, Users, TrendingUp, Shield, X
} from 'lucide-react';

/** Alternating section titles: About=left, Services=center, Industries=left, Team=center, … */
function sectionHeadingAlign(i) {
  return i % 2 === 0 ? 'left' : 'center';
}

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
const heroImages = [
  "/hero-bg.jpg"
];

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
            Strategic Intelligence.<br />
            <em>Modern Solutions.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            Ameen Consultancy provides prestigious advisory services across Finance,
            Law, and Operations for the next generation of global industry leaders.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#services" className="btn btn-gold">
              Explore Services <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-outline-white">
              Get in Touch
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
  { Icon: Award,      value: '22+',  label: 'Practice Years' },
  { Icon: Users,      value: '15',   label: 'Sectors Served' },
  { Icon: TrendingUp, value: '$3.5B+',label: 'Portfolio Advised' },
  { Icon: Shield,     value: 'Global', label: 'Network Reach' },
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
            <div className="eyebrow">Global Standards</div>
            <h2 className="section-heading-block__title">Architecting Institutional Resilience</h2>
          </div>
        </motion.div>
        <motion.div className="about-para" variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>
            Ameen Consultancy is a premier management firm deeply rooted in providing unique assurance 
            and advisory services to institutional clients across 15 critical sectors. Our strategic roadmap 
            merges financial foresight with legal precision, leveraging a multi-disciplined pool 
            of experts—including CPAs, CIAs, and CISAs—to safeguard your interests while optimising for global scale.
          </p>
          <p>
            With an in-depth understanding of multinational development projects and a global network 
            of affiliates, we provide the rigorous due diligence and operational intelligence 
            required for high-stakes growth in the East African region and beyond.
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
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200&h=800"
            alt="Corporate advisory session"
            className="about-image"
          />
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
        <div className="eyebrow">Strategic Specializations</div>
        <h2>Four Pillars of Excellence</h2>
        <p style={{ fontSize: '1.05rem' }}>
          Precision-driven solutions crafted for institutions that demand nothing less than the best.
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
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256' 
  },
  { 
    name: 'Dr. Sarah Thorne, CIA, CISA', 
    role: 'Senior Partner · Risk & Assurance', 
    bio: 'Specializing in sovereign risk and institutional resilience. With two decades of experience in the Big Four, she advises NGOs and global development agencies on internal audit frameworks and systemic project impact assessments.', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256' 
  },
  { 
    name: 'Arthur Vance, CISA, PMP', 
    role: 'Partner · Systems & Digital Strategy', 
    bio: 'Architecting digital resilience for modern enterprises. A leading Information Systems Auditor with a deep focus on ERP integrity, cybersecurity governance, and technical due diligence for cross-border M&A operations.', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256' 
  },
  { 
    name: 'Linda Kemp, CGAP, MEL', 
    role: 'Partner · Public Sector & Development', 
    bio: 'An authority on public sector capital allocation and social impact monitoring. Her global footprint includes strategic advisory for the World Bank and UN-affiliated NGOs on large-scale developmental infrastructure projects.', 
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256' 
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
          Expert Human Capital
        </div>
        <h2>A Pool of Multi-Disciplined Resources</h2>
        <p>
          Our partners are world-class professionals deeply rooted in unique 
          assurance and advisory services for global enterprises.
        </p>
      </motion.div>

      <div className="team-scroll" role="region" aria-label="Partners and team">
        <div className="team-grid">
        {members.map(({ name, role, bio, image }, i) => (
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
              <img src={image} alt={name} />
              <div className="avatar-ring" />
            </div>
            
            <div className="team-card-content">
              <h3>{name}</h3>
              <p className="team-role">{role}</p>
              
              <p className="team-bio">{bio}</p>
              
              <div className="team-footer">
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn"><Linkedin size={14} /></a>
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
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1541888086925-0c13ee0bc14f?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?auto=format&fit=crop&q=80&w=600&h=400',
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
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600&h=400',
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
          Deeply rooted in providing solutions for large multinational development agencies 
          and global enterprises. We carry out audits, due diligence, and risk assessments 
          across 12 critical industries.
        </p>
      </div>

      <div className="industries-list">
        {sectors.map(({ num, title, overview, policy, image, details, Icon }, i) => (
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
                image,
                Icon,
                type: 'Industry',
              })
            }
          >
            <div className="portal-overlay"></div>
            <img src={image} alt={title} className="portal-image" />
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

/* ─── Analytics & Reports ───────────────────────────────────── */
const analyticsReports = [
  {
    num: '01',
    type: 'Report',
    tag: 'Financial outlook',
    title: 'Tanzania CFO Pulse & Banking Sentiment 2025',
    desc: 'Credit conditions, FX liquidity, and working-capital themes shaping listed and large private groups in Dar es Salaam and up-country hubs.',
    date: 'March 2025',
    gradient: 'linear-gradient(135deg, rgba(26,58,107,0.2) 0%, rgba(37,99,235,0.12) 100%)',
    shape: '#1e4799',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Executive summary</h4>
        <p>Annual-style snapshot of balance-sheet discipline, funding costs, and sectoral stress points relevant to boards and lenders operating in Tanzania.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">What we cover</h4>
        <ul class="modal-bullet-list">
          <li>Liquidity and interest-rate pass-through across corporate banking</li>
          <li>FX and working-capital behaviour for import-led sectors</li>
          <li>IFRS disclosure themes and audit committee focus areas</li>
          <li>Capital allocation and dividend policy among large enterprises</li>
        </ul>
      </div>
    `,
  },
  {
    num: '02',
    type: 'Report',
    tag: 'Tax & TRA',
    title: 'TRA Compliance & EAC Tax Developments',
    desc: 'Practical read on VAT, withholding, digital filing, and cross-border rules affecting Tanzanian operations and regional supply chains.',
    date: 'February 2025',
    gradient: 'linear-gradient(135deg, rgba(234,108,10,0.14) 0%, rgba(26,58,107,0.1) 100%)',
    shape: '#ea6c0a',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Executive summary</h4>
        <p>Big Four–style tax bulletin focused on what TRA and EAC practice means for CFOs and heads of tax this year.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Highlights</h4>
        <ul class="modal-bullet-list">
          <li>Corporate income tax and transfer-pricing scrutiny trends</li>
          <li>VAT on services, e-invoicing, and audit settlement patterns</li>
          <li>Withholding on payments to non-residents and treaty angles</li>
          <li>Customs and excise watchpoints for importers and manufacturers</li>
        </ul>
      </div>
    `,
  },
  {
    num: '03',
    type: 'Report',
    tag: 'Investment',
    title: 'Deal Flow & Capital Markets Watch — Tanzania',
    desc: 'M&A, PE, and project-finance appetite; valuation multiples; and infrastructure-linked investment themes across key sectors.',
    date: 'January 2025',
    gradient: 'linear-gradient(135deg, rgba(6,95,70,0.14) 0%, rgba(16,185,129,0.1) 100%)',
    shape: '#059669',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Executive summary</h4>
        <p>Investment and performance analytics oriented to institutions tracking Tanzania exposure alongside regional peers.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Analytics pack</h4>
        <ul class="modal-bullet-list">
          <li>Sector heatmap: telecoms, energy, agriculture, financial services</li>
          <li>Greenfield vs brownfield and PPP-style project pipelines</li>
          <li>FX and repatriation considerations for offshore investors</li>
          <li>ESG and development-finance co-investment criteria</li>
        </ul>
      </div>
    `,
  },
  {
    num: '04',
    type: 'Report',
    tag: 'Legal & regulatory',
    title: 'Corporate & Commercial Law Radar',
    desc: 'Company law, licensing, employment, and dispute trends affecting multinationals and large local groups in Tanzania.',
    date: 'December 2024',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(167,139,250,0.08) 100%)',
    shape: '#7c3aed',
    details: `
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Executive summary</h4>
        <p>General counsel briefing on statutory and regulatory shifts with operational impact—aligned with how major advisory firms publish annual legal outlooks.</p>
      </div>
      <div class="modal-sub-section">
        <h4 class="modal-sub-title">Topics</h4>
        <ul class="modal-bullet-list">
          <li>BRELA, sector regulators, and beneficial-ownership compliance</li>
          <li>Commercial contracts, arbitration, and court backlog themes</li>
          <li>Employment, expatriate quotas, and local content rules</li>
          <li>Data protection, cybersecurity, and digital services licensing</li>
        </ul>
      </div>
    `,
  },
];

const AnalyticsReports = ({ openModal }) => (
  <section id="analytics" className="section bg-soft">
    <div className="container">
      <div className={`services-header section-heading-block section-heading-block--${sectionHeadingAlign(4)}`}>
        <div className="eyebrow">Publications</div>
        <h2>Analytics & Reports</h2>
        <p style={{ fontSize: '1.05rem' }}>
          Tanzania-focused outlooks on finance, tax, investment, and legal themes—published in the spirit
          of major advisory firm yearbooks.
        </p>
      </div>

      <div className="insights-scroll" role="region" aria-label="Analytics and reports">
        <div className="insights-track">
          {analyticsReports.map((item, i) => (
            <motion.div
              key={i}
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
                <div className="insight-img-gradient" style={{ background: item.gradient }} />
                <svg
                  width="120" height="120" viewBox="0 0 120 120"
                  style={{ opacity: 0.15 }}
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
                <span className="insight-read-more">View analysis <ArrowUpRight size={14} /></span>
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
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=1000',
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
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=1000',
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
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800&h=1000',
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
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80&w=800&h=1000',
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
          Programmes we host and forums we attend—same visual language as our sector intelligence cards.
          Tap a card for the full rundown.
        </p>
      </div>

      <div className="industries-list">
        {firmEvents.map(({ title, desc, image, details, role, venue, dateLine }, i) => (
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
                image,
                type: 'Event',
              })
            }
          >
            <div className="portal-overlay" />
            <img src={image} alt={title} className="portal-image" />
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
              Reserve a private strategy session for your enterprise. Our senior partners
              are available for confidential advisory engagements.
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

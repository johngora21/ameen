import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const openings = [
  {
    title: 'Senior Audit Associate',
    team: 'Assurance',
    location: 'Dar es Salaam',
    type: 'Full-time',
  },
  {
    title: 'Tax Manager',
    team: 'Tax',
    location: 'Dar es Salaam',
    type: 'Full-time',
  },
  {
    title: 'Corporate Advisory Analyst',
    team: 'Advisory',
    location: 'Dar es Salaam · Hybrid',
    type: 'Full-time',
  },
];

export default function Careers() {
  return (
    <div className="careers-layout">
      <Navbar />
      <main className="careers-page">
        <section className="careers-hero section">
          <div className="container">
            <motion.div
              className="careers-hero-inner"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="eyebrow">Join us</div>
              <h1>Careers at Ameen</h1>
              <p className="careers-lead">
                We hire people who thrive on rigour, discretion, and institutional-grade work—across
                audit, tax, legal, and advisory. If that sounds like you, we would like to hear from you.
              </p>
              <a href="mailto:careers@ameen.com?subject=Careers%20inquiry" className="btn btn-primary">
                Email careers <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section careers-values bg-soft">
          <div className="container">
            <div className="careers-values-grid">
              {[
                {
                  Icon: Briefcase,
                  title: 'Complex mandates',
                  text: 'Exposure to multinationals, DFIs, and regulated entities—not generic small-firm work.',
                },
                {
                  Icon: GraduationCap,
                  title: 'Depth over noise',
                  text: 'We invest in technical excellence, coaching, and clear paths for specialists and generalists.',
                },
                {
                  Icon: Users,
                  title: 'Partners who practise',
                  text: 'You work alongside partners who stay close to clients and standards, not only org charts.',
                },
              ].map(({ Icon, title, text }, i) => (
                <motion.article
                  key={title}
                  className="careers-value-card"
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <div className="careers-value-icon">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section careers-roles">
          <div className="container">
            <div className="careers-section-head">
              <h2>Open roles</h2>
              <p>
                Representative positions we recruit for. Descriptions are indicative—send a CV and cover
                letter if you are a fit for the firm even when a role is not listed.
              </p>
            </div>
            <ul className="careers-role-list">
              {openings.map((job, i) => (
                <motion.li
                  key={job.title}
                  className="careers-role-card"
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                >
                  <div className="careers-role-main">
                    <h3>{job.title}</h3>
                    <p className="careers-role-meta">
                      {job.team}
                      <span aria-hidden> · </span>
                      {job.location}
                      <span aria-hidden> · </span>
                      {job.type}
                    </p>
                  </div>
                  <a
                    className="btn btn-outline careers-role-apply"
                    href={`mailto:careers@ameen.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  >
                    Apply
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="careers-speculative">
              No suitable vacancy?{' '}
              <a href="mailto:careers@ameen.com?subject=Speculative%20application">Introduce yourself</a>
              {' '}anyway—we review speculative applications quarterly.
            </p>
          </div>
        </section>

        <section className="section careers-cta bg-soft">
          <div className="container careers-cta-inner">
            <h2>Back to the main site</h2>
            <p>Services, sectors, and how to request a consultation are on the homepage.</p>
            <Link to="/" className="btn btn-primary">
              Return home <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

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
                Roles in audit, tax, legal, and advisory for people who want institutional-grade, discreet work.
              </p>
              <a href="mailto:careers@ameen.com?subject=Careers%20inquiry" className="btn btn-primary">
                Email careers <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



import { motion } from 'framer-motion';
import { LuBadgeCheck, LuEye } from 'react-icons/lu';
import PageWrapper from '../components/PageWrapper';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Certifications</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-10">
        Continued learning
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="section-card overflow-hidden"
          >
            <div className="h-28 bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
              <LuBadgeCheck size={40} className="text-white/90" />
            </div>
            <div className="p-5">
              <h2 className="font-display font-bold text-slate-800 dark:text-white leading-snug">{c.title}</h2>
              <p className="text-sm text-primary-600 dark:text-primary-300 font-semibold mt-1">{c.issuer}</p>
              <p className="text-xs text-slate-400 mt-2">{c.date}</p>
              {c.file && (
                <a href={c.file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary-600 dark:text-primary-300 hover:gap-2.5 transition-all">
                  <LuEye size={13} /> View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
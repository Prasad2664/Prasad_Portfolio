import { motion } from 'framer-motion';
import { LuGraduationCap } from 'react-icons/lu';
import PageWrapper from '../components/PageWrapper';
import { education } from '../data/portfolioData';

const colors = ['from-primary-600 to-blue-400', 'from-emerald-500 to-teal-400', 'from-orange-500 to-amber-400'];

export default function Education() {
  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Education</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-10">
        Academic background
      </h1>

      <div className="grid grid-cols-1 gap-5">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="section-card p-6 flex items-start gap-5"
          >
            <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${colors[i % colors.length]} shadow-cardHover`}>
              <LuGraduationCap size={26} className="text-white/90" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display font-bold text-slate-800 dark:text-white">{e.degree}</h2>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{e.school}</p>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-300 mt-2">{e.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}

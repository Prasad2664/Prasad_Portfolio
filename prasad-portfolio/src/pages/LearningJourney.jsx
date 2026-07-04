import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import ToolIcon from '../components/ToolIcon';
import { learningJourney } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Learning Journey</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
        How I built my analytics skill set
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
        A phase-by-phase look at what I focused on learning during my internship, from Python to SQL.
      </p>

      <div className="space-y-6">
        {learningJourney.map((phase, i) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="section-card p-6"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-600 text-white text-sm font-display font-bold shrink-0">
                {phase.phase}
              </span>
              <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white">{phase.title}</h2>
              <div className="flex gap-1.5 ml-auto">
                {phase.tools.map((t) => (
                  <span key={t} className="grid h-7 w-7 place-items-center rounded-lg bg-primary-50 dark:bg-white/5">
                    <ToolIcon name={t} size={15} />
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2">
              {phase.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const technical = skills.filter((s) => s.category === 'Technical');
  const analytical = skills.filter((s) => s.category === 'Analytical');

  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Skills</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
        Technologies and tools I use
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
        A working toolkit built through hands-on internship experience, from raw SQL to polished dashboards.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-card p-7 space-y-6"
        >
          <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white">Technical Skills</h2>
          {technical.map((s, i) => (
  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.06} icon={s.icon} />
))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="section-card p-7 space-y-6"
        >
          <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white">Analytical Skills</h2>
          {analytical.map((s, i) => (
  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.06} icon={s.icon} />
))}

          <div className="pt-2">
            <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-4">Other Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Jupyter Notebook', 'MySQL Workbench', 'Git', 'GitHub', 'VS Code'].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}

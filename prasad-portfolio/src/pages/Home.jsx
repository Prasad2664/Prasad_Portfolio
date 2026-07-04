import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowRight, LuDownload, LuDatabase } from 'react-icons/lu';
import PageWrapper from '../components/PageWrapper';
import StatCard from '../components/StatCard';
import { profile, stats, tools } from '../data/portfolioData';
import ToolIcon from '../components/ToolIcon';

export default function Home() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="eyebrow mb-4">Hi, I&rsquo;m</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2 font-display text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-300">
            {profile.role}
          </p>
          <p className="mt-3 text-slate-500 dark:text-slate-400 font-medium">
            {profile.heroSkills.join('  \u00b7  ')}
          </p>
          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 text-white px-5 py-3 text-sm font-semibold shadow-cardHover hover:bg-primary-700 transition-colors"
            >
              View Projects <LuArrowRight size={16} />
            </Link>
            <a
              href="/Prasad_Gawade_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-primary-200 dark:border-white/10 text-primary-700 dark:text-primary-200 px-5 py-3 text-sm font-semibold hover:bg-primary-50 dark:hover:bg-white/5 transition-colors"
            >
              Download Resume <LuDownload size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary-200/60 dark:bg-primary-900/40 blur-3xl scale-110" />
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full overflow-hidden shadow-cardHover animate-floaty ring-4 ring-white dark:ring-panel-dark">
              <img src="/id_photo.jpg" alt="Prasad Gawade" className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-14">
  <p className="eyebrow mb-4">Tools I work with</p>
  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
    {tools.map((tool, i) => (
      <motion.div
        key={tool}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        whileHover={{ y: -4 }}
        className="section-card flex flex-col items-center justify-center gap-2 py-5 px-2"
      >
        <ToolIcon name={tool} size={26} />
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-200 text-center">
          {tool}
        </span>
      </motion.div>
    ))}
  </div>
</div>
    </PageWrapper>
  );
}

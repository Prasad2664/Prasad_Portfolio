import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuGithub, LuExternalLink, LuTarget, LuLightbulb, LuWrench } from 'react-icons/lu';


const gradients = {
  ipl: 'from-primary-600 to-blue-400',
  accident: 'from-indigo-600 to-primary-400',
  blinkit: 'from-emerald-500 to-teal-400',
  phonepe: 'from-violet-600 to-primary-400',
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <PageWrapper>
      <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-300 mb-6 hover:gap-2.5 transition-all">
        <LuArrowLeft size={15} /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`rounded-2xl h-48 sm:h-60 bg-gradient-to-br ${gradients[project.image]} flex items-center justify-center mb-8 shadow-cardHover`}
      >
        <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white text-center px-6">{project.title}</h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-card p-7"
          >
            <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-3">Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="section-card p-7"
          >
            <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <LuTarget size={18} className="text-primary-600 dark:text-primary-300" /> Objectives
            </h2>
            <ul className="space-y-2">
              {project.objectives.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-card p-7"
          >
            <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-3">Business Problem</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.businessProblem}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="section-card p-7"
          >
            <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <LuLightbulb size={18} className="text-primary-600 dark:text-primary-300" /> Key Insights
            </h2>
            <ul className="space-y-2">
              {project.insights.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-card p-4 sm:p-5"
          >
            <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-3">Dashboard Screenshots</h2>
            <div className="grid grid-cols-1 gap-5">
              {(project.screenshots || [1, 2]).map((src, n) =>
                typeof src === 'string' ? (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot ${n + 1}`}
                    className="w-full h-auto rounded-xl border border-slate-100 dark:border-white/10 shadow-card"
                  />
                ) : (
                  <div key={src} className={`h-64 rounded-xl bg-gradient-to-br ${gradients[project.image]} opacity-70 flex items-center justify-center text-white/80 text-xs font-semibold`}>
                    Screenshot {src}
                  </div>
                )
              )}
            </div>
          </motion.section>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-card p-6"
          >
            <h3 className="font-display font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <LuWrench size={16} className="text-primary-600 dark:text-primary-300" /> Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="section-card p-6 space-y-3"
          >
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary-600 text-white py-2.5 text-sm font-semibold hover:bg-primary-700 transition-colors">
                <LuExternalLink size={15} /> Live Dashboard
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-primary-200 dark:border-white/10 text-primary-700 dark:text-primary-200 py-2.5 text-sm font-semibold hover:bg-primary-50 dark:hover:bg-white/5 transition-colors">
              <LuGithub size={15} /> GitHub Repository
            </a>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

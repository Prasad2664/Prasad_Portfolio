import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuGithub, LuExternalLink, LuArrowRight } from 'react-icons/lu';

const gradients = {
  ipl: 'from-primary-600 to-blue-400',
  accident: 'from-orange-400 to-amber-300',
  blinkit: 'from-emerald-500 to-teal-400',
  phonepe: 'from-violet-600 to-primary-400',
};

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="section-card overflow-hidden flex flex-col group"
    >
      <div className={`h-36 bg-gradient-to-br ${gradients[project.image] || gradients.ipl} relative flex items-center justify-center`}>
        <span className="font-display text-white/90 font-bold text-lg tracking-tight px-4 text-center">
          {project.title}
        </span>
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-semibold px-2 py-1 rounded-md bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display font-bold text-slate-800 dark:text-white mb-1.5">{project.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 flex-1">{project.summary}</p>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-300 hover:gap-2.5 transition-all"
          >
            View Details <LuArrowRight size={15} />
          </Link>
          <div className="ml-auto flex items-center gap-2">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live dashboard"
                className="grid h-8 w-8 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
                <LuExternalLink size={14} />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository"
              className="grid h-8 w-8 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
              <LuGithub size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

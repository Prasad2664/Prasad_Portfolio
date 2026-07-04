import { motion } from 'framer-motion';
import { LuUserRound } from 'react-icons/lu';
import PageWrapper from '../components/PageWrapper';
import { profile, whatIDo, workflow } from '../data/portfolioData';

export default function About() {
  return (
    <PageWrapper>
      <p className="eyebrow mb-3">About Me</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
        The person behind the dashboards
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="section-card p-8 flex flex-col items-center text-center">
           <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-cardHover mb-4">
  <img src="/id_photo.jpg" alt="Prasad Gawade" className="h-full w-full object-cover" />
</div>
            <p className="font-display font-bold text-lg text-slate-800 dark:text-white">{profile.name}</p>
            <p className="text-primary-600 dark:text-primary-300 text-sm font-semibold">{profile.role}</p>
            <p className="text-xs text-slate-400 mt-1">{profile.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3 section-card p-8"
        >
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm a detail-oriented Data Analyst passionate about exploring data, uncovering patterns, and
            delivering insights that support real decisions. I enjoy the full path from a messy raw dataset
            to a clean, confident recommendation.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.summary}
          </p>
        </motion.div>
      </div>

      <div className="mt-14">
        <p className="eyebrow mb-4">What I Do</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIDo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="section-card p-5"
            >
              <h3 className="font-display font-bold text-slate-800 dark:text-white mb-1.5">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="eyebrow mb-4">My Workflow</p>
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-primary-100 dark:bg-primary-950" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflow.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white font-display font-bold shadow-cardHover mb-3">
                  {w.step}
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white text-sm">{w.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

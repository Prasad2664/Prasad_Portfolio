
// import { motion } from 'framer-motion';
// import { LuBriefcase } from 'react-icons/lu';
// import PageWrapper from '../components/PageWrapper';
// import { experience } from '../data/portfolioData';


// export default function Experience() {
//   return (
//     <PageWrapper>
//       <p className="eyebrow mb-3">Experience</p>
//       <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-10">
//         My professional journey
//       </h1>

//       <div className="relative pl-8 sm:pl-10">
//         <div className="absolute top-2 left-3 sm:left-4 bottom-2 w-0.5 bg-primary-100 dark:bg-primary-950" />
//         {experience.map((job, i) => (
//           <motion.div
//             key={job.company}
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//             className="relative mb-8"
//           >
//             <div className="absolute -left-8 sm:-left-10 top-1.5 grid h-8 w-8 place-items-center rounded-full bg-primary-600 text-white shadow-cardHover">
//               <LuBriefcase size={15} />
//             </div>
//             <div className="section-card p-6">
//               <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
//                 <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white">{job.role}</h2>
//                 <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
//                   {job.period}
//                 </span>
//               </div>
//               <p className="text-sm font-semibold text-primary-600 dark:text-primary-300 mb-4">{job.company}</p>
//               <ul className="space-y-2">
//                 {job.points.map((p) => (
//                   <li key={p} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
//                     <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </PageWrapper>
//   );
// }

import { motion } from 'framer-motion';
import { LuBriefcase, LuFileText, LuFileCheck2, LuAward, LuEye } from 'react-icons/lu';
import PageWrapper from '../components/PageWrapper';
import { experience, internshipDocuments } from '../data/portfolioData';

export default function Experience() {
  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Experience</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-10">
        My professional journey
      </h1>

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute top-2 left-3 sm:left-4 bottom-2 w-0.5 bg-primary-100 dark:bg-primary-950" />
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative mb-8"
          >
            <div className="absolute -left-8 sm:-left-10 top-1.5 grid h-8 w-8 place-items-center rounded-full bg-primary-600 text-white shadow-cardHover">
              <LuBriefcase size={15} />
            </div>
            <div className="section-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white">{job.role}</h2>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  {job.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-300 mb-4">{job.company}</p>
              <ul className="space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <p className="eyebrow mb-4">Internship Documents</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {internshipDocuments.map((doc, i) => {
            const icons = [LuFileText, LuFileCheck2, LuAward];
            const Icon = icons[i % icons.length];
            return (
              <motion.a
                key={doc.title}
                href={doc.file}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="section-card p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-slate-800 dark:text-white text-sm">{doc.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-300">
                  <LuEye size={13} /> View Document
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
import { Link } from 'react-router-dom';
import { LuLinkedin, LuGithub, LuMail } from 'react-icons/lu';
import { profile, navLinks, tools } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="lg:pl-64 border-t border-slate-100 dark:border-white/5 bg-panel-light dark:bg-panel-dark">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display font-bold text-slate-800 dark:text-white">{profile.name}</p>
          <p className="text-sm text-primary-600 dark:text-primary-300 font-medium mb-3">{profile.role}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            Turning data into insight and insight into impact.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
              <LuLinkedin size={15} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="grid h-8 w-8 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
              <LuGithub size={15} />
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer" aria-label="Email"
              className="grid h-8 w-8 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
              <LuMail size={15} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Quick Links</p>
          <ul className="space-y-2">
            {navLinks.slice(0, 5).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Tools & Technologies</p>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <span key={t} className="text-[11px] font-semibold px-2 py-1 rounded-md bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 dark:border-white/5 py-4 px-5 sm:px-8 lg:px-12 text-xs text-slate-400 flex flex-col sm:flex-row gap-2 sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Vite &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  LuHouse, LuUser, LuGauge, LuFolderKanban, LuBriefcase,
  LuGraduationCap, LuBadgeCheck, LuMail, LuMenu, LuX, LuSun, LuMoon,
  LuLinkedin, LuGithub, LuRoute,
} from 'react-icons/lu';
import { profile, navLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const icons = {
  Home: LuHouse,
  About: LuUser,
  Skills: LuGauge,
  'Learning Journey': LuRoute,
  Projects: LuFolderKanban,
  Experience: LuBriefcase,
  Education: LuGraduationCap,
  Certifications: LuBadgeCheck,
  Contact: LuMail,
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const initials = profile.name.split(' ').map((n) => n[0]).join('');

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-6 pt-8 pb-6">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-600 text-white font-display font-bold text-sm shadow-cardHover">
          {initials}
        </div>
        <div>
          <p className="font-display font-bold text-slate-800 dark:text-white leading-tight">{profile.name}</p>
          <p className="text-xs text-primary-600 dark:text-primary-300 font-medium">{profile.role}</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 space-y-1">
        {navLinks.map((link) => {
          const Icon = icons[link.label];
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-cardHover'
                    : 'text-slate-500 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-white/5 hover:text-primary-700 dark:hover:text-primary-200'
                }`
              }
            >
              <Icon size={18} className="shrink-0" />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="px-4 pb-4 pt-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="flex w-full items-center justify-between rounded-xl bg-primary-50 dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-200 hover:bg-primary-100 dark:hover:bg-white/10 transition-colors"
        >
          <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          {theme === 'dark' ? <LuMoon size={17} /> : <LuSun size={17} />}
        </button>
      </div>

      <div className="flex items-center gap-3 px-6 pb-8 pt-2 border-t border-slate-100 dark:border-white/5">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
          className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
          <LuLinkedin size={16} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
          className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
          <LuGithub size={16} />
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer" aria-label="Email"
          className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
          <LuMail size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col bg-panel-light dark:bg-panel-dark border-r border-slate-100 dark:border-white/5 shadow-sidebar z-30">
        {content}
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between bg-panel-light dark:bg-panel-dark border-b border-slate-100 dark:border-white/5 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-600 text-white font-display font-bold text-xs">
            {initials}
          </div>
          <span className="font-display font-bold text-sm text-slate-800 dark:text-white">{profile.name}</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300"
        >
          {open ? <LuX size={18} /> : <LuMenu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <aside
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 left-0 h-full w-72 bg-panel-light dark:bg-panel-dark shadow-cardHover pt-14"
          >
            {content}
          </aside>
        </div>
      )}
    </>
  );
}

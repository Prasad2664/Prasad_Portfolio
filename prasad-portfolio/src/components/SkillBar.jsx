import { motion } from 'framer-motion';
import ToolIcon from './ToolIcon';

export default function SkillBar({ name, level, delay = 0, icon }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {icon && <ToolIcon name={icon} size={18} />}
          {name}
        </span>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-300">{level}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
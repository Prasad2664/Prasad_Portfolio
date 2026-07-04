import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(target, inView, duration = 1.4) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const tick = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

export default function StatCard({ label, value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="section-card p-5"
    >
      <p className="font-display text-2xl sm:text-3xl font-extrabold text-primary-700 dark:text-primary-300">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
    </motion.div>
  );
}

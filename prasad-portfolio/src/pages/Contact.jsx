import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMail, LuPhone, LuMapPin, LuLinkedin, LuGithub, LuSend, LuCheck } from 'react-icons/lu';
import PageWrapper from '../components/PageWrapper';
import { profile } from '../data/portfolioData';

const contactItems = [
  { icon: LuMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LuPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: LuMapPin, label: 'Location', value: profile.location, href: null },
  { icon: LuLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/prasadgawade', href: profile.linkedin },
  { icon: LuGithub, label: 'GitHub', value: 'github.com/prasadgawade', href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to a form backend (Formspree, EmailJS, etc.) or a mailto fallback.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio contact')}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Contact</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
        Get in touch
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
        Open to new opportunities and interesting projects — reach out any time.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 space-y-3"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <Wrapper
                key={item.label}
                {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
                className="section-card p-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  <Icon size={19} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 section-card p-7 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 block">Name</label>
              <input id="name" name="name" required value={form.name} onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:border-primary-500 outline-none transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 block">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:border-primary-500 outline-none transition-colors" placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 block">Subject</label>
            <input id="subject" name="subject" required value={form.subject} onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:border-primary-500 outline-none transition-colors" placeholder="What's this about?" />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 block">Message</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:border-primary-500 outline-none transition-colors resize-none" placeholder="Tell me a bit about the project or opportunity..." />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 text-white px-6 py-3 text-sm font-semibold shadow-cardHover hover:bg-primary-700 transition-colors"
          >
            {sent ? <><LuCheck size={16} /> Message ready</> : <><LuSend size={16} /> Send Message</>}
          </button>
          {sent && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400">Your email client should now be open with the message pre-filled.</p>
          )}
        </motion.form>
      </div>
    </PageWrapper>
  );
}

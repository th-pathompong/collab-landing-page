'use client';

import { motion } from 'framer-motion';
import { APP_URL } from './constants/navigation';
// import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 dark:from-brand-700 dark:via-brand-800 dark:to-brand-950 ring-1 ring-inset ring-black/5 dark:ring-white/5">
      {/* Decorative glows — violet spotlight + warm amber tie-in to the CTA */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-brand-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[30rem] h-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Your Virtual Session Awaits.
        </motion.h2>
        <motion.p 
          className="text-xl text-brand-700 dark:text-brand-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          No complex setup. Just you, your band, and your fans.
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href={APP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-amber-400 text-brand-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-500/20"
          >
            Beta Access
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
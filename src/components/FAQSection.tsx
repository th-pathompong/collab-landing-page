'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need to install any software or plugins?',
    answer: 'No. murva is 100% browser-based. You don’t need to download anything or install any VSTs. Just open the link, and you’re ready to jam.'
  },
  {
    question: 'Does it support external MIDI controllers?',
    answer: 'Yes! We support standard MIDI controllers via the Web MIDI API (available in Chrome, Edge, and Brave). Simply plug in your controller, and it should work automatically.'
  },
  {
    question: 'What about latency? Can we really jam in real-time?',
    answer: 'We use ultra-low latency WebRTC for voice and an optimized binary protocol for instrument sync. While physics limits us to the speed of light, murva is designed to provide the tightest possible feel for remote collaboration.'
  },
  {
    question: 'Is it really free?',
    answer: 'During our current Beta phase, most professional features are available for free. We also have a Guest mode that allows you to join and play without even creating an account.'
  },
  {
    question: 'Can I export my work to other DAWs like Ableton or Logic?',
    answer: 'Absolutely. In the Arrange Room, you can export your project as a standard MIDI file or high-quality multitrack WAV stems to continue your work in any professional DAW.'
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand dark:text-brand-300 mb-6"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

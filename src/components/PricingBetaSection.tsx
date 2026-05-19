'use client';

import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { APP_URL } from './constants/navigation';

const tiers = [
  {
    name: 'FREE',
    tagline: 'The Trial Playground',
    price: '$0',
    features: [
      '1 project saved',
      '4 tracks per project',
      '3 minutes max length',
      'Public & private rooms access',
      'Limited AI quota (3/day)',
    ],
    cta: 'Start for Free',
    highlight: false,
    comingSoon: false,
  },
  {
    name: 'ARTIST',
    tagline: 'The Professional Bridge',
    price: '$9',
    period: '/month',
    betaPrice: 'FREE DURING BETA',
    features: [
      '10 projects saved',
      '32 tracks per project',
      'Export MIDI & Multitrack WAV',
      'Join up to 3 bands',
      'Full AI quota & Live streaming',
    ],
    cta: 'Get Beta Access',
    highlight: true,
    comingSoon: false,
  },
  {
    name: 'PRO',
    tagline: 'The Serious Creator',
    price: '$19',
    period: '/month',
    features: [
      'Unlimited projects (50GB)',
      'Unlimited tracks & bands',
      'Priority support',
      'AI Mastering & Advanced FX',
      'Collaborative Crate access',
    ],
    cta: 'Coming Soon',
    highlight: false,
    comingSoon: true,
  }
];

export default function PricingBetaSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Choose the plan that fits your musical journey. Get started for free or unlock professional features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                tier.highlight 
                  ? 'bg-white dark:bg-gray-800 border-purple-500 shadow-2xl scale-105 z-10' 
                  : 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 shadow-xl'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Beta Special
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tier.tagline}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  {tier.period && <span className="text-gray-500 dark:text-gray-400 ml-1">{tier.period}</span>}
                </div>
                {tier.betaPrice && (
                  <div className="mt-2 text-purple-600 dark:text-purple-400 font-bold text-sm animate-pulse">
                    ✨ {tier.betaPrice}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.comingSoon ? '#' : APP_URL}
                target={tier.comingSoon ? undefined : "_blank"}
                rel={tier.comingSoon ? undefined : "noopener noreferrer"}
                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                  tier.comingSoon
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                    : tier.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 shadow-lg'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 max-w-3xl mx-auto flex items-start space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
            <strong>About Beta Access:</strong> We are currently in our public beta phase. To show our gratitude for early adopters, the <strong>Artist Tier</strong> features are provided entirely for free. Your feedback during this period is invaluable in helping us build the ultimate collaborative music experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

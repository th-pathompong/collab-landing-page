'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experienceModes = [
  {
    title: 'Perform Room',
    subtitle: 'Live Jamming & Interaction',
    description: 'The place for spontaneous creativity. Join a room as a band member or audience, use virtual instruments, and jam in real-time with ultra-low latency voice chat. Supports up to 8 users per room.',
    features: [
      'Real-time instrument & sequencer sync',
      'Ultra-low latency WebRTC voice chat',
      'Shadow Capture (Rolling 30s buffer)',
      'HLS Broadcast for Audience Mode'
    ],
    image: '/images/perform-room.webp',
    color: 'bg-perform-500'
  },
  {
    title: 'Arrange Room',
    subtitle: 'Collaborative DAW & Production',
    description: 'Take your ideas further. A collaborative digital audio workstation where multiple users can edit tracks, regions, and notes simultaneously. Supports up to 10 users per room.',
    features: [
      'Multi-track timeline & Piano Roll',
      'Audio & MIDI recording (Voice-to-MIDI)',
      'Collaborative region locking system',
      'Export MIDI & Multitrack WAV stems'
    ],
    image: '/images/arrange-room.webp',
    color: 'bg-arrange-500'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            One App, Two Unique Experiences
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you want to jam live or produce something together, there&apos;s a room for that.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experienceModes.map((mode, index) => (
            <motion.div 
              key={mode.title}
              className="relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-8 flex flex-col h-full"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`inline-block px-4 py-1 rounded-full ${mode.color} text-white text-sm font-semibold mb-6 w-fit`}>
                {mode.subtitle}
              </div>
              <h3 className="text-3xl font-bold mb-4">{mode.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                {mode.description}
              </p>
              
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {mode.features.map(feature => (
                    <li key={feature} className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                      <span className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-full ${mode.color} flex items-center justify-center text-white text-[10px]`}>
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mt-auto shadow-inner bg-gray-900">
                <Image 
                  src={mode.image} 
                  alt={mode.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                /> 
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

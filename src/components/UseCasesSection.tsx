'use client';

import { motion } from 'framer-motion';
import { Users, Music, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const useCases = [
  {
    title: 'For Bands & Groups',
    icon: <Users className="w-8 h-8" />,
    description: 'No more traveling miles for a rehearsal. Open a Perform Room, invite your bandmates, and jam live from anywhere. Perfect for writing sessions and spontaneous improvisation.',
    features: ['Real-time audio sync', 'Low-latency voice chat', 'Multi-user instrument control'],
    image: '/images/perform-room.webp',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'For Bedroom Producers',
    icon: <Music className="w-8 h-8" />,
    description: 'Stop sending large project files back and forth. Use the Arrange Room to produce tracks together in real-time. Edit MIDI, record vocals, and arrange your masterpiece collectively.',
    features: ['Collaborative DAW', 'Shared track timeline', 'High-quality stems export'],
    image: '/images/arrange-room.webp',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'For Beginners',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Making music shouldn’t be hard. Our built-in music theory assistants and AI pattern generators help you stay in scale and create professional-sounding loops in minutes.',
    features: ['AI Pattern Generation', 'Scale & Chord Assistance', 'Intuitive QWERTY mapping'],
    image: '/images/music-theory-assist.webp',
    color: 'from-amber-500 to-orange-600'
  }
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built for Every Creator
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you’ve been playing for years or just want to try something new, COLLAB meets you where you are.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10`} />
                <Image 
                  src={useCase.image} 
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 text-white">
                  {useCase.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <ul className="space-y-2">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

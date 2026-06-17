'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InstrumentsSection() {
  return (
    <section id="instruments" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-900 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <Image 
          src="/images/various-instruments-selection.webp" 
          alt="" 
          fill
          className="object-cover transform scale-150 -translate-x-16 -translate-y-16 blur-md"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          High-Quality Virtual Instruments
        </motion.h2>
        
        {/* Sound Engine Info */}
        <motion.div 
          className="text-center mb-16 bg-brand-50 dark:bg-brand-900/20 p-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Studio-Grade Sound Engines</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
            Experience professional sound quality with our integrated instrument engines, optimized for low-latency performance in the browser.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-brand-100 dark:border-brand-900/30">
              <h4 className="font-semibold text-brand dark:text-brand-300 mb-2">🎵 Multi-Sampled Instruments</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Powered by <strong>smplr</strong> - A high-performance soundfont engine delivering authentic acoustic and electronic instrument sounds.</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-brand-100 dark:border-brand-900/30">
              <h4 className="font-semibold text-brand dark:text-brand-300 mb-2">🔊 Advanced Synthesis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Powered by <strong>Tone.js</strong> - Industry-standard Web Audio framework providing powerful analog and FM synthesis capabilities.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Guitar & Bass */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-perform-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎸</span>
                </span>
                Guitar & Bass
              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  Multiple playing modes with built-in music theory assistance. Powered by smplr&apos;s extensive soundfont library for authentic instrument sounds.
                </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-perform-500 rounded-full"></span>
                  <span className="font-medium">Melody Mode with Scale Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-perform-500 rounded-full"></span>
                  <span className="font-medium">Chord Mode with Progressions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-perform-500 rounded-full"></span>
                  <span className="font-medium">Basic Mode for Free Playing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-perform-500 rounded-full"></span>
                  <span className="font-medium">smplr Soundfont Engine</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/guitar-chord-trigger.webp" 
                alt="Guitar Chord Trigger Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* Keyboard & Synthesizer */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/keyboard-chord-trigger.webp" 
                alt="Keyboard Chord Trigger Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-arrange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎹</span>
                </span>
                Keyboard & Synthesizer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                QWERTY-based musical mapping with intuitive key combinations. Advanced synthesizer with analog and FM synthesis powered by Tone.js.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-arrange-500 rounded-full"></span>
                  <span className="font-medium">QWERTY Musical Mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-arrange-500 rounded-full"></span>
                  <span className="font-medium">Analog & FM Synthesis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-arrange-500 rounded-full"></span>
                  <span className="font-medium">Chord Trigger System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-arrange-500 rounded-full"></span>
                  <span className="font-medium">Tone.js Audio Engine</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Drum Machine */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🥁</span>
                </span>
                Drum Machine & Drumpad
              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                16-pad layout with 3 banks (48 total pads). Customizable GM mapping with high-quality samples and precise volume control.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">48 Pads across 3 pages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">Per-pad Volume & Velocity sliders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">Save & Load Pad Presets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">General MIDI standard percussion set</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/drumpad.webp" 
                alt="Drumpad Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* Step Sequencer */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/sequencer.webp" 
                alt="Step Sequencer Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎼</span>
                </span>
                Step Sequencer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                16-step grid with pattern creation and real-time editing. Create complex musical arrangements and collaborate on sequences together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">16-Step Grid</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">Pattern Creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">Real-Time Editing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
                  <span className="font-medium">Collaborative Sequencing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

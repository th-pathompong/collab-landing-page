'use client';

import { motion } from 'framer-motion';
import { Mic, Zap, Sparkles, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

const aiFeatures = [
  {
    id: 'scale',
    icon: <Mic className="w-6 h-6" />,
    title: 'Hum-to-Find Scale',
    description: 'Not sure about the key? Just sing or hum into your microphone. Our AI detects the pitch and suggests the perfect musical scale for your room.',
    badge: 'BETA',
    image: '/images/ai-scale-sync.webp'
  },
  {
    id: 'composer',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI Composer (Prompt-to-MIDI)',
    description: 'Describe what you want—a funky bassline or a sad piano melody. Gemini 3.0 Flash will generate it for you instantly.',
    badge: 'EXPERIMENTAL',
    image: '/images/ai-composer.webp'
  },
  {
    id: 'idea',
    icon: <Zap className="w-6 h-6" />,
    title: 'Idea Capture (Tap + Voice)',
    description: 'Tap your tempo and sing your heart out. COLLAB automatically creates a track with your idea, quantized to your rhythm.',
    badge: 'BETA',
    image: '/images/ai-idea-capture.webp'
  },
  {
    id: 'recommender',
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'AI Chord Recommender',
    description: 'Get real-time suggestions for the next chord in your progression based on the mood and scale of your session.',
    badge: 'COMING SOON',
    image: '/images/tools-section.webp'
  }
];

export default function AIFeaturesSection() {
  return (
    <section id="ai-features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-bold mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            THE FUTURE OF CREATION
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Next-Gen AI Music Assistants
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Bridge the gap between inspiration and production with our experimental AI-powered tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {aiFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="p-6 rounded-2xl border bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    feature.badge === 'BETA' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' : 
                    feature.badge === 'EXPERIMENTAL' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' :
                    'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                  }`}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Composite Stack - Static Layout */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Layer 3: Scale Sync (Back - Top Left) */}
              <div 
                className="absolute top-0 left-0 w-[60%] aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 dark:border-gray-800 bg-gray-900 z-10 translate-x-[-10%] translate-y-[-10%]"
              >
                <Image src="/images/ai-scale-sync.webp" alt="Scale Sync" fill sizes="(max-width: 768px) 60vw, 30vw" className="object-contain p-2" />
              </div>

              {/* Layer 2: Idea Capture (Middle - Bottom Right) */}
              <div 
                className="absolute bottom-4 right-0 w-[65%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 dark:border-gray-800 bg-gray-900 z-20 translate-x-[5%] translate-y-[5%]"
              >
                <Image src="/images/ai-idea-capture.webp" alt="Idea Capture" fill sizes="(max-width: 768px) 65vw, 35vw" className="object-contain p-2" />
              </div>

              {/* Layer 1: AI Composer (Front - Center) */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white dark:border-gray-700 bg-gray-900 z-30"
              >
                <Image src="/images/ai-composer.webp" alt="AI Composer" fill sizes="(max-width: 768px) 75vw, 40vw" className="object-contain p-2" />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full -z-10"></div>
            </div>
            
            {/* Disclaimer Box - Floating style */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md p-4 rounded-xl bg-amber-50/90 dark:bg-amber-900/20 backdrop-blur-md border border-amber-100 dark:border-amber-900/30 z-50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[11px] sm:text-xs text-amber-700 dark:text-amber-400 flex items-start italic leading-tight">
                <span className="mr-2">⚠️</span>
                <span>
                  <strong>Experimental:</strong> Active beta phase. Improving stability daily.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

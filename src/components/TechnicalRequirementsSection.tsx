'use client';

import { motion } from 'framer-motion';

const technicalRequirements = [
  {
    icon: '⚡',
    title: 'Socket.IO & WebRTC',
    description: 'We use a hybrid approach of Socket.IO for state sync and WebRTC mesh for real-time voice, ensuring low latency and high reliability.',
    status: 'High Performance'
  },
  {
    icon: '🧬',
    title: 'Real-Time Sync Engine',
    description: 'Powered by an Ephemeral/Commit pattern and per-room mutex to ensure seamless synchronization across all collaborators.',
    status: 'Custom Engine'
  },
  {
    icon: '🎤',
    title: 'Low-Latency Voice Chat',
    description: 'WebRTC-powered voice chat prioritized for timing, perfect for synchronized musical collaboration and communication.',
    status: 'Optimized Audio'
  },
  {
    icon: '🛠️',
    title: 'Bun Runtime',
    description: 'Built on Bun for ultra-fast performance, improved developer experience, and modern TypeScript support.',
    status: 'Modern Stack'
  },
  {
    icon: '🔌',
    title: 'Full MIDI Support',
    description: 'Connect your physical MIDI controllers directly via the Web MIDI API. Optimized for Chromium-based browsers.',
    status: 'Pro Ready'
  },
  {
    icon: '🌍',
    title: 'Regional Infrastructure',
    description: 'Currently optimized for Southeast Asia with high-performance Railway clusters and Redis state persistence.',
    status: 'Stability'
  }
];

export default function TechnicalRequirementsSection() {
  return (
    <section id="technical-requirements" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-brand-50 dark:bg-brand-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Requirements & Notes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Important information to help you get the best jamming experience. These details ensure smooth performance and set realistic expectations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalRequirements.map((requirement, index) => (
            <motion.div
              key={requirement.title}
              className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-brand-100 dark:border-brand-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{requirement.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {requirement.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-md bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300">
                      {requirement.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div 
          className="mt-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Pro Tips for Best Performance
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 dark:text-amber-400">•</span>
              <span>Use a Chromium-based browser (Chrome, Edge, Brave) for full MIDI and Audio support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 dark:text-amber-400">•</span>
              <span>Connect via Ethernet/LAN for the most stable real-time synchronization</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 dark:text-amber-400">•</span>
              <span>Use wired headphones to minimize audio latency and prevent feedback loops</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 dark:text-amber-400">•</span>
              <span>Start with a &quot;Perform Room&quot; for quick jamming, or &quot;Arrange Room&quot; for production</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
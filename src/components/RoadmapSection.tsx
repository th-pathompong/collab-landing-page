'use client';

import { motion } from 'framer-motion';
import { Rocket, Bot, Zap } from 'lucide-react';

const milestones = [
  {
    phase: 'Phase 5',
    title: 'The Jam-to-Arrange Bridge',
    icon: <Zap className="w-6 h-6" />,
    description: 'Introducing the "Catch!" mechanic. Retroactively save the best moments from your live jams and instantly turn them into structured projects in the Arrange Room.',
    status: 'IN DEVELOPMENT',
    color: 'border-amber-500 text-amber-500'
  },
  {
    phase: 'Phase 6',
    title: 'Virtual Sessionists',
    icon: <Bot className="w-6 h-6" />,
    description: 'Never play alone again. Our autonomous AI bandmates react to your dynamics and style, providing real-time accompaniment that feels alive.',
    status: 'PLANNED',
    color: 'border-brand-500 text-brand-500'
  },
  {
    phase: 'Phase 7',
    title: 'AI Ecosystem & MCP',
    icon: <Rocket className="w-6 h-6" />,
    description: 'Full integration with external AI agents. Control your studio with natural language and collaborate with specialized music-focused AI models.',
    status: 'RESEARCH',
    color: 'border-arrange-500 text-arrange-500'
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-50 dark:bg-brand-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Evolution Roadmap
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We’re not just building a DAW; we’re building the future of collaborative music creation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Now / Present Section */}
          <div className="flex justify-center mb-12 lg:mb-24 relative z-20">
            <motion.div 
              className="max-w-lg w-full p-6 lg:p-8 rounded-3xl bg-green-50 dark:bg-green-900/10 border-2 border-green-500 shadow-xl text-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Present: The Beta Era</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Live PoC Platform</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Experience real-time jamming with 5 studio-grade instruments, ultra-low latency voice chat, and synchronized DAW arrangement. Built for instant collaboration.
              </p>
              {/* Connector Point */}
              <div className="hidden lg:block absolute -bottom-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-gray-950 shadow-md" />
            </motion.div>
          </div>

          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-58 bottom-16 w-0.5 bg-brand-300 -translate-x-1/2 opacity-30" />

          <div className="space-y-12 lg:-space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.title}
                className={`relative flex flex-col lg:flex-row items-center group/item ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ zIndex: index }}
              >
                {/* Content */}
                <div className={`w-full lg:w-1/2 p-2 lg:p-12 z-20`}>
                  <div className={`p-6 lg:p-8 rounded-3xl bg-white dark:bg-gray-900 border-2 ${milestone.color.split(' ')[0]} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-bold uppercase tracking-wider ${milestone.color.split(' ')[1]}`}>
                        {milestone.phase}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-gray-800 rounded-md border border-gray-100 dark:border-gray-700">
                        {milestone.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="mr-3">{milestone.icon}</span>
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 z-10 items-center justify-center shadow-lg">
                  <div className={`w-3 h-3 rounded-full ${milestone.color.split(' ')[1].replace('text-', 'bg-')}`} />
                </div>

                {/* Empty space for layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* View Full Roadmap Button */}
          <motion.div 
            className="mt-24 lg:mt-32 text-center relative z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="/about#roadmap" 
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-brand text-brand dark:text-brand-300 font-bold hover:bg-brand hover:text-white transition-all duration-300 group"
            >
              View Full Detailed Roadmap
              <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

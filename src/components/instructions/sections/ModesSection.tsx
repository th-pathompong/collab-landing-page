'use client';
import { Layout, Users, Play, Radio } from 'lucide-react';

export default function ModesSection() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Layout className="w-8 h-8 text-brand" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Experience Modes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Understanding the difference between jamming and production
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Perform Room */}
        <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl border border-brand-200 dark:border-brand-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-brand-600 rounded-lg">
              <Play className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Perform Room</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            The ultimate playground for spontaneous creativity and live collaboration. Join a room as a band member or an audience.
          </p>
          <ul className="space-y-3">
            {[
              '8-user capacity per room',
              'Real-time instrument jamming',
              'Low-latency voice chat',
              'Audience interaction & streaming',
              'Shadow Capture (Retroactive recording)'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Arrange Room */}
        <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl border border-brand-200 dark:border-brand-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-brand-600 rounded-lg">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Arrange Room</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            A collaborative DAW environment where you can arrange, record, and produce tracks together. Supports up to 10 users.
          </p>
          <ul className="space-y-3">
            {[
              '10-user capacity per room',
              'Collaborative multi-track timeline',
              'Project locking & forking',
              'Professional mixdown & DAW export'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 flex gap-4">
        <Users className="w-6 h-6 text-amber-600 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-amber-900 dark:text-amber-200">Switching Between Modes</h4>
          <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">
            Projects in murva are deeply integrated. You can start a jam in a Perform Room, and then open that project in an Arrange Room to further refine and arrangement your recorded parts.
          </p>
        </div>
      </div>
    </div>
  );
}

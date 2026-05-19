'use client';
import Image from 'next/image';
import { Drum, Target, Volume2 } from 'lucide-react';

export default function DrumSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Drum className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Virtual Drums
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Create beats with drum pads and full drum kits
            </p>
          </div>
        </div>

        {/* Drum Pad Interface */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-red-600" />
            16-Pad Matrix (3 Pages)
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/5-drumpad.png"
              alt="Drum Pad Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Responsive drum pads with velocity sensitivity, per-pad volume, and 3-page bank (48 pads total)
          </p>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Drum Pad Shortcuts (Group A & B)
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Group A (Left 8 Pads)
              </h4>
              <div className="grid grid-cols-4 gap-2 text-center">
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">Q</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">W</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">E</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">R</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">A</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">S</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">D</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">F</kbd>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Group B (Right 8 Pads)
              </h4>
              <div className="grid grid-cols-4 gap-2 text-center">
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">U</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">I</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">O</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">P</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">J</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">K</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">L</kbd>
                <kbd className="p-2 bg-gray-100 dark:bg-gray-600 rounded">;</kbd>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
               <span className="text-xs font-bold text-gray-500 uppercase">Switch Page</span>
               <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs border border-gray-200 dark:border-gray-600">Z / X</kbd>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
               <span className="text-xs font-bold text-gray-500 uppercase">Velocity +/-</span>
               <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs border border-gray-200 dark:border-gray-600">- / +</kbd>
            </div>
          </div>
        </div>

        {/* Advanced Controls */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Volume2 className="w-6 h-6 text-green-600" />
            Advanced Drum Controls
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
               <h4 className="font-bold text-sm mb-2">Edit Volumes Mode</h4>
               <p className="text-xs text-gray-600 dark:text-gray-400">Toggle &quot;Edit Volumes&quot; to show individual volume sliders for every pad. Perfectly balance your kit without changing velocity.</p>
            </div>
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
               <h4 className="font-bold text-sm mb-2">Preset Manager</h4>
               <div className="text-xs text-gray-600 dark:text-gray-400">
                 <p>Save your customized pad mappings and volumes as presets. Includes built-in defaults:</p>
                 <ul className="mt-2 list-disc list-inside">
                   <li>Standard Pop/Rock Kit</li>
                   <li>Vintage 808/909 Electronic</li>
                   <li>Acoustic Jazz Brush</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>

        {/* Collaboration Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            🤝 Drummer Collaboration Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Be the foundation:</strong> Everyone relies on your timing</li>
              <li>• <strong>Lock with bass:</strong> Create a tight rhythm section</li>
              <li>• <strong>Support the song:</strong> Match the energy and feel</li>
              <li>• <strong>Signal changes:</strong> Use fills to lead transitions</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Less is more:</strong> Simple, solid beats often work best</li>
              <li>• <strong>Listen actively:</strong> Respond to what others are playing</li>
              <li>• <strong>Use dynamics:</strong> Build and release tension</li>
              <li>• <strong>Stay connected:</strong> Use voice chat to coordinate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
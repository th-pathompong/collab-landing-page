'use client';
import Image from 'next/image';
import { Layers, Play, RotateCcw, Volume2 } from 'lucide-react';

export default function SequencerSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Layers className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Step Sequencer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Create patterns and sequences for collaborative music making
            </p>
          </div>
        </div>

        {/* Sequencer Overview */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/2-step-sequencer.png"
              alt="Step Sequencer Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            16-step sequencer with multiple tracks for creating complex patterns
          </p>
        </div>

        {/* What is a Step Sequencer */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What is a Step Sequencer?
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              A step sequencer is a powerful tool for creating rhythmic patterns and musical sequences 
              for your currently selected instrument. Instead of playing notes in real-time, you program 
              when each sound should trigger by activating specific steps in a 16-step grid pattern.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Perfect for creating repeating patterns like drum beats, bass lines, arpeggios, and chord 
              progressions that loop continuously while you play other parts or jam with other instruments.
            </p>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            How to Use the Sequencer
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Select Instrument</h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                Choose your instrument first - the sequencer will create patterns for that instrument
              </p>
            </div>

            <div
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Activate Steps</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Click on grid squares to activate steps where you want sounds to trigger
              </p>
            </div>

            <div
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Press Play</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Hit the play button to start the sequence and hear your pattern loop
              </p>
            </div>

            <div
              className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Switch & Layer</h4>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                Switch instruments to create different patterns, or play live over your sequence
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sequencer Features
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI Pattern Generation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Describe a style or mood and let AI generate an initial pattern for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">4 Banks (A, B, C, D)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Switch between 4 independent patterns using keys 6, 7, 8, and 9.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Continuous Loop Mode</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Play banks in sequence (A → B → C → D) for longer, evolving compositions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Step Velocity & Gate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Adjust volume and note length for every single step in the pattern.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Scale View Modes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Switch between &quot;All Notes&quot; and &quot;Scale Notes&quot; to stay perfectly in key.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Variable Step Speed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Change beat length from 1/16 up to 16 beats per step for various styles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Ideas */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Creative Ideas & Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border border-pink-200 dark:border-pink-700 rounded-xl p-6">
              <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-3">🥁 Drum Patterns</h4>
              <ul className="space-y-2 text-sm text-pink-600 dark:text-pink-400">
                <li>• Start with kick on 1 and 3, snare on 2 and 4</li>
                <li>• Add hi-hats on every step for energy</li>
                <li>• Try off-beat kicks for interesting rhythms</li>
                <li>• Layer different percussion sounds</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🎵 Bass Lines</h4>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>• Follow the root notes of your chord progression</li>
                <li>• Add movement with passing notes</li>
                <li>• Try syncopated rhythms for groove</li>
                <li>• Match the kick drum pattern</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">🎹 Arpeggios</h4>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• Program chord notes in sequence</li>
                <li>• Use faster note values for flowing melodies</li>
                <li>• Try different octaves for range</li>
                <li>• Combine with scale helper for harmony</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🎶 Collaboration</h4>
              <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <li>• Share sequence patterns with room members</li>
                <li>• Build on each other&apos;s patterns</li>
                <li>• Take turns leading different sections</li>
                <li>• Create call-and-response patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            💡 Pro Tips for Sequencing
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Start Simple:</strong> Begin with basic patterns and add complexity gradually</li>
              <li>• <strong>Leave Space:</strong> Not every step needs a sound - silence is important</li>
              <li>• <strong>Listen to Others:</strong> Make sure your sequence complements other players</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Use Velocity:</strong> Vary the volume of different steps for dynamics</li>
              <li>• <strong>Experiment:</strong> Try unexpected patterns and rhythms</li>
              <li>• <strong>Build Arrangements:</strong> Turn tracks on/off to create song sections</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
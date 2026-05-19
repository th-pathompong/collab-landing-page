'use client';
import Image from 'next/image';
import { Piano, Music, Layers3, Heart, Sparkles } from 'lucide-react';

export default function KeyboardSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Piano className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Virtual Keyboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Master the virtual piano with multiple playing modes
            </p>
          </div>
        </div>

        {/* Basic Keyboard */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Piano className="w-6 h-6 text-blue-600" />
            Basic Keyboard Mode
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/3-1-keyboard-basic.png"
              alt="Basic Keyboard Mode"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Traditional piano layout with white and black keys
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Basic Mode Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>• <strong>Traditional Layout:</strong> Standard piano key arrangement</li>
                <li>• <strong>Chromatic Scale:</strong> Access to all 12 notes per octave</li>
                <li>• <strong>Multiple Octaves:</strong> Switch between different octave ranges</li>
                <li>• <strong>Velocity Control:</strong> Adjust playing dynamics</li>
              </ul>
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>• <strong>Sustain Pedal:</strong> Hold notes for longer duration</li>
                <li>• <strong>Computer Keyboard:</strong> Play with QWERTY keys</li>
                <li>• <strong>Mouse/Touch:</strong> Click or tap virtual keys</li>
                <li>• <strong>MIDI Support:</strong> Connect external keyboards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Melody Scale Mode */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Music className="w-6 h-6 text-green-600" />
            Melody Scale Mode
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/3-2-keyboard-melody-scale.png"
              alt="Melody Scale Mode"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Scale-based layout highlighting notes that work well together
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Melody Scale Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-green-600 dark:text-green-400">
                <li>• <strong>Scale Highlighting:</strong> Shows which notes are in the selected scale</li>
                <li>• <strong>Music Theory Help:</strong> Perfect for learning harmony</li>
                <li>• <strong>Root Note Selection:</strong> Choose your key (C, D, E, etc.)</li>
                <li>• <strong>Scale Types:</strong> Major and minor scales available</li>
              </ul>
              <ul className="space-y-2 text-green-600 dark:text-green-400">
                <li>• <strong>Color-Coded Keys:</strong> Visual feedback for scale degrees</li>
                <li>• <strong>Beginner Friendly:</strong> Reduces wrong notes</li>
                <li>• <strong>Jam Ready:</strong> Always sounds harmonious</li>
                <li>• <strong>Quick Melodies:</strong> Easy to create musical phrases</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chord Mode */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers3 className="w-6 h-6 text-purple-600" />
            Chord Mode
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/3-3-keyboard-chord.png"
              alt="Keyboard Chord Mode"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            One-key chord playing with automatic chord quality based on scale
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Chord Mode Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>One-Key Chords:</strong> Play full triads (I–VII) with a single key</li>
                <li>• <strong>Smart Harmony:</strong> Quality (Maj/Min/Dim) auto-detected from scale</li>
                <li>• <strong>Arpeggio Control:</strong> N / M keys to adjust arpeggio speed</li>
                <li>• <strong>Voicing & Spread:</strong> C / V keys to change chord inversion</li>
              </ul>
              <ul className="space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>Modifiers:</strong> Hold Q(6), W(7), E(M7), R(add9), A(sus2), S(sus4)</li>
                <li>• <strong>Maj/Min Toggle:</strong> Press D to force parallel major/minor</li>
                <li>• <strong>Visual Suffix:</strong> See active modifiers on keys (e.g., Am7)</li>
                <li>• <strong>Root Note Row:</strong> Separate row for playing individual bass notes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hybrid Mode */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-600" />
            Hybrid Mode
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">The Best of Both Worlds:</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400 mb-4 leading-relaxed">
              Hybrid mode splits your interface and keyboard into two sections, allowing you to play chords with your left hand and melodies with your right hand simultaneously.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h5 className="font-bold mb-2">Left Side: Chord Panel</h5>
                <ul className="space-y-1 text-xs">
                  <li>• 7 scale-degree triad keys</li>
                  <li>• 8 root note keys for bass accompaniment</li>
                  <li>• Clickable chord modifier buttons</li>
                </ul>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h5 className="font-bold mb-2">Right Side: Melody Panel</h5>
                <ul className="space-y-1 text-xs">
                  <li>• Two rows of scale-constrained notes</li>
                  <li>• Upper row for higher octave</li>
                  <li>• Impossible to play out-of-scale notes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Keyboard Shortcuts & Controls
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Core Controls</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Octave Shift</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">Z / X</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Sustain (Hold / Toggle)</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">Space / \</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Velocity (10 steps)</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">- / +</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Sharp Modifier (+1 semitone)</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">Shift</kbd>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Chord Modifiers</h4>
              <div className="grid grid-cols-2 gap-y-2 text-xs">
                <div className="flex justify-between items-center pr-4">
                  <span className="text-gray-500">Add 6</span>
                  <kbd className="px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">Q</kbd>
                </div>
                <div className="flex justify-between items-center pl-4">
                  <span className="text-gray-500">Sus2</span>
                  <kbd className="px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">A</kbd>
                </div>
                <div className="flex justify-between items-center pr-4">
                  <span className="text-gray-500">Dom 7</span>
                  <kbd className="px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">W</kbd>
                </div>
                <div className="flex justify-between items-center pl-4">
                  <span className="text-gray-500">Sus4</span>
                  <kbd className="px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">S</kbd>
                </div>
                <div className="flex justify-between items-center pr-4">
                  <span className="text-gray-500">Major 7</span>
                  <kbd className="px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">E</kbd>
                </div>
                <div className="flex justify-between items-center pl-4">
                  <span className="text-gray-500">Maj/Min Toggle</span>
                  <kbd className="px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">D</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playing Techniques */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Playing Techniques & Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border border-pink-200 dark:border-pink-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-pink-600" />
                <h4 className="font-semibold text-pink-800 dark:text-pink-300">For Beginners</h4>
              </div>
              <ul className="space-y-2 text-sm text-pink-600 dark:text-pink-400">
                <li>• Start with <strong>Melody Scale Mode</strong> to avoid wrong notes</li>
                <li>• Use <strong>Chord Mode</strong> to play accompaniment easily</li>
                <li>• Practice with the <strong>metronome</strong> to stay in time</li>
                <li>• Experiment with different <strong>scales and keys</strong></li>
                <li>• Try <strong>simple chord progressions</strong> like I-V-vi-IV</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Piano className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800 dark:text-blue-300">For Advanced Players</h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>• Use <strong>Basic Mode</strong> for full chromatic control</li>
                <li>• Connect <strong>MIDI controllers</strong> for better expression</li>
                <li>• Layer with <strong>sequencer patterns</strong> for complex arrangements</li>
                <li>• Experiment with <strong>chord voicings</strong> and inversions</li>
                <li>• Combine different modes within the same performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            🤝 Collaboration Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Coordinate scales:</strong> Make sure everyone is playing in the same key</li>
              <li>• <strong>Share the spotlight:</strong> Take turns playing lead and accompaniment</li>
              <li>• <strong>Listen actively:</strong> Leave space for other instruments</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Use chord mode for comping:</strong> Perfect backing for soloists</li>
              <li>• <strong>Layer with bass:</strong> Coordinate chord progressions</li>
              <li>• <strong>Follow the drummer:</strong> Lock in with the rhythm section</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
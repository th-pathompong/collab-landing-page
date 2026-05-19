'use client';
import Image from 'next/image';
import { Guitar, Music, Layers3, Zap } from 'lucide-react';

export default function GuitarSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Guitar className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Virtual Guitar & Bass
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Rock out with virtual fretboards and chord triggers
            </p>
          </div>
        </div>

        {/* Basic Guitar */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Guitar className="w-6 h-6 text-orange-600" />
            Basic Guitar Mode
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/4-1-guitar-basic.png"
              alt="Basic Guitar Mode"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Interactive fretboard with individual string control
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6">
            <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Basic Mode Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-orange-600 dark:text-orange-400">
                <li>• <strong>Virtual Fretboard:</strong> Click frets to play individual notes</li>
                <li>• <strong>6-String Layout:</strong> Standard guitar tuning (E-A-D-G-B-E)</li>
                <li>• <strong>Multiple Frets:</strong> Access to different positions on the neck</li>
                <li>• <strong>String Muting:</strong> Control which strings ring out</li>
              </ul>
              <ul className="space-y-2 text-orange-600 dark:text-orange-400">
                <li>• <strong>Bend & Slide:</strong> Expressive playing techniques</li>
                <li>• <strong>Open Strings:</strong> Play unfretted strings</li>
                <li>• <strong>Velocity Control:</strong> Adjust picking dynamics</li>
                <li>• <strong>Realistic Sound:</strong> High-quality sampled guitar tones</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Melody Scale Guitar */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Music className="w-6 h-6 text-blue-600" />
            Melody Scale Mode
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/4-2-guitar-melody-scale.png"
              alt="Guitar Melody Scale Mode"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Scale patterns highlighted across the fretboard
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Melody Scale Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>• <strong>Scale Visualization:</strong> Highlighted frets show scale notes</li>
                <li>• <strong>Position Patterns:</strong> Learn common scale shapes</li>
                <li>• <strong>Root Note Indicators:</strong> See where the key center is</li>
                <li>• <strong>Mode Exploration:</strong> Discover different scale positions</li>
              </ul>
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>• <strong>Lead Playing:</strong> Perfect for solos and melodies</li>
                <li>• <strong>Pentatonic Patterns:</strong> Rock and blues scale shapes</li>
                <li>• <strong>Color Coding:</strong> Visual feedback for scale degrees</li>
                <li>• <strong>Jam-Friendly:</strong> Always sounds musical with others</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chord Strum Mode */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers3 className="w-6 h-6 text-green-600" />
            Chord Strum Mode
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/4-3-guitar-chord-strum.png"
              alt="Guitar Chord Strum Mode"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            One-key chord triggers with realistic strumming and picking
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Chord Strum Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-green-600 dark:text-green-400">
                <li>• <strong>Instant Chords:</strong> 7 scale-degree keys (A–G) for full chords</li>
                <li>• <strong>Picking &amp; Strumming:</strong> &quot;.&quot; for Down (1.0x vel), &quot;,&quot; for Up (1.5x vel)</li>
                <li>• <strong>Power Chord:</strong> Toggle &quot;\&quot; to play only root + 5th</li>
                <li>• <strong>Brushing Speed:</strong> N / M keys to adjust strum arpeggio timing</li>
              </ul>
              <ul className="space-y-2 text-green-600 dark:text-green-400">
                <li>• <strong>Guitar Modifiers:</strong> Q(Add6), W(Dom7), E(Maj7), R(add9), T(sus2), Y(sus4)</li>
                <li>• <strong>Maj/Min Toggle:</strong> Press U to force parallel major/minor</li>
                <li>• <strong>Hammer-on/Pull-off:</strong> Chain notes within 200ms of a pick</li>
                <li>• <strong>Voicing:</strong> C / V keys to change chord position</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bass Guitar */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            Bass Guitar
          </h3>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6 ">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Bass Specific Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>Melody Mode:</strong> 2 virtual strings with 4th-interval layout</li>
                <li>• <strong>Always Root:</strong> Toggle &quot;\&quot; to lock both rows to chord roots</li>
                <li>• <strong>Pick Direction:</strong> &quot;.&quot; for Down, &quot;,&quot; for Up (1.5x velocity)</li>
                <li>• <strong>Articulations:</strong> Expressive Hammer-on (0.8x) & Pull-off (0.7x)</li>
              </ul>
              <ul className="space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>Range:</strong> E1–D#3 range for deep, punchy tones</li>
                <li>• <strong>Octave Shift:</strong> Z / X keys available in Melody mode</li>
                <li>• <strong>Sustain:</strong> Space for momentary hold, \ for toggle</li>
                <li>• <strong>Sharp Modifier:</strong> Hold Shift for +1 semitone transposition</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Techniques */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Playing Techniques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                🎸 Lead Guitar
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use scale mode for solos</li>
                <li>• Focus on pentatonic patterns</li>
                <li>• Bend notes for expression</li>
                <li>• Play over chord progressions</li>
                <li>• Leave space for other instruments</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                🎵 Rhythm Guitar
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use chord strum mode</li>
                <li>• Follow the metronome</li>
                <li>• Create strumming patterns</li>
                <li>• Support the harmonic structure</li>
                <li>• Complement the bass line</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                🎼 Bass Lines
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Lock in with the drums</li>
                <li>• Emphasize chord roots</li>
                <li>• Create walking bass lines</li>
                <li>• Use rhythmic patterns</li>
                <li>• Support the harmony</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Controls & Shortcuts */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Controls & Shortcuts
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Playing Controls</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Pick/Strum Down (Normal)</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">.</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Pick/Strum Up (Heavy)</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">,</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Power Chord / Always Root</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">\</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Octave (Bass/Melody)</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">Z / X</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Velocity Adjust</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">- / +</kbd>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Chord Mapping</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400 block mb-2">Chord Keys (Scale Degree):</span>
                  <div className="flex flex-wrap gap-1">
                    {['A (I)', 'B (ii)', 'C (iii)', 'D (IV)', 'E (V)', 'F (vi)', 'G (vii°)'].map(key => (
                      <kbd key={key} className="px-2 py-1 bg-green-100 dark:bg-green-600 rounded text-xs">
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400 block mb-2">Guitar Modifiers:</span>
                  <div className="flex flex-wrap gap-1">
                    {['Q(6)', 'W(7)', 'E(M7)', 'R(add9)', 'T(sus2)', 'Y(sus4)', 'U(m/M)'].map(key => (
                      <kbd key={key} className="px-2 py-1 bg-purple-100 dark:bg-purple-600 rounded text-xs">
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Different Styles */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Style-Specific Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">🎸 Rock & Blues</h4>
              <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                <li>• Use pentatonic scales for solos</li>
                <li>• Power chords for rhythm (I, IV, V)</li>
                <li>• Bend notes for emotional expression</li>
                <li>• Palm mute for heavier rhythm</li>
                <li>• Mix single notes with chords</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">🎵 Folk & Pop</h4>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• Focus on chord progressions</li>
                <li>• Use open chord voicings</li>
                <li>• Strumming patterns are key</li>
                <li>• Arpeggiate chords for gentler feel</li>
                <li>• Follow vocal melodies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🎼 Jazz & Fusion</h4>
              <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <li>• Extended chords (7ths, 9ths, 11ths)</li>
                <li>• Complex chord progressions</li>
                <li>• Improvisation over changes</li>
                <li>• Clean tone for chord work</li>
                <li>• Walking bass lines for bass</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">🎸 Bass Playing</h4>
              <ul className="space-y-2 text-sm text-amber-600 dark:text-amber-400">
                <li>• Lock in with the kick drum</li>
                <li>• Emphasize chord root notes</li>
                <li>• Create rhythmic patterns</li>
                <li>• Use passing tones for movement</li>
                <li>• Support the harmonic structure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            🤝 Guitar Collaboration Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Frequency separation:</strong> Lead guitar in higher register, rhythm in mid-range</li>
              <li>• <strong>Take turns:</strong> Alternate between lead and rhythm roles</li>
              <li>• <strong>Support vocals:</strong> Leave space when someone is singing</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Lock with bass:</strong> Coordinate chord progressions and timing</li>
              <li>• <strong>Follow drummer:</strong> Match the groove and feel</li>
              <li>• <strong>Communicate:</strong> Use voice chat to coordinate changes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
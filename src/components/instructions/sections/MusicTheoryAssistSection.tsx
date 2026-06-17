'use client';
import { Sparkles, Music, Grid, Activity } from 'lucide-react';

export default function MusicTheoryAssistSection() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-brand" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Music Theory Assistance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Produce professional-sounding music regardless of skill level
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Scale Synchronization */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-brand-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Scale Intelligence</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300">
              <p>
                In a collaborative room, the Room Owner can set a global key and scale. murva then intelligently synchronizes all instruments to this scale.
              </p>
              <ul>
                <li><strong>Hum-to-Find Scale:</strong> Not sure about the key? Sing or hum into your mic and let our AI suggest the best matching scale for your jam.</li>
                <li><strong>Scale Snapping:</strong> Enable &quot;Snap to Scale&quot; to automatically shift any &quot;wrong&quot; note to the nearest valid scale degree in real-time.</li>
                <li><strong>Scale Highlighting:</strong> Visual cues dim the keys or strings that aren&apos;t in your current scale, keeping you focused on the harmony.</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500">[Screenshot: AI Scale Detection Panel]</p>
            </div>
          </div>
        </section>

        {/* Chord Trigger Matrix */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Grid className="w-6 h-6 text-brand-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Smart Chord Engine</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 order-2 lg:order-1">
              <p className="text-xs text-gray-500">[Screenshot: Chord Quality Auto-Detection]</p>
            </div>
            <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300 order-1 lg:order-2">
              <p>
                Our Chord Helpers don&apos;t just trigger triads—they understand the harmonic context of your room.
              </p>
              <ul>
                <li><strong>Auto-Quality:</strong> The engine knows that a &quot;II&quot; chord in a Major scale should be minor, and a &quot;VII&quot; should be diminished. It handles the theory so you don&apos;t have to.</li>
                <li><strong>Advanced Modifiers:</strong> Add 7ths, Major 7ths, sus2, sus4, or add9 extensions with a single key hold or click.</li>
                <li><strong>Parallel Shift:</strong> Force any chord to its parallel Major or Minor counterpart for expressive, non-diatonic changes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intelligent Mapping */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-brand-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Intelligent Mapping</h3>
          </div>
          <div className="bg-brand-50 dark:bg-brand-900/10 p-5 rounded-xl border border-brand-100 dark:border-brand-900">
            <p className="text-sm text-brand-800 dark:text-brand-300 leading-relaxed">
              When playing on a virtual guitar or keyboard, the system &quot;locks&quot; your input to musical intervals that sound good together. This is powered by our real-time music theory engine that calculates intervals on the fly based on the room&apos;s root key.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

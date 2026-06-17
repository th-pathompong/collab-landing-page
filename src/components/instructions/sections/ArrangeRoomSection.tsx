'use client';
import { FileMusic, Layers, Lock, GitFork, Save, Download, Users } from 'lucide-react';

export default function ArrangeRoomSection() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileMusic className="w-8 h-8 text-brand-600" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Arrange Room (Collaborative DAW)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Advanced production workflows for up to 10 users per room
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {/* Governance & Owners */}
        <section className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-xl border border-brand-100 dark:border-brand-800">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-brand-600" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Room & Project Governance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm mb-2 text-brand-700 dark:text-brand-400">Project Owner</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                The creator of the project. Has exclusive rights to Save, Lock, and Export (DAW/Mixdown). When a project owner joins, they are automatically promoted to Room Owner.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 text-brand-700 dark:text-brand-400">Room Owner</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Manages the ephemeral session. Can kick users, approve new members (for private rooms), and change room-wide settings like BPM and Scale.
              </p>
            </div>
          </div>
        </section>

        {/* The Timeline */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-brand-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Multi-Track Editing</h3>
          </div>
          <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300 max-w-none">
            <p>
              Like a collaborative Google Doc for music, the Arrange Room allows multiple users to edit MIDI and Audio tracks simultaneously.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-1">Region Locking</h4>
                <p className="text-xs">When you edit a region, it locks for others to prevent conflicts. Locks expire after 5 minutes.</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-1">Piano Roll</h4>
                <p className="text-xs">Draw, move, and quantize MIDI notes together in real-time with scale assistance.</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-1">Monitor Share</h4>
                <p className="text-xs">Stream your instrument audio to others so they can hear what you&apos;re playing instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Tools */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-brand-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Advanced Export Tools</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl">
                <h4 className="font-bold text-sm mb-2">DAW Export</h4>
                <p className="text-xs text-gray-500">Generate a ZIP containing MIDI files and multitrack WAVs, pre-formatted for Logic Pro, Ableton, and FL Studio.</p>
             </div>
             <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl">
                <h4 className="font-bold text-sm mb-2">Mixdown</h4>
                <p className="text-xs text-gray-500">Render your final stereo mix directly in the browser using our high-fidelity audio engine.</p>
             </div>
          </div>
        </section>

        {/* Saving & Lock */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Save className="w-6 h-6 text-brand-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Lock & Contributors</h3>
          </div>
          <div className="bg-brand-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  Project owners can <strong>Lock</strong> their work to prevent non-owners from saving over it. Every authorized save automatically credits you in the <strong>Contributor List</strong> shown on the project page.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    <span className="text-xs font-medium">Owner Lock</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="w-5 h-5" />
                    <span className="text-xs font-medium">Community Forking</span>
                  </div>
                </div>
              </div>
              <div className="w-48 h-32 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <p className="text-[10px] text-white/50">[Diagram: Collaboration Flow]</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

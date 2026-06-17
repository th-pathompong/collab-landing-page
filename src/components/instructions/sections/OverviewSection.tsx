'use client';
import Image from 'next/image';
import { Users, Music, Heart, Zap } from 'lucide-react';

export default function OverviewSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Music className="w-8 h-8 text-brand" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to <span className="font-wordmark text-brand dark:text-brand-300">murva</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your gateway to real-time collaborative music making
            </p>
          </div>
        </div>

        {/* App Overview Image */}
        <div className="my-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/lobby-entry.webp"
              alt="murva App Overview"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            Complete app interface showing all instruments and collaboration features
          </p>
        </div>

        {/* What is murva */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What is <span className="font-wordmark text-brand dark:text-brand-300">murva</span>?
          </h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              <span className="font-wordmark text-brand dark:text-brand-300">murva</span> is a revolutionary web-based platform that enables musicians to create music together in real-time,
              regardless of their physical location. Whether you&apos;re a beginner or an experienced musician, our platform provides 
              the tools you need to jam, create, and collaborate.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Perfect for remote jam sessions, music lessons, skill development, or just having fun making music with friends. 
              No installation required - everything runs directly in your browser with professional-quality audio.
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white ">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-xl border border-brand-200 dark:border-brand-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Music className="w-6 h-6 text-brand" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Perform Rooms</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Live jamming environment with synchronized instruments, voice chat, and real-time interaction for bands and audience.
              </p>
            </div>

            <div
              className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-xl border border-brand-200 dark:border-brand-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-brand-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Arrange Rooms</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Collaborative DAW for production. Arrange tracks, fork projects, and manage versions together in real-time.
              </p>
            </div>

            <div
              className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-amber-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Music Theory Assistance</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Intelligent scales, chord triggers, and mapping to help you create professional-sounding music regardless of skill level.
              </p>
            </div>

            <div
              className="bg-perform-50 dark:bg-perform-900/20 p-6 rounded-xl border border-perform-200 dark:border-perform-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-perform-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Pro Tools</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Shadow Capture for retroactive recording, Multi-track DAW editing, and professional export to Logic, Ableton, or FL Studio.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Getting Started
          </h3>
          <div className="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-700 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Create or Join a Room</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Start by creating a new room or joining an existing one with a room code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Choose Your Instrument</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Select from Keyboard, Guitar, Bass, Drums, or Synthesizer based on your preference.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-arrange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Start Jamming!</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Use the virtual instruments, enable voice chat, and start making music together in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Perfect For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Music Enthusiasts</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Anyone who loves music and wants to create with others
              </p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <Users className="w-8 h-8 text-brand-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Remote Bands</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Musicians separated by distance who want to jam together
              </p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <Music className="w-8 h-8 text-brand-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Music Education</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Teachers and students for interactive music lessons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { APP_URL } from './constants/navigation';

function HeroImageInteraction() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const leftClip = 
    hoveredSide === 'left' ? 'polygon(0% 0%, 89.5% 0%, 79.5% 100%, 0% 100%)' :
    hoveredSide === 'right' ? 'polygon(0% 0%, 24.5% 0%, 14.5% 100%, 0% 100%)' :
    'polygon(0% 0%, 54.5% 0%, 44.5% 100%, 0% 100%)';

  const rightClip = 
    hoveredSide === 'left' ? 'polygon(90.5% 0%, 100% 0%, 100% 100%, 80.5% 100%)' :
    hoveredSide === 'right' ? 'polygon(25.5% 0%, 100% 0%, 100% 100%, 15.5% 100%)' :
    'polygon(55.5% 0%, 100% 0%, 100% 100%, 45.5% 100%)';

  return (
    <div 
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800"
      onMouseLeave={() => setHoveredSide(null)}
    >
      {/* Left Side (Perform Room) */}
      <motion.div
        className="absolute inset-0 cursor-pointer"
        animate={{ clipPath: leftClip }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseEnter={() => setHoveredSide('left')}
      >
        <Image 
          src="/images/perform-room.webp"
          alt="Perform Room"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-left"
          priority
        />
        {/* Color Tint Overlay */}
        <div className={`absolute inset-0 transition-all duration-500 pointer-events-none 
          ${hoveredSide === 'left' ? 'bg-indigo-500/0' : 
            hoveredSide === 'right' ? 'bg-indigo-950/50 backdrop-grayscale-[0.5]' : 
            'bg-indigo-500/15'}`} 
        />
        
        <div className={`absolute bottom-6 left-6 transition-all duration-300 ${hoveredSide === 'right' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="bg-black/60 text-white px-4 py-2 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
            <p className="text-xs font-bold text-purple-400 mb-1 tracking-wider uppercase">Live</p>
            <p className="font-bold">Perform Room</p>
          </div>
        </div>
      </motion.div>

      {/* Right Side (Arrange Room) */}
      <motion.div
        className="absolute inset-0 cursor-pointer"
        animate={{ clipPath: rightClip }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseEnter={() => setHoveredSide('right')}
      >
        <Image 
          src="/images/arrange-room.webp"
          alt="Arrange Room"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-right"
          priority
        />
        {/* Color Tint Overlay */}
        <div className={`absolute inset-0 transition-all duration-500 pointer-events-none 
          ${hoveredSide === 'right' ? 'bg-pink-500/0' : 
            hoveredSide === 'left' ? 'bg-pink-950/50 backdrop-grayscale-[0.5]' : 
            'bg-pink-500/10'}`} 
        />

        <div className={`absolute bottom-6 right-6 text-right transition-all duration-300 ${hoveredSide === 'left' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="bg-black/60 text-white px-4 py-2 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
            <p className="text-xs font-bold text-blue-400 mb-1 tracking-wider uppercase">Studio</p>
            <p className="font-bold">Arrange Room</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="how-it-works" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 xl:pt-54 xl:pb-42 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-md"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Fade overlay to blend into section background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/70 via-purple-50/75 to-blue-50/70 dark:from-gray-950/95 dark:via-indigo-950/90 dark:to-blue-950/95" />
      </div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="text-center lg:text-left relative z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 lg:mb-40 tracking-tight leading-tight relative">
              <span className="inline-block whitespace-nowrap">Jam Live. Produce Together.</span>
              <motion.span
                className="block lg:absolute lg:top-10 whitespace-nowrap text-6xl sm:text-7xl md:text-8xl xl:text-9xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold font-accent -rotate-2 z-30 filter drop-shadow-[0_10px_10px_rgba(168,85,247,0.2)] dark:drop-shadow-[0_10px_10px_rgba(168,85,247,0.4)] pr-10"
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                Right Now!
              </motion.span>
            </h1>
            
            {/* Demo Banner */}
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-700 rounded-full">
              <span className="text-purple-800 dark:text-purple-200 text-xs">✨ Currently in beta — Artist tier features are free for everyone</span>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Making music with anyone just feels different. <span className="font-brand">COLLAB</span> brings that session online — no scheduling, no file swaps, no waiting. Share a room link and play.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <a 
                  href={APP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 music-btn shadow-lg"
                >
                  🚀 Jump into the Jam
                </a>
                <p className="text-xs text-center w-full text-gray-500 dark:text-gray-400 ml-1">
                  Free to start<br/>No signup required for Guest Mode
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10">
              <HeroImageInteraction />
            </div>
            {/* Large background image for depth */}
            <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.15 }}>
              <Image 
                src="/images/app-overview.webp" 
                alt="" 
                width={800}
                height={600}
                className="w-[140%] h-[140%] object-cover transform scale-150 -translate-x-10 -translate-y-10 blur-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
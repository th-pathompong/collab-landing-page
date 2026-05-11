import type { Metadata } from "next";
import Script from 'next/script';
import { APP_URL } from "@/components/constants/navigation";

export const metadata: Metadata = {
  title: "About COLLAB - Real-time Collaborative Music Platform",
  description: "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies including React, Next.js, Tone.js, and WebRTC to explore the possibilities of virtual jamming and collaborative music production.",
  openGraph: {
    title: "About COLLAB - Real-time Collaborative Music Platform",
    description: "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies including React, Next.js, Tone.js, and WebRTC to explore the possibilities of virtual jamming and collaborative music production.",
    images: ["/images/og/cover-index.webp"],
  },
  keywords: [
    "COLLAB about",
    "collaborative music platform",
    "real-time music creation",
    "virtual jamming technology",
    "music collaboration POC",
    "web audio development",
    "React music app",
    "Tone.js application",
    "WebRTC music",
    "music technology innovation"
  ],
};

export default function AboutPage() {
  // Structured Data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About COLLAB - Real-time Collaborative Music Platform",
    "description": "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies to explore the possibilities of virtual jamming.",
    "url": "https://jam-band-landing-page.vercel.app/about",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "COLLAB - Jam Band",
      "description": "A Proof of Concept for real-time collaborative music creation platform",
      "applicationCategory": "MusicApplication",
      "author": {
        "@type": "Person",
        "name": "Pathompong Thitithan",
        "url": "http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
      },
      "programmingLanguage": [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js"
      ],
      "runtimePlatform": "Web Browser",
      "softwareRequirements": "Modern web browser with Web Audio API support"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jam-band-landing-page.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://jam-band-landing-page.vercel.app/about"
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About <span className="font-brand">COLLAB</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The next-generation AI-native music ecosystem (BETA)
          </p>
        </div>

        {/* Core Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'PLAY', title: 'Spontaneous Jamming', icon: '🎸', color: 'bg-red-50 dark:bg-red-900/10' },
            { label: 'CREATE', title: 'Professional DAW', icon: '🎹', color: 'bg-blue-50 dark:bg-blue-900/10' },
            { label: 'EVOLVE', title: 'AI-Native Vision', icon: '🤖', color: 'bg-purple-50 dark:bg-purple-900/10' },
          ].map((card) => (
            <div key={card.label} className={`${card.color} p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center shadow-sm`}>
              <div className="text-3xl mb-3">{card.icon}</div>
              <div className="text-[10px] font-black tracking-widest text-gray-400 mb-1">{card.label}</div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200">{card.title}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Our Story */}
          <section id="our-story" className="py-8 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
              Our Story
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="text-xl font-medium text-purple-700 dark:text-purple-400 mb-6">
                We didn&apos;t set out to build a music app.
              </p>
              <p className="leading-relaxed mb-6">
                It started as a question: if browsers can generate sound locally, and notes are just small data packets — could people play music together in real time, over the internet? The answer turned out to be yes. And when early users sat down to try it — many of them without any musical background — what surprised us was how naturally they took to it.
              </p>
              <p className="leading-relaxed font-semibold italic border-l-4 border-blue-400 pl-4 py-1 mb-6 bg-blue-50/50 dark:bg-blue-900/10">
                That response shaped everything that followed.
              </p>
              <p className="leading-relaxed mb-6">
                Music has always been one of the ways humans connect with each other. Long before recorded audio, rhythm and melody were how communities formed. Over time, &quot;making music together&quot; became something that required years of practice, dedicated equipment, and physical proximity — barriers that most people simply never cross.
              </p>
              <p className="leading-relaxed mb-6">
                COLLAB was built to lower those barriers. Not by removing the depth that makes music meaningful, but by making the entry point accessible to everyone — regardless of skill, gear, or location.
              </p>
              <p className="leading-relaxed">
                The product grew from that early experiment into two distinct spaces: a <strong className="text-purple-600 dark:text-purple-400">Perform Room</strong> for live, real-time jamming with others; and an <strong className="text-blue-600 dark:text-blue-400">Arrange Room</strong> for building music collaboratively over time, with a shared workspace that everyone in the session can see and edit simultaneously. No music theory required. No equipment needed. Just people making music together — and occasionally, something worth keeping.
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section id="what-is-collab" className="bg-gradient-to-br from-purple-50/80 to-blue-50/80 dark:from-purple-900/20 dark:to-blue-900/20 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white mr-3 text-sm">?</span>
              What is <span className="ml-1 font-brand">COLLAB</span>?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              COLLAB began as a Proof of Concept (POC)—a simple idea to explore real-time musical collaboration over the web. What started as an experiment to see if users could play instruments together simultaneously has evolved into a high-performance music production ecosystem.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Today, it bridges the gap between spontaneous jamming in <strong>Perform Rooms</strong> and granular, professional arrangement in <strong>Arrange Rooms</strong>, providing a seamless flow from live inspiration to recorded reality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The ultimate vision for COLLAB is to become an <strong>AI-Native Music Ecosystem</strong>. By leveraging the Model Context Protocol (MCP), we are transforming the DAW from a passive tool into an active, collaborative partner—where AI agents can join your session as virtual bandmates or professional co-producers.
            </p>
            <div className="p-5 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/20 dark:border-gray-700/50 shadow-inner">
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed italic">
                🚀 <span className="font-bold text-purple-600 dark:text-purple-400">COLLAB</span> is a high-fidelity Proof of Concept (POC) for a next-generation music platform developed through <span className="font-bold">&quot;vibe-coding&quot;</span>—a synergy between advanced AI agents and creative musical vision. What began as a passion project has evolved into a showcase of real-time synchronization and collaborative DAW capabilities, built at high velocity to bridge the gap between imagination and production-ready software.
              </p>
            </div>
          </section>

          {/* Objectives / Targeting */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Objectives & Targeting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/95 dark:bg-gray-700/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">⚡</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Real-time Synchronized Jamming</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Play high-quality virtual instruments together with ultra-low latency and integrated voice chat.</p>
              </div>
              <div className="bg-white/95 dark:bg-gray-700/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">🎛️</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collaborative DAW Production</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">A full-featured, browser-based workstation for arranging, editing, and producing multitrack projects.</p>
              </div>
              <div className="bg-white/95 dark:bg-gray-700/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-pink-100 dark:border-pink-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">🧠</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Musical Intelligence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Integrated music theory assistance and scale synchronization for harmonized brainstorming sessions.</p>
              </div>
              <div className="bg-white/95 dark:bg-gray-700/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-green-100 dark:border-green-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">🌱</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Open Evolution</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">A community-driven engine featuring project forking, intelligent contributor tracking, and collaborative versioning.</p>
              </div>
              <div className="bg-white/95 dark:bg-gray-700/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-amber-100 dark:border-amber-800 hover:shadow-lg transition-all transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">🎹</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Hardware-Software Synergy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Seamless MIDI controller integration and multi-device connectivity for flexible performance setups.</p>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Roadmap
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-green-500 from-[33%] via-purple-500 via-[66%] to-blue-500"></div>

              {/* PoC Phase - Combined Current + Improvements */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      PoC Phase - Real-time Jamming Platform
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Full-featured collaborative music platform with advanced real-time capabilities.
                  </p>
                  
                  <div className="space-y-4">
                    {/* Core Jamming Experience */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🎸 Core Jamming & Interaction
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          5 Virtual Instruments (Guitar, Bass, Keys, Drums, Synth)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Ultra-low latency WebRTC Voice Chat
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Real-time Collaborative Step Sequencer
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Music Theory Assistance (Scale Sync, Chord Triggers)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          MIDI Controller & Keyboard mapping support
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Per-user Mixer with Individual effect chains
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mt-4">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      ✨ <strong>Ready for Live Action!</strong> Experience real-time jamming with friends. All core jamming features are live and battle-tested.
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Phase 1 */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      Phase 1: Arrange Room (Collaborative DAW)
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Professional-grade collaborative digital audio workstation for production & arrangement.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🎹 Production & DAW Engine
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Multi-track Arrangement Grid with Region Management
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Advanced Ephemeral/Commit Sync Pattern
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Real-time Collaborative Project Locking (Mutex)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          High-quality Audio Export & Mixdown (.wav)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Project Forking & Versioning System
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Intelligent Contributor Tracking & Credits
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🌐 Ecosystem & Security
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Session Persistence & Reconnection Windows
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Granular Project Privacy & Sharing Settings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 & 3 - Consolidatied as Completed */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      Phase 2 & 3: Performance & Scaling
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Redis state persistence, multi-process clustering, and Backblaze B2 integration for professional-grade reliability.
                  </p>
                </div>
              </div>

              {/* Phase 4 - Current */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">⚙️</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400">
                      Phase 4: Stability & Production Readiness
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs rounded-full font-medium">
                      CURRENT
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Monorepo migration (Bun Workspaces), unified shared packages, E2E automation with Playwright, and comprehensive UX polish.
                  </p>
                </div>
              </div>

              {/* Phase 5 - Next */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">🌉</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Phase 5: The &quot;Jam-to-Arrange&quot; Bridge
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                      NEXT PRIORITY
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                        <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">Catch! Mechanic</h4>
                        <p className="text-xs text-gray-700 dark:text-gray-300">Retroactively save MIDI snippets from live jams into your Idea Crate.</p>
                      </div>
                      <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                        <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">Virtual Sessionists</h4>
                        <p className="text-xs text-gray-700 dark:text-gray-300">AI-powered bandmates that react to your playing dynamics and key changes.</p>
                      </div>
                      <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                        <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">Vibe Quest</h4>
                        <p className="text-xs text-gray-700 dark:text-gray-300">Gamified musical guidance with Bubble Guides and Rhythm Halos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 7+ - Future */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">🤖</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                      Phase 7+: AI Ecosystem & MCP
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                      FUTURE VISION
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <p>Transforming Jam Band into an AI-Native platform through MCP Integration:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>AI Agents as Co-Producers:</strong> Connect Claude/Gemini directly to your studio.</li>
                      <li><strong>Natural Language DAW:</strong> Control every parameter with voice or text commands.</li>
                      <li><strong>AI as a Pro Member:</strong> Real-time co-jamming with ultra-low latency AI interaction.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Column Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            {/* Team Knowledge Requirements */}
            <section className="bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl p-6 md:p-8 border border-indigo-100 dark:border-indigo-900/30">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧠</span> Team Knowledge
              </h2>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Music theory fundamentals</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Production technology (MIDI, Audio FX routing)</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Real-time networking (WebSocket, WebRTC)</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> JavaScript Audio API & Web Audio</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Scalable application architecture</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> VST / Audio Unit integration concepts</li>
              </ul>
            </section>

            {/* Server Information */}
            <section className="bg-teal-50/50 dark:bg-teal-900/10 rounded-2xl p-6 md:p-8 border border-teal-100 dark:border-teal-900/30">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🌍</span> Server Information
              </h2>
              <div className="space-y-4">
                <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Southeast Asia (Optimal Performance Zone)</p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm border-l-4 border-teal-400">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Latency Advisory</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Connection latency varies by geography. Users within or near Southeast Asia will experience the lowest latency, essential for precise real-time jamming synchronization.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Tech Stack */}
          <section id="tech-stack" className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-md dark:shadow-2xl border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-slate-300 relative overflow-hidden">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="mr-3">⚙️</span> Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frontend */}
                <div className="bg-gray-50/80 dark:bg-slate-800/50 p-5 rounded-xl border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-500/50 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span> Frontend
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                    <li className="flex justify-between"><span>React 19 + TypeScript</span> <span className="opacity-60 dark:opacity-50">Core</span></li>
                    <li className="flex justify-between"><span>Vite 7</span> <span className="opacity-60 dark:opacity-50">Build</span></li>
                    <li className="flex justify-between"><span>Tailwind CSS 4</span> <span className="opacity-60 dark:opacity-50">Style</span></li>
                    <li className="flex justify-between"><span>Zustand 5</span> <span className="opacity-60 dark:opacity-50">State</span></li>
                    <li className="flex justify-between"><span>TanStack Query 5</span> <span className="opacity-60 dark:opacity-50">Data</span></li>
                  </ul>
                </div>

                {/* Audio & Music */}
                <div className="bg-gray-50/80 dark:bg-slate-800/50 p-5 rounded-xl border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Audio & Music
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                    <li className="flex justify-between"><span>Tone.js 15</span> <span className="opacity-60 dark:opacity-50">Framework</span></li>
                    <li className="flex justify-between"><span>Smplr 0.16</span> <span className="opacity-60 dark:opacity-50">Sampler</span></li>
                    <li className="flex justify-between"><span>Web Audio API</span> <span className="opacity-60 dark:opacity-50">Native</span></li>
                    <li className="flex justify-between"><span>Web MIDI API</span> <span className="opacity-60 dark:opacity-50">Hardware</span></li>
                    <li className="flex justify-between"><span>WebRTC</span> <span className="opacity-60 dark:opacity-50">Voice</span></li>
                  </ul>
                </div>

                {/* Backend */}
                <div className="bg-gray-50/80 dark:bg-slate-800/50 p-5 rounded-xl border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm hover:border-green-300 dark:hover:border-green-500/50 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Backend
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                    <li className="flex justify-between"><span>Node.js + Express 4</span> <span className="opacity-60 dark:opacity-50">Server</span></li>
                    <li className="flex justify-between"><span>Socket.IO 4.8</span> <span className="opacity-60 dark:opacity-50">Sync</span></li>
                    <li className="flex justify-between"><span>TypeScript 5</span> <span className="opacity-60 dark:opacity-50">Language</span></li>
                    <li className="flex justify-between"><span>Joi 17</span> <span className="opacity-60 dark:opacity-50">Validation</span></li>
                  </ul>
                </div>

                {/* Landing Page */}
                <div className="bg-gray-50/80 dark:bg-slate-800/50 p-5 rounded-xl border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm hover:border-pink-300 dark:hover:border-pink-500/50 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Landing Page
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                    <li className="flex justify-between"><span>Next.js 15.5</span> <span className="opacity-60 dark:opacity-50">Framework</span></li>
                    <li className="flex justify-between"><span>Framer Motion 11</span> <span className="opacity-60 dark:opacity-50">Animation</span></li>
                    <li className="flex justify-between"><span>Prisma 6</span> <span className="opacity-60 dark:opacity-50">Database</span></li>
                    <li className="flex justify-between"><span>Zod 4</span> <span className="opacity-60 dark:opacity-50">Schema</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Features */}
          {/* <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Development & Testing
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Comprehensive test suites with Jest 30</li>
                  <li>• Vitest 2 for frontend testing</li>
                  <li>• Testing Library for React components</li>
                  <li>• Load testing and performance monitoring</li>
                  <li>• HTTPS WebRTC testing capabilities</li>
                  <li>• Code coverage reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Infrastructure & Deployment
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Docker containerization support</li>
                  <li>• Railway deployment integration</li>
                  <li>• Vercel hosting for frontend</li>
                  <li>• SSL/TLS encryption for secure connections</li>
                  <li>• Environment-based configuration</li>
                  <li>• Automated build and deployment pipelines</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Footer */}
          <section className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              This is a personal project by{" "}
              <a
                href="http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Pathompong Thitithan
              </a>
              . Built with modern web technologies to explore the possibilities of
              collaborative music creation online.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Try COLLAB Now
              </a>
              {/* <a
                href="https://github.com/themiddnight/jam-band-fe"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View on GitHub
              </a> */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 
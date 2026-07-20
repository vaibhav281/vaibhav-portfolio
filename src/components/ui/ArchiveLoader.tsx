import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHASES = [
  "01 / Loading Engineering Notes",
  "02 / Preparing Production Projects",
  "03 / Cross-verifying Documentation",
  "04 / Opening Archive"
];

const HEADLINES = [
  "Building Production Software.",
  "Building Production Software_",
  "Loading Engineering Archive",
  "Loading Case Studies",
  "Ready."
];

export default function ArchiveLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [headline, setHeadline] = useState(0);
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    // 0ms: Initial state
    const t1 = setTimeout(() => { setProgress(20); setPhase(0); setHeadline(0); }, 50);
    // 800ms: Add cursor blink
    const t2 = setTimeout(() => { setProgress(45); setPhase(1); setHeadline(1); }, 800);
    // 1200ms: Change headline to archive
    const t3 = setTimeout(() => { setProgress(70); setPhase(2); setHeadline(2); }, 1200);
    // 1600ms: Change headline to case studies
    const t4 = setTimeout(() => { setProgress(90); setPhase(3); setHeadline(3); }, 1600);
    // 2000ms: Ready
    const t5 = setTimeout(() => { setProgress(100); setHeadline(4); }, 2000);
    // 2100ms: Show signature
    const t6 = setTimeout(() => { setShowSignature(true); }, 2100);
    // 2400ms: Call complete to trigger unmount
    const t7 = setTimeout(() => { onComplete(); }, 2400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[999] bg-[#050505] flex flex-col justify-between p-6 md:p-10 overflow-hidden"
    >
      {/* Subtle Engineering Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Metadata */}
      <div className="relative z-10 flex justify-between items-start text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest whitespace-nowrap">
        <div className="flex flex-col gap-1">
          <span className="text-zinc-300">VAIBHAV CHAVAN</span>
          <span>Engineering Portfolio</span>
          <span>v2026.1</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="text-zinc-300">Frontend Systems</span>
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <AnimatePresence mode="wait">
          {!showSignature ? (
            <motion.div
              key="loader-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="flex flex-col items-center w-full max-w-2xl"
            >
              {/* Dynamic Headline */}
              <div className="h-16 md:h-24 flex items-center justify-center mb-8">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={headline}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-black text-white text-center tracking-tight"
                  >
                    {HEADLINES[headline]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Progress Line */}
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-[#ff6b35]"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut", duration: 0.4 }}
                />
              </div>

              {/* Phase Text */}
              <div className="flex justify-between w-full text-[10px] md:text-xs font-mono tracking-widest uppercase">
                <span className="text-[#ff6b35] font-bold">Progress</span>
                <span className="text-zinc-500 text-right">{PHASES[phase]}</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signature"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center gap-2"
            >
              <h2 className="text-xl md:text-3xl font-bold text-white tracking-tight">Designed for Engineers.</h2>
              <p className="text-zinc-400 font-medium">Built from Production Experience.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Metadata */}
      <div className="relative z-10 flex justify-between items-end text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest whitespace-nowrap">
        <div className="flex flex-col gap-1">
          <span>Portfolio Status</span>
          <span className="text-[#10b981]">Verified</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span>Status</span>
          <span className={progress === 100 ? "text-[#ff6b35]" : "text-zinc-400"}>
            {progress === 100 ? 'Ready' : 'Loading...'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Shield, Database, Lock, Cpu, FileWarning, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { SiReact, SiNodedotjs } from 'react-icons/si';
import { Link } from 'react-router-dom';

// ─── Sub-components ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#00f0ff] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3">
      {children}
    </p>
  );
}

function EncryptionStep({
  step, label, sub, highlight = false, danger = false, delay = 0
}: {
  step: string; label: string; sub?: string;
  highlight?: boolean; danger?: boolean; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center w-full lg:w-auto"
    >
      <div className={`
        px-4 py-3 border text-xs font-mono font-bold text-center min-w-[140px] w-full lg:w-auto
        ${highlight ? 'border-[#00f0ff]/40 bg-[#00f0ff]/8 text-[#00f0ff]' :
          danger ? 'border-red-500/30 bg-red-500/5 text-red-400' :
          'border-white/10 bg-[#0c0c0e] text-zinc-400'}
      `}>
        <div className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1">{step}</div>
        <div className={highlight ? 'text-[#00f0ff]' : danger ? 'text-red-400' : 'text-zinc-300'}>{label}</div>
        {sub && <div className="text-[9px] text-zinc-600 mt-1 font-normal">{sub}</div>}
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LimitlessChatsStory() {
  const threatRef = useRef(null);
  const lifecycleRef = useRef(null);
  const threatInView = useInView(threatRef, { once: true, margin: '-80px' });
  const lifecycleInView = useInView(lifecycleRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen bg-[#060608] selection:bg-[#00f0ff]/30 selection:text-[#00f0ff]">

      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-10 pb-16 lg:pt-12 lg:pb-24 px-3 sm:px-4 sm:px-6 lg:px-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-[#00f0ff] blur-[160px] opacity-[0.05]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#00f0ff] blur-[130px] opacity-[0.04]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00f0ff]/5 border border-[#00f0ff]/20 rounded-full mb-6 text-[#00f0ff] text-[11px] font-bold uppercase tracking-[0.2em]">
            <Shield className="w-3.5 h-3.5" /> Zero-Knowledge Architecture — Personal Project
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 }}
            className="heading-font text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
            Limitless<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]/60">Chats</span>
          </motion.h1>

          {/* The compelling opener */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.14 }}
            className="mb-10 max-w-2xl">
            <p className="text-2xl md:text-3xl text-zinc-300 font-semibold leading-tight mb-4">
              The server routes every message.<br />
              <span className="text-white">It never reads one.</span>
            </p>
            <p className="text-base text-zinc-500 leading-relaxed">
              Limitless Chats explores what happens when cryptography—not infrastructure—becomes the source of trust. The Node.js backend is explicitly designed to be an untrusted relay. If it is breached, the attacker recovers mathematically useless ciphertext.
            </p>
          </motion.div>

          {/* Key facts bar */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 mb-10">
            {[
              { label: 'Protocol', value: 'Double Ratchet', sub: 'Forward Secrecy' },
              { label: 'Storage', value: 'IndexedDB', sub: '4 Segregated Stores' },
              { label: 'Encryption', value: 'AES-256-GCM', sub: 'Web Crypto API' },
              { label: 'Transport', value: 'Socket.IO', sub: 'WSS Real-time' },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col px-5 py-5 border-b border-white/10 sm:border-b-0 ${i < 3 ? 'lg:border-r border-white/10' : ''}`}>
                <span className="text-[#00f0ff] font-mono text-[9px] uppercase tracking-widest mb-1">{item.label}</span>
                <span className="text-base font-bold text-white">{item.value}</span>
                <span className="text-xs text-zinc-500 mt-0.5">{item.sub}</span>
              </div>
            ))}
          </motion.div>

          {/* Architecture checklist */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.26 }}
            className="bg-[#09090b] border border-white/10 p-4 sm:p-6 md:p-5 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Web Crypto API — AES-256-GCM with IV reuse guard',
                'X3DH key exchange via Curve25519 public bundles',
                'Double Ratchet — libsignal-protocol-typescript',
                'globalSignalMutex — serialized ratchet operations',
                'IntersectionObserver lazy media decryption (200px margin)',
                '4-store IndexedDB vault — cryptographic state isolation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="text-[#00f0ff] shrink-0 mt-0.5">✓</span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-[#0c0c0e] border border-red-500/20 font-mono text-xs text-zinc-400">
              <span className="text-red-400 font-bold">&gt; THREAT MODEL: </span>
              Server breach → attacker recovers only ciphertext. Private keys never leave the client's IndexedDB vault.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. THREAT MODEL
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#0c0c0e]" ref={threatRef}>
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Security Analysis</SectionLabel>
          <h2 className="heading-font text-3xl md:text-5xl font-black text-white mb-4">Threat Model</h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-14">
            Every architectural decision in this project maps to a specific threat. The table below documents what is protected, partially mitigated, and intentionally out of scope.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest w-1/3">Attack Vector</th>
                  <th className="text-left py-4 px-5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Status</th>
                  <th className="text-left py-4 px-5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Mechanism</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    attack: 'Server compromise / DB leak',
                    status: 'protected',
                    mechanism: 'Server stores only ciphertext. AES keys are encrypted using the recipient\'s Signal session key — inaccessible without the client\'s private keys in IndexedDB.',
                  },
                  {
                    attack: 'Passive network interception',
                    status: 'protected',
                    mechanism: 'All payloads are AES-256-GCM encrypted before leaving the client. Transport is WSS (TLS). Even HTTP interception yields only ciphertext.',
                  },
                  {
                    attack: 'Replay attack',
                    status: 'protected',
                    mechanism: 'Each Double Ratchet step derives a new key. Replaying an old ciphertext against a new session state fails MAC verification.',
                  },
                  {
                    attack: 'Future message compromise',
                    status: 'protected',
                    mechanism: 'Post-Compromise Security via Double Ratchet. Compromising one session key does not expose future messages once the ratchet advances.',
                  },
                  {
                    attack: 'File upload MIME spoofing',
                    status: 'protected',
                    mechanism: 'Backend uses the file-type library to inspect binary magic numbers. Mismatched MIME/signature → HTTP 403 + file deleted from disk.',
                  },
                  {
                    attack: 'MITM key substitution',
                    status: 'partial',
                    mechanism: 'Known limitation (19_Technical_Debt.md §C): Identity key changes are auto-trusted. Safety number verification UI not yet implemented.',
                  },
                  {
                    attack: 'Cross-origin WebSocket attack',
                    status: 'partial',
                    mechanism: 'Known gap (19_Technical_Debt.md §A): Socket.IO is configured with CORS origin: "*". Remediation requires restricting to domain allowlist.',
                  },
                  {
                    attack: 'Physical device theft',
                    status: 'partial',
                    mechanism: 'Cryptographic keys persist in IndexedDB. No PIN, biometric lock, or key derivation from a user passphrase is currently implemented.',
                  },
                  {
                    attack: 'Group chat eavesdropping',
                    status: 'oos',
                    mechanism: 'Intentionally out of scope. Global broadcast room uses plaintext REST. Sender Keys (group E2EE) is documented as a future improvement.',
                  },
                  {
                    attack: 'External security audit',
                    status: 'oos',
                    mechanism: 'This is an educational implementation of the Signal Protocol. It has not undergone independent third-party cryptographic audit.',
                  },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={threatInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-5 text-zinc-300 font-medium">{row.attack}</td>
                    <td className="py-4 px-5">
                      {row.status === 'protected' && (
                        <span className="inline-flex items-center gap-1.5 text-green-400 text-xs font-bold font-mono">
                          <CheckCircle className="w-3.5 h-3.5" /> Protected
                        </span>
                      )}
                      {row.status === 'partial' && (
                        <span className="inline-flex items-center gap-1.5 text-yellow-400 text-xs font-bold font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> Partial
                        </span>
                      )}
                      {row.status === 'oos' && (
                        <span className="inline-flex items-center gap-1.5 text-zinc-500 text-xs font-bold font-mono">
                          <XCircle className="w-3.5 h-3.5" /> Out of Scope
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 text-zinc-500 text-xs leading-relaxed max-w-md">{row.mechanism}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. ENCRYPTION LIFECYCLE (animated centerpiece)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#060608]" ref={lifecycleRef}>
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Message Lifecycle</SectionLabel>
          <h2 className="heading-font text-3xl md:text-5xl font-black text-white mb-4">Encryption Pipeline</h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-14">
            Every outbound message travels through a strict cryptographic pipeline before leaving the browser. The server touches only the final, double-encrypted ciphertext envelope.
          </p>

          {/* Sender side */}
          <div className="mb-8">
            <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00f0ff]" /> Sender's Browser
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap items-center gap-0">
              {[
                { step: '01', label: 'User Types Message', sub: 'React state', highlight: true, delay: 0 },
                { step: '02', label: 'Generate AES-256 Key', sub: 'crypto.getRandomValues()', highlight: true, delay: 0.05 },
                { step: '03', label: 'Encrypt Message Body', sub: 'AES-GCM + IV guard', highlight: true, delay: 0.10 },
                { step: '04', label: 'Encrypt AES Key', sub: 'Signal session ratchet', highlight: true, delay: 0.15 },
                { step: '05', label: 'Package Envelope', sub: 'ciphertext + encryptedKey + IV', highlight: false, delay: 0.20 },
              ].map((s, i) => (
                <div key={i} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                  <div className="w-full lg:w-auto"><EncryptionStep {...s} /></div>
                  {i < 4 && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={lifecycleInView ? { opacity: 1 } : {}}
                        transition={{ delay: s.delay + 0.25 }}
                        className="hidden lg:block w-6 h-[1px] bg-gradient-to-r from-[#00f0ff]/40 to-[#00f0ff]/20 shrink-0"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={lifecycleInView ? { opacity: 1 } : {}}
                        transition={{ delay: s.delay + 0.25 }}
                        className="lg:hidden w-[1px] h-5 bg-gradient-to-b from-[#00f0ff]/40 to-[#00f0ff]/20 shrink-0"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Transport arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={lifecycleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 my-8"
          >
            <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-zinc-700 to-red-500/50" />
            <div className="lg:hidden w-[1px] h-6 bg-gradient-to-b from-zinc-700 to-red-500/50" />
            <div className="px-3 py-2 sm:px-4 sm:py-2 border border-red-500/20 bg-red-500/5 text-[10px] sm:text-xs font-mono text-red-400 text-center w-full lg:w-auto max-w-[280px] lg:max-w-none mx-auto lg:mx-0 leading-snug">
              Socket.IO Transport → Node.js Server (cannot decrypt)
            </div>
            <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-red-500/50 to-zinc-700" />
            <div className="lg:hidden w-[1px] h-6 bg-gradient-to-b from-red-500/50 to-zinc-700" />
          </motion.div>

          {/* Recipient side */}
          <div>
            <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00f0ff]" /> Recipient's Browser
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap items-center gap-0">
              {[
                { step: '06', label: 'Socket.IO Receive', sub: 'encrypted envelope only', highlight: false, delay: 0.55 },
                { step: '07', label: 'Advance Ratchet', sub: 'globalSignalMutex serializes', highlight: true, delay: 0.60 },
                { step: '08', label: 'Decrypt AES Key', sub: 'libsignal-protocol session', highlight: true, delay: 0.65 },
                { step: '09', label: 'Decrypt Message', sub: 'AES-GCM + MAC verify', highlight: true, delay: 0.70 },
                { step: '10', label: 'Render Plaintext', sub: 'saved to LocalMessageStore', highlight: true, delay: 0.75 },
              ].map((s, i) => (
                <div key={i} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                  <div className="w-full lg:w-auto"><EncryptionStep {...s} /></div>
                  {i < 4 && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={lifecycleInView ? { opacity: 1 } : {}}
                        transition={{ delay: s.delay + 0.2 }}
                        className="hidden lg:block w-6 h-[1px] bg-gradient-to-r from-[#00f0ff]/20 to-[#00f0ff]/40 shrink-0"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={lifecycleInView ? { opacity: 1 } : {}}
                        transition={{ delay: s.delay + 0.2 }}
                        className="lg:hidden w-[1px] h-5 bg-gradient-to-b from-[#00f0ff]/20 to-[#00f0ff]/40 shrink-0"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={lifecycleInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0 }}
            className="mt-8 p-4 border border-white/5 bg-[#09090b] text-xs font-mono text-zinc-600"
          >
            <span className="text-zinc-500">NOTE: </span>
            Steps 07–09 are serialized via <span className="text-[#00f0ff]">globalSignalMutex</span> to prevent concurrent ratchet advancement causing MessageCounterError. Key material is erased from runtime after use.
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. CRYPTOGRAPHIC PRIMITIVES (RFC-style)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#0a0a0b]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Security Layer</SectionLabel>
          <h2 className="heading-font text-3xl md:text-5xl font-black text-white mb-4">Cryptographic Primitives</h2>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-14">
            Implemented via <code className="text-[#00f0ff] bg-white/5 px-1.5 py-0.5 text-sm">@privacyresearch/libsignal-protocol-typescript</code>. Each primitive was selected deliberately; alternatives are documented below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:p-6">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-[#00f0ff]" />,
                title: 'X3DH Key Exchange',
                purpose: 'Bootstrap a shared session secret between two parties without requiring both to be online simultaneously.',
                why: 'Enables asynchronous message delivery — the sender can establish a session using Bob\'s public prekey bundle even while Bob is offline.',
                alternative: 'Pure Diffie-Hellman requires both parties online. ECDH without prekeys cannot provide asynchronous forward secrecy.',
                tradeoff: 'One-time prekeys (OPK) must be replenished on the server. If OPKs are exhausted, the server falls back to the signed prekey — weaker but still functional.',
                failureMode: 'If Alice fetches a stale OPK (already used by another party), initial session setup may fail. Mitigated by the server tracking OPK availability.',
              },
              {
                icon: <Shield className="w-6 h-6 text-[#00f0ff]" />,
                title: 'Double Ratchet Protocol',
                purpose: 'Derive a unique encryption key for every message, ensuring past and future messages remain protected even after key compromise.',
                why: 'Provides both Forward Secrecy (past messages safe if current key leaked) and Post-Compromise Security (future messages safe once ratchet advances past a compromised state).',
                alternative: 'A single AES session key is trivially broken: one key exposure decrypts the entire conversation history.',
                tradeoff: 'Race conditions under concurrent message delivery. Mitigated via globalSignalMutex — all ratchet operations are serialized in a single promise chain.',
                failureMode: 'If session state corrupts (e.g. Bad MAC), the implementation attempts self-repair: clears the corrupted session, re-fetches the public bundle, and retries decryption.',
              },
              {
                icon: <FileWarning className="w-6 h-6 text-[#00f0ff]" />,
                title: 'AES-256-GCM + Magic Numbers',
                purpose: 'Encrypt file attachments client-side. Authenticate file signatures server-side to prevent MIME spoofing.',
                why: 'GCM mode provides authenticated encryption — an attacker cannot modify the ciphertext without the MAC failing. The 256-bit key length exceeds current brute-force capacity.',
                alternative: 'AES-CBC requires a separate HMAC step for authentication and is vulnerable to padding oracle attacks. GCM eliminates both issues natively.',
                tradeoff: 'IV reuse with the same key under GCM catastrophically breaks both confidentiality and authenticity. Mitigated via the session-scoped usedIVs Set guard in cryptoService.js.',
                failureMode: 'Files approaching 100MB require the full ArrayBuffer in RAM before encryption begins. On constrained devices, this can crash the browser tab.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-white/5 bg-[#09090b] overflow-hidden group hover:border-[#00f0ff]/20 transition-colors">
                <div className="p-4 sm:p-6 border-b border-white/5 flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-4 sm:p-6 space-y-5">
                  {[
                    { label: 'Purpose', text: item.purpose, color: 'text-zinc-300' },
                    { label: 'Why Selected', text: item.why, color: 'text-zinc-400' },
                    { label: 'Alternative Rejected', text: item.alternative, color: 'text-red-400/80' },
                    { label: 'Key Tradeoff', text: item.tradeoff, color: 'text-yellow-400/80' },
                    { label: 'Failure Mode', text: item.failureMode, color: 'text-zinc-500' },
                  ].map((field, j) => (
                    <div key={j}>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">{field.label}</span>
                      <p className={`text-xs leading-relaxed ${field.color}`}>{field.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. ENGINEERING DECISIONS (weighted)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#060608]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Technical Obstacles</SectionLabel>
          <h2 className="heading-font text-3xl md:text-4xl font-black text-white mb-14">Engineering Decisions</h2>

          {/* Primary decision — full width */}
          <div className="border border-[#00f0ff]/15 bg-[#09090b] p-5 sm:p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                <Database className="w-6 h-6 text-[#00f0ff]" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#00f0ff] uppercase tracking-widest block">Primary Decision</span>
                <h3 className="text-2xl font-bold text-white">4-Store IndexedDB Cryptographic Vault</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:p-8">
              <div>
                <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block mb-2">Problem</span>
                <p className="text-sm text-zinc-300 leading-relaxed">Signal Protocol requires storing thousands of key objects (identity keys, prekeys, signed prekeys, session ratchet states) durably across browser sessions. LocalStorage supports only ~5MB and is synchronous — it blocks the React render thread during reads.</p>
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#00f0ff] uppercase tracking-widest block mb-2">Decision</span>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">Designed 4 segregated IndexedDB stores: <span className="text-[#00f0ff]">LimitlessE2EE</span> (session keys), <span className="text-[#00f0ff]">LocalMessageStore</span> (decrypted text), <span className="text-[#00f0ff]">limitless-media-cache</span> (AES keys), <span className="text-[#00f0ff]">limitless-media-blobs</span> (binary attachments). Private keys never leave these stores.</p>
                <div className="bg-[#0c0c0e] p-3 font-mono text-[10px] text-zinc-500 border border-white/5">
                  e2eeVaultOwner tracks the active vault. If a different user logs in on the same browser, stores are purged before re-initialization.
                </div>
              </div>
              <div>
                <span className="text-[9px] font-mono text-green-400 uppercase tracking-widest block mb-2">Result</span>
                <p className="text-sm text-zinc-300 leading-relaxed">All cryptographic reads are fully asynchronous. Chat history loads instantly from the local store without network round-trips or decryption overhead on subsequent visits.</p>
              </div>
            </div>
          </div>

          {/* Secondary decisions — 3-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:p-6">
            {[
              {
                icon: <Cpu className="w-5 h-5 text-[#00f0ff]" />,
                title: 'Signal Race Condition',
                problem: 'Multiple messages arriving simultaneously caused concurrent ratchet advancements, corrupting session state and producing unrecoverable MessageCounterError.',
                decision: 'Implemented globalSignalMutex — a single promise chain that serializes every decryption operation. Each message waits for the preceding decryption to finish.',
                result: 'Zero message failures under high-frequency burst delivery.',
              },
              {
                icon: <FileWarning className="w-5 h-5 text-[#00f0ff]" />,
                title: 'E2EE File Upload',
                problem: 'Uploading raw files to the server directly violates the zero-knowledge constraint — the server would hold unencrypted user data.',
                decision: 'Files are encrypted client-side with a random AES-256 key before upload. That key is encrypted using the recipient\'s Signal session and embedded in the message envelope.',
                result: 'Server stores only .enc blobs. The key is inaccessible without the recipient\'s private session state.',
              },
              {
                icon: <Lock className="w-5 h-5 text-[#00f0ff]" />,
                title: 'Lazy Media Decryption',
                problem: 'Decrypting dozens of media attachments simultaneously on scroll caused massive RAM spikes and browser crashes on mid-range hardware.',
                decision: 'IntersectionObserver with 200px margin defers decryption until the element is near the viewport. Reference-counted mediaMemoryManager revokes Object URLs on unmount.',
                result: 'Memory grows proportionally to visible attachments only, not total history length.',
              },
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-6 border border-white/5 bg-[#0c0c0e] hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2 bg-[#09090b] border border-white/10">{item.icon}</div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Problem', text: item.problem, color: 'text-red-400/80' },
                    { label: 'Decision', text: item.decision, color: 'text-zinc-300' },
                    { label: 'Result', text: item.result, color: 'text-green-400/80' },
                  ].map((f, j) => (
                    <div key={j}>
                      <span className="text-[9px] font-mono uppercase tracking-widest block mb-1 text-zinc-600">{f.label}</span>
                      <p className={`text-xs leading-relaxed ${f.color}`}>{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. RUNTIME OPTIMIZATIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#0c0c0e]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Performance Engineering</SectionLabel>
          <h2 className="heading-font text-3xl md:text-4xl font-black text-white mb-14">Runtime Optimizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6">
            {[
              {
                title: 'Lazy Decryption (IntersectionObserver)',
                body: 'DecryptedMedia.jsx uses IntersectionObserver with a 200px root margin. Network requests and AES-GCM decryption are deferred until the message bubble approaches the viewport. This prevents the browser from pre-decrypting an entire chat history at once.',
                source: '16_Performance.md §A',
              },
              {
                title: 'LRU Object URL Cache (200-item limit)',
                body: 'blobCache.js implements a Least Recently Used cache capped at 200 entries. When a new entry exceeds the limit, the oldest Object URL is evicted and URL.revokeObjectURL() is called immediately to return the memory to the browser.',
                source: '16_Performance.md §B',
              },
              {
                title: 'Reference-Counted Memory Manager',
                body: 'Components call retain(cacheKey) on mount and release(cacheKey) on unmount. mediaMemoryManager.js tracks reference counts; when a count hits zero, the associated Object URL is revoked automatically — preventing dangling blob references.',
                source: '16_Performance.md §C',
              },
              {
                title: 'React.memo + Custom Comparison',
                body: 'MessageBubble.jsx uses React.memo with a custom comparison function. Re-renders trigger only when messageId, status, selection state, pin status, or reply reference changes. Sidebar and DailyNotesPage wrap derived computations in useMemo.',
                source: '16_Performance.md §D',
              },
              {
                title: 'IndexedDB Persistent Media Cache',
                body: 'Decrypted binary attachments are saved to limitless-media-blobs and their AES keys to limitless-media-cache. On subsequent visits, media loads from the local store — zero network re-download, zero re-decryption.',
                source: '16_Performance.md §B',
              },
              {
                title: 'Idle-time Video Thumbnail Generation',
                body: 'Video thumbnails are generated using an off-screen <canvas> element wrapped in requestIdleCallback so rendering work is deferred to browser idle periods. Known limitation: this still runs on the main thread — offloading to OffscreenCanvas is a documented future improvement.',
                source: '16_Performance.md §A + 19_Technical_Debt.md §A',
              },
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-6 border border-white/5 bg-[#09090b] hover:border-white/10 transition-colors group">
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. TECHNOLOGY STACK (grouped, no icon row)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#060608]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Technical Inventory</SectionLabel>
          <h2 className="heading-font text-3xl font-black text-white mb-14">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6">
            {[
              {
                layer: 'Frontend',
                color: '#61DAFB',
                icon: <SiReact size={18} />,
                items: ['React 19', 'Vite 7', 'React Router v7', 'Material UI v7', 'Axios'],
              },
              {
                layer: 'Backend',
                color: '#339933',
                icon: <SiNodedotjs size={18} />,
                items: ['Node.js + Express v5', 'Socket.IO v4', 'MongoDB + Mongoose', 'Multer (file handling)', 'file-type (magic numbers)'],
              },
              {
                layer: 'Security',
                color: '#00f0ff',
                icon: <Lock size={18} />,
                items: ['libsignal-protocol-typescript', 'Web Crypto API (native)', 'AES-256-GCM', 'X3DH Key Exchange', 'Double Ratchet Protocol', 'HKDF Key Derivation'],
              },
              {
                layer: 'Storage & APIs',
                color: '#FF9900',
                icon: <Database size={18} />,
                items: ['IndexedDB (4 stores)', 'Blob URL Management', 'IntersectionObserver', 'requestIdleCallback', 'LocalStorage (session)', 'Canvas / OffscreenCanvas'],
              },
            ].map((group, i) => (
              <div key={i} className="border border-white/5 bg-[#09090b] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5" style={{ color: group.color }}>
                  {group.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{group.layer}</span>
                </div>
                <ul className="p-5 space-y-2.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. ENGINEERING RETROSPECTIVE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-[#0c0c0e]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0">
          <SectionLabel>Post-Mortem</SectionLabel>
          <h2 className="heading-font text-3xl font-black text-white mb-12">Engineering Retrospective</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:p-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">If I Rebuilt This Today</h3>
              {[
                { item: 'Offload AES-GCM encryption to Web Workers', why: 'Main-thread crypto blocks the UI during large file operations. OffscreenCanvas + transferable buffers keeps React at 60fps.' },
                { item: 'Implement Safety Numbers UI', why: 'Automatic key trust on device change is a known MITM gap. A QR-code verification flow (like Signal) is the correct remediation.' },
                { item: 'Add Sender Keys for group E2EE', why: 'The global broadcast room is plaintext. Group Double Ratchet (Sender Keys) would extend zero-knowledge guarantees to group chats.' },
                { item: 'Replace delete keyword with Uint8Array.fill(0)', why: 'JS garbage collection is non-deterministic. Explicit memory zeroing of decrypted AES keys prevents residual key material surviving in RAM.' },
                { item: 'Restrict CORS to specific origins', why: 'The current wildcard CORS on Socket.IO is a documented security gap that must be addressed before any production deployment.' },
              ].map((entry, i) => (
                <div key={i} className="border border-white/5 bg-[#09090b] p-5">
                  <p className="text-sm text-white font-medium mb-1">→ {entry.item}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{entry.why}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Lessons Learned</h3>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 border border-[#00f0ff]/10 bg-[#00f0ff]/5">
                  <p className="text-base text-white font-medium leading-relaxed italic">
                    "Cryptographic correctness and engineering correctness are not the same problem. You can implement X3DH and the Double Ratchet precisely according to specification and still ship race conditions that corrupt session state under real network conditions."
                  </p>
                </div>
                <div className="p-5 border border-white/5 bg-[#09090b] space-y-3">
                  {[
                    'The hardest bugs were not cryptographic — they were concurrency bugs in IndexedDB transaction ordering.',
                    'IntersectionObserver-based lazy decryption was the single highest-impact performance decision.',
                    'The globalSignalMutex pattern (serializing all ratchet ops via promise chaining) solved problems that are invisible until production load.',
                  ].map((lesson, i) => (
                    <p key={i} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                      <span className="text-[#00f0ff] shrink-0">·</span> {lesson}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. KNOWN LIMITATIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#09090b]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0 py-12">
          <div className="border border-yellow-500/20 bg-yellow-500/5 p-4 sm:p-6 md:p-5 sm:p-8">
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4">Known Limitations</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:p-6 text-sm text-zinc-400">
              <p><strong className="text-white block mb-1">E2EE Scope</strong> Signal Protocol applies to 1-to-1 direct messages only. The global broadcast room uses plaintext REST messaging. This is a documented architectural gap, not an oversight.</p>
              <p><strong className="text-white block mb-1">Security Audit</strong> This is an educational implementation of the Signal Protocol, reviewed against the official specification. It has not undergone an independent third-party cryptographic security audit.</p>
              <p><strong className="text-white block mb-1">Production Readiness</strong> The CORS wildcard, automatic key trust on device change, and main-thread crypto are documented gaps. This project demonstrates protocol understanding, not a production-hardened deployment.</p>
            </div>
          </div>

          <div className="mt-8 border border-white/10 p-4 sm:p-6 text-sm text-zinc-400 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-white">Development Workflow</strong> — This project was built using an AI-assisted development workflow for research, prototyping, debugging, and implementation acceleration. Cryptographic integration, browser storage architecture, real-time synchronization, and security-related engineering decisions were implemented and validated by me against the referenced Signal Protocol documentation and project source code.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER NAV
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#09090b]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          <Link to="/work" className="flex-1 p-10 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Return</div>
            <div className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Archive
            </div>
          </Link>
          <Link to="/work/wiko-india" className="flex-1 p-10 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Next Case Study</div>
            <div className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
              Wiko India <ArrowRight className="w-4 h-4" />
            </div>
            <div className="text-xs text-zinc-500 mt-1">Hardware API · Inspector Dashboards</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

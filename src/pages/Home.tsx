import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Shield, Layers, ArrowRight, GitCommit } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { projects, personalInfo, experience } from '../data/portfolioData';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <section id="philosophy" className="mb-32 lg:mb-60 max-w-5xl pt-10 px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="heading-font text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-black mb-8 lg:mb-12 tracking-tighter text-white">
            Products fail not from complexity, but from <span className="text-[#ff6b35] drop-shadow-[0_0_25px_rgba(255,107,53,0.3)]">unclear architecture.</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 leading-tight font-medium max-w-3xl mb-12 lg:mb-16">
            I engineer production software by first stripping away the noise. Engineering is the disciplined translation of messy business requirements into resilient, high-performance systems.
          </p>

          <div className="flex gap-6 mb-16 lg:mb-20">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0c0c0e] border border-white/5 rounded-sm hover:border-[#ff6b35] text-zinc-400 hover:text-[#ff6b35] transition-all group">
              <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0c0c0e] border border-white/5 rounded-sm hover:border-[#ff6b35] text-zinc-400 hover:text-[#ff6b35] transition-all group">
              <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-4 bg-[#0c0c0e] border border-white/5 rounded-sm hover:border-[#ff6b35] text-zinc-400 hover:text-[#ff6b35] transition-all group">
              <FaEnvelope className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 border-t border-white/5">
            <div className="space-y-4">
              <Server className="text-[#ff6b35] w-6 h-6" />
              <h3 className="font-bold text-lg">Scalable Infrastructure</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Systems built to handle massive SKU catalogs and real-time synchronization without state collapse.
              </p>
            </div>
            <div className="space-y-4">
              <Shield className="text-[#ff6b35] w-6 h-6" />
              <h3 className="font-bold text-lg">Zero-Knowledge Security</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Implementing cryptographic protocols and end-to-end encryption to protect user data from the server itself.
              </p>
            </div>
            <div className="space-y-4">
              <Layers className="text-[#ff6b35] w-6 h-6" />
              <h3 className="font-bold text-lg">Predictable State</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Frontend architecture treated as a critical infrastructure layer. Optimistic UI with strict data consistency.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="work" className="mb-32 lg:mb-60 px-6 lg:px-0">
        <h2 className="heading-font text-3xl md:text-4xl lg:text-5xl font-black mb-12 lg:mb-20 text-white">Featured Deployments</h2>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link
                to={`/work/${project.slug}`}
                className="grid grid-cols-12 gap-8 lg:gap-16 items-start"
              >
                {/* Left: Engineering Context */}
                <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-xs text-[#ff6b35] bg-[#ff6b35]/10 px-3 py-1 rounded-sm">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="heading-font text-4xl md:text-5xl font-black mb-4 lg:mb-6 text-white group-hover:text-[#ff6b35] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed mb-8">
                      {project.projectOverview}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">
                          Engineering Challenge
                        </h4>
                        <ul className="space-y-2">
                          {project.engineeringChallenges.slice(0, 2).map((challenge, i) => (
                            <li key={i} className="text-sm text-zinc-300 flex items-start gap-3">
                              <span className="text-[#ff6b35] mt-0.5 shadow-[#ff6b35]">▹</span> {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold font-mono px-2 py-1 border border-white/10 text-zinc-500 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Technical Visual Representation */}
                <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                  <div className="aspect-[4/3] bg-[#0c0c0e] rounded-sm overflow-hidden border border-white/5 relative group-hover:border-white/10 transition-colors">
                    {/* Architectural Wireframe / Code Visual representation */}
                    <div className="absolute inset-0 p-8 flex flex-col">
                      <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                          {project.title.toUpperCase().replace(/\s+/g, '_')}_SYSTEM_GRAPH
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-red-500/50 transition-colors"></div>
                          <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-yellow-500/50 transition-colors"></div>
                          <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-green-500/50 transition-colors"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-center items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                         <div className="w-32 h-32 border border-[#ff6b35]/20 rounded-full flex items-center justify-center relative">
                           <div className="absolute inset-0 border border-[#ff6b35]/40 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                           <Server className="w-8 h-8 text-[#ff6b35]" />
                         </div>
                         <p className="font-mono text-xs text-zinc-500 mt-6 tracking-widest uppercase">System Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          ENGINEERING PRINCIPLES
      ========================================= */}
      <section id="principles" className="mb-32 lg:mb-60 px-6 lg:px-0">
        <h2 className="heading-font text-3xl md:text-4xl lg:text-5xl font-black mb-12 lg:mb-20 text-white">Engineering Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="text-[#ff6b35] font-mono text-xs font-bold mb-2">01</div>
            <h3 className="text-xl font-bold text-white">Think in Systems, Not Screens</h3>
            <p className="text-zinc-400 leading-relaxed">
              A "login page" is not just a form. It is an authentication entry point, a JWT token source, and a session initiator. I map out the upstream and downstream effects of every feature before writing a single line of React.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="text-[#ff6b35] font-mono text-xs font-bold mb-2">02</div>
            <h3 className="text-xl font-bold text-white">Pragmatic Optimization</h3>
            <p className="text-zinc-400 leading-relaxed">
              I optimize when there is a clear, measurable performance problem—not prematurely. Clean code serves the product. A working feature with slightly messy code is infinitely more valuable than a perfect codebase with zero shipped features.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="text-[#ff6b35] font-mono text-xs font-bold mb-2">03</div>
            <h3 className="text-xl font-bold text-white">Error Handling is the Feature</h3>
            <p className="text-zinc-400 leading-relaxed">
              A feature is not complete until API errors are caught, loading states are deliberate, and edge cases are accounted for. The UI must degrade gracefully, communicating clearly with the user rather than crashing silently.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="text-[#ff6b35] font-mono text-xs font-bold mb-2">04</div>
            <h3 className="text-xl font-bold text-white">Reusability as a Default</h3>
            <p className="text-zinc-400 leading-relaxed">
              Whenever a component can be generalized without sacrificing clarity, it becomes part of the design system. This accelerates future development cycles and prevents fragmented UI logic across the application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CAREER TIMELINE
      ========================================= */}
      <section id="timeline" className="mb-32 lg:mb-40 px-6 lg:px-0">
        <h2 className="heading-font text-3xl md:text-4xl lg:text-5xl font-black mb-12 lg:mb-20 text-white">Career Timeline</h2>
        
        <div className="relative border-l border-white/10 ml-4 lg:ml-0 space-y-20">
          {experience.map((job, i) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-10 lg:pl-16"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-[#ff6b35] rounded-full shadow-[0_0_10px_rgba(255,107,53,0.5)]"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-6 mb-4">
                <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                <span className="text-[#ff6b35] font-mono text-sm uppercase tracking-widest">{job.company}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 mb-6 uppercase tracking-wider">
                <span className="flex items-center gap-2"><GitCommit className="w-3 h-3" /> {job.period}</span>
                <span className="flex items-center gap-2"><GitCommit className="w-3 h-3" /> {job.duration}</span>
                <span className="flex items-center gap-2"><GitCommit className="w-3 h-3" /> {job.location}</span>
              </div>

              <ul className="space-y-4 mb-6">
                {job.points.map((point, idx) => (
                  <li key={idx} className="text-zinc-400 leading-relaxed text-sm lg:text-base flex items-start gap-4">
                    <span className="text-zinc-600 mt-1">-</span> {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-mono rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-40 pt-20 border-t border-white/5 flex justify-center">
        <Link 
          to="/work" 
          className="group text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-3"
        >
          View Full Archive
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#ff6b35] transition-all" />
        </Link>
      </section>
    </>
  );
}

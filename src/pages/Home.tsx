import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Shield, Layers, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { projects, personalInfo } from '../data/portfolioData';

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
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

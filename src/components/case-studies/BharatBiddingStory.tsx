import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, ShieldCheck, PackageSearch, GitBranch } from 'lucide-react';
import { SiNextdotjs, SiReact, SiMui, SiJsonwebtokens } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SmoothImage from '../ui/SmoothImage';

export default function BharatBiddingStory() {
  return (
    <div className="bg-[#09090b] min-h-screen pb-32">
      {/* 1. INDUSTRIAL HERO (Two-Column Layout) */}
      <section className="px-3 sm:px-6 lg:px-0 pt-8 lg:pt-12 max-w-[1440px] mx-auto mb-20 lg:mb-32">
        <div className="mb-12">
          <Link to="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white uppercase tracking-widest text-[11px] font-bold transition-colors">
            Home <span className="mx-2 text-zinc-700">/</span> Projects <span className="mx-2 text-zinc-700">/</span> Bharat Bidding
          </Link>
        </div>

        {/* Changed items-center to items-start so the top edges align perfectly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="col-span-1 lg:col-span-5 flex flex-col h-full">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-white font-mono text-[10px] uppercase tracking-widest">● Production System</span>
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Private Repository</span>
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">2023–2024</span>
              <span className="text-[#ff6b35] font-mono text-[10px] uppercase tracking-widest mt-2">Role: Primary Frontend Developer</span>
            </div>
            
            <h1 className="heading-font text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white leading-[0.9]">
              Bharat <br /> Bidding.
            </h1>
            <p className="text-xl text-zinc-300 font-medium leading-relaxed mb-10">
              An industrial B2B procurement marketplace connecting businesses with custom-manufacturing suppliers through a credit-based bidding economy.
            </p>
            
            <div className="bg-[#121214] border border-white/5 p-5 sm:p-8 rounded-sm mt-auto">
              <h4 className="text-[#ff6b35] font-mono text-[10px] font-bold uppercase tracking-widest mb-5">My Contribution</h4>
              <ul className="space-y-4 text-sm text-zinc-300 font-medium mb-8">
                <li className="flex items-start gap-3"><span className="text-[#ff6b35] mt-0.5">✓</span> <span className="leading-relaxed">Frontend Architecture for 4 independent Next.js applications</span></li>
                <li className="flex items-start gap-3"><span className="text-[#ff6b35] mt-0.5">✓</span> <span className="leading-relaxed">Unified Authentication & Role-based Access Control (RBAC)</span></li>
                <li className="flex items-start gap-3"><span className="text-[#ff6b35] mt-0.5">✓</span> <span className="leading-relaxed">Complex REST API integration & PhonePe Payment gateway</span></li>
                <li className="flex items-start gap-3"><span className="text-[#ff6b35] mt-0.5">✓</span> <span className="leading-relaxed">Responsive UI/UX for B2B procurement & bidding workflows</span></li>
                <li className="flex items-start gap-3"><span className="text-[#ff6b35] mt-0.5">✓</span> <span className="leading-relaxed">AWS EC2 deployment & production maintenance</span></li>
              </ul>
              
              <h4 className="text-zinc-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-5">Team Boundaries</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li className="flex items-start gap-3"><span className="text-zinc-700 mt-0.5">✕</span> <span className="leading-relaxed">Backend API Development</span></li>
                <li className="flex items-start gap-3"><span className="text-zinc-700 mt-0.5">✕</span> <span className="leading-relaxed">Database Architecture</span></li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-7">
            {/* Real Screenshot */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full bg-[#121214] border border-white/10 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,107,53,0.1)] relative"
            >
              {/* Fake browser bar */}
              <div className="h-10 bg-[#09090b] border-b border-white/10 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Live Production</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Private</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">2024</span>
                </div>
              </div>
              <SmoothImage 
                src="/assets/Bharatbidding_webpage.png" 
                alt="Bharat Bidding Homepage" 
                className="w-full object-cover border-b border-white/5" 
              />
              <div className="h-10 bg-[#09090b] flex items-center justify-center px-4 gap-4 sm:p-6 border-t border-white/5 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Desktop</span>
                <span>Responsive</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* METRICS BAR */}
      <section className="border-y border-white/5 bg-[#121214]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-0 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          <div className="flex-1 py-8 md:p-12 flex flex-col items-center justify-center text-center group">
            <div className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-[#ff6b35] transition-colors">4 Apps</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Monorepo Scope</div>
          </div>
          <div className="flex-1 py-8 md:p-12 flex flex-col items-center justify-center text-center group">
            <div className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-[#ff6b35] transition-colors">JWT & OTP</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Authentication</div>
          </div>
          <div className="flex-1 py-8 md:p-12 flex flex-col items-center justify-center text-center group">
            <div className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-[#ff6b35] transition-colors">4+ User Roles</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">RBAC Logic</div>
          </div>
          <div className="flex-1 py-8 md:p-12 flex flex-col items-center justify-center text-center group">
            <div className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-[#ff6b35] transition-colors">Production</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">AWS Deployment</div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS WORKFLOW */}
      <section className="bg-[#101012] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-0 relative z-10">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="heading-font text-3xl md:text-4xl font-black mb-4 text-white">Understanding the Business Domain</h2>
            <p className="text-zinc-400 leading-relaxed mb-12 text-lg">
              Understanding the business came before writing a single React component. 
            </p>

            {/* Tiny Timeline */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 mb-12 bg-[#09090b] py-4 px-4 sm:px-6 border border-white/5 rounded-sm inline-flex">
              <span className="text-white">Registration</span>
              <span className="text-[#ff6b35]">→</span>
              <span className="text-white">Verification</span>
              <span className="text-[#ff6b35]">→</span>
              <span className="text-white">Listing / RFQ</span>
              <span className="text-[#ff6b35]">→</span>
              <span className="text-white">Bidding via Credits</span>
              <span className="text-[#ff6b35]">→</span>
              <span className="text-white">Connection</span>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-sm overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,107,53,0.05)] p-4 lg:p-5 sm:p-8 flex justify-center"
          >
            <SmoothImage 
              src="/assets/how_it_works_img.svg" 
              alt="Bharat Bidding Workflow Diagram" 
              className="max-w-full h-auto" 
              containerClassName="bg-transparent flex justify-center"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. THE ARCHITECTURE */}
      <section className="px-3 sm:px-6 lg:px-0 py-24 md:py-32 max-w-[1440px] mx-auto border-t border-white/5 bg-[#0c0c0e]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="heading-font text-3xl md:text-5xl font-black text-white mb-6">A 4-Application Monorepo.</h2>
            <p className="text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed text-balance">
              Instead of a single monolithic frontend, Bharat Bidding is distributed across four distinct Next.js applications, sharing a centralized authentication scheme and API layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:p-8">
            {/* App 1 */}
            <div className="bg-[#121214] border border-white/5 p-5 sm:p-8 md:p-10 hover:border-white/10 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Public Website</h3>
                  <p className="text-[#ff6b35] font-mono text-[10px] uppercase tracking-widest">bharatbidding_frontend</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">Primary Responsibility</span>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">SEO-optimized marketing pages, platform discovery, and the multi-step user/company registration pipelines.</p>
                </div>
              </div>
            </div>

            {/* App 2 */}
            <div className="bg-[#121214] border border-white/5 p-5 sm:p-8 md:p-10 hover:border-white/10 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Unified User Dashboard</h3>
                  <p className="text-[#ff6b35] font-mono text-[10px] uppercase tracking-widest">bharatbidding_user_ui</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <Users size={18} />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">Primary Responsibility</span>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">The core B2B engine handling both Buyer (Raising RFQs) and Seller (Bidding, Quotations) workflows, alongside PhonePe Connects token purchasing.</p>
                </div>
              </div>
            </div>

            {/* App 3 */}
            <div className="bg-[#121214] border border-white/5 p-5 sm:p-8 md:p-10 hover:border-white/10 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Admin Panel</h3>
                  <p className="text-[#ff6b35] font-mono text-[10px] uppercase tracking-widest">bharatbidding_admin_ui</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <ShieldCheck size={18} />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">Primary Responsibility</span>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">Internal operations control. Handles company verification, platform analytics, master data configuration (categories/coupons), and user management.</p>
                </div>
              </div>
            </div>
            
            {/* App 4 */}
            <div className="bg-[#121214] border border-white/5 p-5 sm:p-8 md:p-10 hover:border-white/10 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Support Panel</h3>
                  <p className="text-[#ff6b35] font-mono text-[10px] uppercase tracking-widest">bharatbidding_support_ui</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <PackageSearch size={18} />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">Primary Responsibility</span>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">Dedicated dashboard for the customer support team handling ticketing, targeted user inquiries, and operational troubleshooting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING CHALLENGES (Problem -> Decision -> Result) */}
      <section className="pt-24 pb-24 max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-0">
        <h2 className="heading-font text-3xl md:text-4xl font-black mb-16 text-white text-center">Implementation Challenges</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Challenge 1: Multi-Role Architecture */}
          <div className="p-5 sm:p-8 lg:p-12 border border-white/5 bg-[#121214] flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-zinc-900 border border-white/10 rounded-sm">
                  <GitBranch className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Multi-Role Dashboards</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-[#ff6b35] text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/5 pb-2 inline-block">The Problem</div>
                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    Designing and implementing multiple user journeys (Buyers, Sellers, Admins) with completely unique permissions, dashboards, and API interactions while keeping the overall user experience consistent and maintainable.
                  </p>
                </div>
                <div>
                  <div className="text-[#ff6b35] text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/5 pb-2 inline-block">The Decision</div>
                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    Customized a foundational Minimal UI template and extended it into a shared, reusable component library across all distinct applications instead of duplicating logic or starting from scratch.
                  </p>
                </div>
                <div className="bg-[#09090b] p-4 sm:p-6 border border-white/5 rounded-sm">
                  <div className="text-[#ff6b35] text-[10px] font-bold uppercase tracking-widest mb-2">The Result</div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Maintained visual consistency without bloated build times. The complex B2B workflow translated into a frictionless digital experience across three isolated systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge 2: Authentication Flow */}
          <div className="p-5 sm:p-8 lg:p-12 border border-white/5 bg-[#121214] flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-zinc-900 border border-white/10 rounded-sm">
                  <ShieldCheck className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Authentication State Sync</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-[#ff6b35] text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/5 pb-2 inline-block">The Problem</div>
                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    Sellers spend digital credits ("Connects") to bid on RFQs. If the UI state falls out of sync with the backend, sellers could overspend or lose bids due to stale credit balances.
                  </p>
                </div>
                <div>
                  <div className="text-[#ff6b35] text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/5 pb-2 inline-block">The Decision</div>
                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    Implemented strict Axios interceptors for JWT token refreshes paired with decoupled role guards. Avoided bloated third-party libraries for token decoding.
                  </p>
                </div>
                
                {/* Engineering Decisions: Authentication Architecture Visual */}
                <div className="mt-6">
                  <div className="bg-[#09090b] rounded-sm border border-white/5 p-4 sm:p-6 flex flex-col items-center justify-center font-mono text-[9px] md:text-[10px] text-zinc-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.05)_0%,transparent_70%)]"></div>
                    
                    <div className="mb-2 px-4 py-2 bg-white/5 rounded-sm border border-white/10 z-10 text-white">User Login</div>
                    <div className="h-3 border-l border-dashed border-zinc-600 z-10"></div>
                    <div className="my-2 px-4 py-2 bg-[#ff6b35]/10 text-[#ff6b35] rounded-sm border border-[#ff6b35]/20 z-10">JWT Access Token</div>
                    <div className="h-3 border-l border-dashed border-zinc-600 z-10"></div>
                    <div className="my-2 px-4 py-2 bg-white/5 rounded-sm border border-white/10 z-10 text-white">Axios Interceptor</div>
                    <div className="h-3 border-l border-dashed border-zinc-600 relative z-10">
                       <span className="absolute -left-6 top-0 text-[8px] text-red-400 font-bold bg-[#09090b] px-1">401?</span>
                    </div>
                    <div className="my-2 px-4 py-2 bg-white/5 rounded-sm border border-white/10 z-10 text-white">Refresh Token Request</div>
                    <div className="h-3 border-l border-dashed border-zinc-600 z-10"></div>
                    <div className="my-2 px-4 py-2 bg-white/5 rounded-sm border border-white/10 z-10 text-white">Retry Original Request</div>
                    <div className="h-3 border-l border-dashed border-zinc-600 z-10"></div>
                    <div className="mt-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-sm border border-green-500/20 z-10 font-bold">Protected Route / Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="pt-24 pb-12 max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-0">
        <h2 className="heading-font text-3xl md:text-4xl font-black mb-12 text-white text-center">Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:p-6 md:gap-12">
          
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full bg-[#121214] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <SiNextdotjs size={28} />
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">Next.js 14</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full bg-[#121214] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#61DAFB] group-hover:border-[#61DAFB]/20 transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(97,218,251,0)] group-hover:shadow-[0_0_20px_rgba(97,218,251,0.1)]">
              <SiReact size={28} />
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">React.js</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full bg-[#121214] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#007FFF] group-hover:border-[#007FFF]/20 transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(0,127,255,0)] group-hover:shadow-[0_0_20px_rgba(0,127,255,0.1)]">
              <SiMui size={28} />
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">Material UI</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full bg-[#121214] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#FF9900] group-hover:border-[#FF9900]/20 transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(255,153,0,0)] group-hover:shadow-[0_0_20px_rgba(255,153,0,0.1)]">
              <FaAws size={28} />
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">AWS EC2</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full bg-[#121214] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#000000] group-hover:bg-white group-hover:border-white transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <SiJsonwebtokens size={28} />
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">Custom JWT</span>
          </div>

        </div>
      </section>

      {/* 5. RETROSPECTIVE (What Worked / What I'd Improve / Lessons Learned) */}
      <section className="mt-12 pt-24 border-t border-white/5 max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-0">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-black mb-4 text-white">Engineering Retrospective</h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            Reflecting on this architecture today, my engineering perspective has evolved. 
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-white/10 pl-6 md:pl-12 space-y-16 py-8">
            
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[#09090b] border-2 border-green-500 rounded-full -left-[31px] md:-left-[55px] top-1"></div>
              <h3 className="text-xl font-bold text-white mb-4">What Worked Well</h3>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">Extracting a shared UI component library across the 3 distinct dashboards kept visual parity extremely high and design debt low.</p>
                </div>
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">The custom JWT and Axios interceptor approach for authentication provided complete control without bloat.</p>
                </div>
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start hover:border-white/10 transition-colors">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">Structuring complex data displays—like the expansive Company Profiles and Component Listings—into modular, reusable views significantly accelerated the development of the Buyer and Seller portals.</p>
                </div>
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start hover:border-white/10 transition-colors">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">Managing our own deployment and maintenance on AWS EC2 provided full architectural control, allowing for seamless updates to the production frontend without relying on third-party PaaS constraints.</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[#09090b] border-2 border-[#ff6b35] rounded-full -left-[31px] md:-left-[55px] top-1"></div>
              <h3 className="text-xl font-bold text-white mb-4">What I Would Improve Today</h3>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start">
                  <span className="text-[#ff6b35] font-bold mt-1">→</span>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-sm">State Management</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">I would introduce Redux Toolkit or a modern centralized state solution to reduce unnecessary prop drilling across complex dashboard components.</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start">
                  <span className="text-[#ff6b35] font-bold mt-1">→</span>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-sm">API Abstraction</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">I would migrate fully to advanced React Query patterns to handle complex dashboard mutations and data fetching more elegantly.</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6 border border-white/5 bg-[#121214] flex gap-4 items-start">
                  <span className="text-[#ff6b35] font-bold mt-1">→</span>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-sm">Routing Architecture</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">I would optimize the routing architecture for deeper code splitting to improve initial load times.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[#09090b] border-2 border-white/40 rounded-full -left-[31px] md:-left-[55px] top-1"></div>
              <h3 className="text-xl font-bold text-white mb-4">Lessons Learned</h3>
              <div className="p-5 sm:p-8 border border-white/10 bg-[#121214] text-center">
                <p className="text-lg text-zinc-300 italic leading-relaxed">
                  "The challenge was not just writing React components, but translating a complex B2B workflow into a frictionless digital experience. Architecture scales longer than features."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FOOTER ACCESS POINTS */}
      <section className="mt-32 border-t border-white/5 bg-[#121214]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-0 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          <Link to="/work" className="flex-1 p-12 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Return</div>
            <div className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Back to Archive
            </div>
          </Link>
          <Link to="/work/limitless-chats" className="flex-1 p-12 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Next Case Study</div>
            <div className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors flex items-center gap-2">
              Limitless Chats <ArrowRight className="w-5 h-5" />
            </div>
            <div className="text-xs text-zinc-500 mt-2">Zero-Knowledge Messaging Architecture</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

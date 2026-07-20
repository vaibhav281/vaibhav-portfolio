import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Server, Database, LayoutTemplate, Box, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import BharatBiddingStory from '../components/case-studies/BharatBiddingStory';
import LimitlessChatsStory from '../components/case-studies/LimitlessChatsStory';
import WikoIndiaStory from '../components/case-studies/WikoIndiaStory';
import SmoothImage from '../components/ui/SmoothImage';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.slug === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="heading-font text-4xl font-bold mb-4">Documentation Not Found</h1>
        <Link to="/work" className="text-[#ff6b35] hover:brightness-110">Return to Archive</Link>
      </div>
    );
  }

  // Render bespoke case studies
  if (project.slug === 'bharat-bidding') {
    return <BharatBiddingStory />;
  }
  
  if (project.slug === 'limitless-chats') {
    return <LimitlessChatsStory />;
  }

  if (project.slug === 'wiko-india') {
    return <WikoIndiaStory />;
  }

  // Fallback template for projects lacking bespoke layouts
  return (
    <>
      {/* HERO SECTION */}
      <section className="mb-20 lg:mb-32 px-6 lg:px-0 mt-8 lg:mt-0">
        <div className="mb-8 lg:mb-12">
          <Link to="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white uppercase tracking-widest text-[11px] font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Deployments
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-12 lg:mb-16">
          <div className="max-w-4xl">
            <div className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 md:mb-6">
              Deployment // <span className="text-[#ff6b35]">{project.category}</span>
            </div>
            <h1 className="heading-font text-5xl md:text-[60px] lg:text-[100px] leading-[0.9] font-black mb-6 lg:mb-8 tracking-tighter text-white">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 leading-tight font-medium">
              {project.projectOverview}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 text-right md:w-48 shrink-0">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Status</div>
              <div className="text-sm font-medium text-white">{project.status}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Role</div>
              <div className="text-sm font-medium text-white">{project.role}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Duration</div>
              <div className="text-sm font-medium text-white">{project.duration}</div>
            </div>
          </div>
        </div>

        {/* SCREENSHOT / VISUAL PREVIEW */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="w-full aspect-[21/9] rounded-sm overflow-hidden border border-white/5 relative">
            <SmoothImage 
              src={project.screenshots[0]} 
              alt={`${project.title} preview`} 
              className="object-cover w-full h-full opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent pointer-events-none"></div>
          </div>
        ) : (
          <div className="w-full aspect-[21/9] bg-[#0c0c0e] rounded-sm border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Server className="w-64 h-64 text-[#ff6b35]" />
            </div>
            <div className="text-center z-10">
              <div className="text-[10px] text-zinc-600 font-bold tracking-[0.5em] uppercase mb-4">
                [ SYSTEM_ARCHITECTURE_VIEW ]
              </div>
              <h2 className="heading-font text-3xl font-bold text-zinc-700">UI Not Available</h2>
            </div>
          </div>
        )}
      </section>

      {/* CORE ENGINEERING CONTEXT */}
      <section className="mb-32 lg:mb-40 grid grid-cols-12 gap-8 lg:gap-24 px-6 lg:px-0">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="heading-font text-3xl md:text-4xl font-black mb-4 lg:mb-8 text-white">Business Problem</h2>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 leading-tight font-medium mb-12">
            {project.businessProblem}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b35] mb-4">Responsibilities</h4>
              <ul className="space-y-4">
                {project.responsibilities.map((res, i) => (
                  <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-[#ff6b35] shrink-0">▹</span> {res}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b35] mb-4">Key Features</h4>
              <ul className="space-y-4">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-[#ff6b35] shrink-0">▹</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE & CHALLENGES */}
      <section className="mb-32 lg:mb-40 pt-20 lg:pt-32 border-t border-white/5 px-6 lg:px-0">
        <div className="mb-12 lg:mb-16">
          <h2 className="heading-font text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 lg:mb-6">Technical Deep Dive</h2>
          <h3 className="heading-font text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-white">
            Engineering Decisions.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
          <div className="p-6 lg:p-8 bg-[#0c0c0e] border border-white/5 rounded-sm hover:border-white/10 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Box className="w-8 h-8 text-[#ff6b35] mb-6 drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]" />
            <h4 className="text-xl font-bold mb-4 text-white">Architecture</h4>
            <ul className="space-y-3">
              {project.architectureHighlights.map((arch, i) => (
                <li key={i} className="text-sm text-zinc-500 leading-relaxed border-l border-[#ff6b35]/20 pl-3">
                  {arch}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-[#0c0c0e] border border-white/5 rounded-sm hover:border-white/10 transition-colors">
            <LayoutTemplate className="w-8 h-8 text-[#ff6b35] mb-6" />
            <h4 className="text-xl font-bold mb-4">Technical Execution</h4>
            <ul className="space-y-3">
              {project.technicalHighlights.map((tech, i) => (
                <li key={i} className="text-sm text-zinc-500 leading-relaxed border-l border-[#ff6b35]/20 pl-3">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-[#0c0c0e] border border-white/5 rounded-sm hover:border-white/10 transition-colors">
            <Database className="w-8 h-8 text-[#ff6b35] mb-6" />
            <h4 className="text-xl font-bold mb-4">Primary Challenges</h4>
            <ul className="space-y-3">
              {project.engineeringChallenges.map((chal, i) => (
                <li key={i} className="text-sm text-zinc-500 leading-relaxed border-l border-red-500/20 pl-3">
                  {chal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mb-32 lg:mb-40 pt-20 lg:pt-32 border-t border-white/5 px-6 lg:px-0">
        <h2 className="heading-font text-2xl md:text-3xl font-bold mb-8 lg:mb-12 text-white">Technology Stack</h2>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-6 py-3 bg-white/5 border border-white/10 rounded-sm text-sm font-mono text-zinc-300">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* OUTCOMES / LESSONS / LINKS */}
      <section className="mb-32 lg:mb-40 pt-20 lg:pt-32 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 lg:px-0">
        <div>
          <h2 className="heading-font text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6 lg:mb-8">Post-Mortem</h2>
          {project.lessonsLearned && project.lessonsLearned.length > 0 ? (
            <div className="space-y-6">
              {project.lessonsLearned.map((lesson, i) => (
                <div key={i} className="p-6 border border-white/5 bg-[#0c0c0e] rounded-sm">
                  <p className="text-zinc-400 leading-relaxed text-sm">{lesson}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 border border-white/5 bg-[#0c0c0e] rounded-sm">
              <p className="text-zinc-500 leading-relaxed text-sm">Post-mortem documentation pending.</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col justify-end">
          <div className="p-10 border border-white/5 bg-[#ff6b35]/5 rounded-sm">
            <div className="text-zinc-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Access Points</div>
            <div className="space-y-6">
              <p className="text-sm text-zinc-400 italic mb-8">{project.currentState}</p>
              
              <div className="flex flex-wrap gap-6">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ff6b35] hover:brightness-110 font-bold">
                    <ExternalLink className="w-5 h-5" /> View Production
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#ff6b35] transition-colors font-bold">
                    <FaGithub className="w-5 h-5" /> View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="mb-20 pt-20 border-t border-white/5 flex justify-between items-center">
        <Link to="/work" className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Archive
        </Link>
      </section>
    </>
  );
}

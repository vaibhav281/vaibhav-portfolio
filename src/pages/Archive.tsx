import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';

export default function Archive() {
  return (
    <>
      <section className="mb-20 lg:mb-32 px-6 lg:px-0">
        <h1 className="heading-font text-5xl md:text-[80px] lg:text-[120px] leading-[0.85] font-black mb-8 lg:mb-12 tracking-tighter text-white">
          Archive <span className="text-[#ff6b35] drop-shadow-[0_0_25px_rgba(255,107,53,0.3)]">Index.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-medium">
          A comprehensive trace of production systems, architecture patterns, and engineered digital products.
        </p>
      </section>

      <section id="archive-list" className="border-t border-white/5 px-6 lg:px-0">
        {projects.map((project, index) => (
          <div key={project.id} className="archive-row group">
            <Link
              to={`/work/${project.slug}`}
              className="grid grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 items-center border-b border-white/5"
            >
              <div className="col-span-12 lg:col-span-1 font-mono text-[10px] md:text-[11px] text-zinc-600 group-hover:text-[#ff6b35] transition-colors">
                0{index + 1}
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="heading-font text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white group-hover:text-[#ff6b35] transition-colors">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] md:text-[10px] font-bold font-mono px-2 py-0.5 border border-white/10 text-zinc-400 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-lg mt-4 lg:mt-0">
                  {project.projectOverview}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-2 flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="project-arrow text-3xl text-zinc-800 opacity-0 transition-all duration-300 group-hover:text-[#ff6b35] group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </section>

      <section id="outro" className="py-24 md:py-40 flex flex-col items-center text-center px-6 lg:px-0">
        <h3 className="heading-font text-4xl md:text-5xl font-bold mb-8 italic text-white">Ready to ship?</h3>
        <Link
          to="/contact"
          className="bg-[#ff6b35] text-[#09090b] px-12 py-5 text-sm font-black tracking-widest uppercase hover:brightness-110 transition-all"
        >
          Initiate Engagement
        </Link>
      </section>
    </>
  );
}

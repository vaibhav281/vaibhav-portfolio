export default function Contact() {
  return (
    <div className="grid grid-cols-12 gap-16 lg:gap-32">
      <section className="col-span-12 lg:col-span-5">
        <div className="mb-20">
          <span className="text-[#ff6b35] font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">
            Initiate Inquiry
          </span>
          <h1 className="heading-font text-[64px] lg:text-[80px] leading-[1] font-black tracking-tighter mb-12">
            Let's build <br />
            at scale.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-12">
            We partner with teams that treat engineering as a competitive advantage. If you have a complex product requirement, we have the architecture to deliver it.
          </p>
          <div className="space-y-6">
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
              Prefer Direct Email?
            </p>
            <a
              href="mailto:chavanvaibhav281@gmail.com"
              className="text-2xl lg:text-3xl font-bold border-b-2 border-white/10 pb-1 hover:border-[#ff6b35] transition-all"
            >
              chavanvaibhav281@gmail.com
            </a>
          </div>
        </div>
        
        <div className="pt-20 border-t border-white/5">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vaibhav281"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#ff6b35]">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub_Trace
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/vaibhav-chavan281/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#ff6b35]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn_Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="col-span-12 lg:col-span-7 lg:pl-16">
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label htmlFor="full-name" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-2">Identitifer</label>
              <input
                type="text"
                id="full-name"
                name="name"
                placeholder="Your full name"
                className="bg-transparent border-b border-white/10 w-full py-4 text-[#fafafa] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email-address" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-2">Channel</label>
              <input
                type="email"
                id="email-address"
                name="email"
                placeholder="Work email address"
                className="bg-transparent border-b border-white/10 w-full py-4 text-[#fafafa] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label htmlFor="project-type" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-2">Core Focus</label>
              <input
                type="text"
                id="project-type"
                name="type"
                placeholder="e.g. B2B SaaS, Platform Engineering"
                className="bg-transparent border-b border-white/10 w-full py-4 text-[#fafafa] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-2">Delivery Window</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                placeholder="e.g. 3-6 months"
                className="bg-transparent border-b border-white/10 w-full py-4 text-[#fafafa] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-2">Architectural Vision</label>
            <textarea
              id="description"
              name="message"
              rows={4}
              placeholder="Tell us about the problem you are solving..."
              className="bg-transparent border-b border-white/10 w-full py-4 text-[#fafafa] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
              required
            />
          </div>
          
          <div className="pt-12">
            <button
              type="submit"
              className="group flex items-center gap-6 bg-[#ff6b35] text-[#09090b] px-12 py-6 text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Submit Inquiry
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default function Process() {
  return (
    <>
      <section id="handbook-header" className="mb-60 max-w-5xl">
        <div className="text-zinc-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-8">
          The Engineering Handbook
        </div>
        <h1 className="heading-font text-[72px] lg:text-[100px] leading-[0.9] font-black mb-16 tracking-tighter">
          Our protocols for <br />
          <span className="text-[#ff6b35]">superior production.</span>
        </h1>
        <p className="text-2xl lg:text-3xl text-zinc-400 leading-tight font-medium max-w-3xl">
          This is not a bio. This is a system of governance. It defines how we evaluate code, manage risk, and scale product intuition across 24-hour cycles.
        </p>
      </section>

      <section id="pillars" className="mb-80 pt-32 border-t border-white/5">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-40">
              <h2 className="heading-font text-xs uppercase tracking-[0.4em] text-zinc-600 mb-8">
                Pillar 01 // Strategy
              </h2>
              <h3 className="heading-font text-5xl font-black mb-8">Technical Decision Making</h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-40">
            <div className="max-w-3xl">
              <h4 className="heading-font text-3xl font-bold mb-6 text-[#ff6b35]">The Cost of Persistence.</h4>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                We evaluate trade-offs based on the "Deletion Principle": if a module cannot be deleted in under 30 minutes without a system-wide collapse, its coupling is a failure of architecture.
              </p>
              <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-sm">
                <div className="font-mono text-[10px] text-zinc-600 uppercase mb-4 tracking-widest">
                  Historical Context: BharatBidding
                </div>
                <p className="text-sm text-zinc-500 italic">
                  "In the industrial marketplace engine, we opted for a redundant state sync over a unified global store. This increased memory overhead by 8% but reduced incident recovery time from 2 hours to 4 minutes during the Q3 outage."
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl">
              <h4 className="heading-font text-3xl font-bold mb-6">Production-First Directive.</h4>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Every feature is a liability until it is observable. Our code review standard requires every pull request to include its own telemetry and recovery documentation. We don't ship features; we deploy resilient systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

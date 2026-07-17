import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Server, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Sub-components ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-[1px] w-8 bg-[#10b981]" />
      <span className="text-[#10b981] font-mono text-xs tracking-[0.2em] uppercase font-bold">
        {children}
      </span>
    </div>
  );
}

function CodeBlock({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) {
  return (
    <div className="border border-white/5 bg-[#050505] overflow-hidden my-6">
      {title && (
        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-400">{title}</span>
          <span className="text-[10px] font-mono text-[#10b981]">{language}</span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="text-xs font-mono leading-relaxed text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function WorkflowStep({
  step, label, sub, highlight = false, delay = 0
}: {
  step: string; label: string; sub?: string; highlight?: boolean; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center w-full xl:w-auto"
    >
      <div className={`
        px-4 py-3 border text-xs font-mono font-bold text-center min-w-[150px] w-full xl:w-auto
        ${highlight ? 'border-[#10b981]/40 bg-[#10b981]/10 text-[#10b981]' : 'border-white/10 bg-[#0a0a0a] text-zinc-400'}
      `}>
        <div className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1">{step}</div>
        <div className={highlight ? 'text-[#10b981]' : 'text-zinc-300'}>{label}</div>
        {sub && <div className="text-[9px] text-zinc-500 mt-1 font-normal">{sub}</div>}
      </div>
    </motion.div>
  );
}

export default function WikoIndiaStory() {
  const lifecycleRef = useRef(null);
  const lifecycleInView = useInView(lifecycleRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-[#10b981]/30 overflow-hidden"
         style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #10b98108 0%, transparent 70%)' }}>
      

      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-0">
          <div className="mb-12">
            <Link to="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white uppercase tracking-widest text-[11px] font-bold transition-colors">
              Home <span className="mx-2 text-zinc-700">/</span> Projects <span className="mx-2 text-zinc-700">/</span> Wiko India
            </Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] font-mono text-[10px] uppercase tracking-widest mb-8">
              <Server size={12} /> Enterprise Operations
            </div>
            
            <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              From enterprise configuration to <span className="text-[#10b981]">verified field inspections.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-8">
              <div className="aspect-video bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src="/src/assets/wiko_india_arch.png" 
                  alt="Wiko India Architecture" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="lg:col-span-4 flex flex-col justify-center lg:justify-end space-y-8">
              <div>
                <h3 className="text-white font-bold mb-2">Role</h3>
                <p className="text-sm text-zinc-400">Primary Frontend Engineer</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Architecture</h3>
                <p className="text-sm text-zinc-400">Dual Application Architecture (Admin + Inspector)</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Core Stack</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">React 18, MUI v5, Redux Toolkit, Context API, Axios, face-api.js, Geolocation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. PROJECT OVERVIEW & CONSTRAINTS
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#080808] py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <SectionLabel>Project Overview</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wiko India is an enterprise agricultural operations platform.</h2>
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <p>
                  It digitizes the entire lifecycle of procurement, field inspection, quality verification, and administrative approvals. The platform replaces manual paper-based inspections with structured digital workflows, allowing administrators to configure inspection criteria centrally.
                </p>
                <p>
                  Simultaneously, inspectors collect verified quality reports directly from agricultural farms and warehouses using mobile devices, strictly bound by location and biometric validation.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-bold text-white mb-4">My Responsibilities</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> Developed both the Admin Dashboard and mobile-responsive Inspector Dashboard.</li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> Engineered JWT authentication and session handling workflows.</li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> Built dynamic inspection report generation driven entirely by backend configurations.</li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> Integrated <code>face-api.js</code> for strict biometric field verification.</li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> Enforced HTML5 Geolocation validation with reverse geocoding via OpenStreetMap.</li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> Designed the multipart image upload pipeline for rural field reporting.</li>
                </ul>
              </div>
            </div>

            <div>
              <SectionLabel>Operational Reality</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Engineering Constraints</h2>
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  This project had severe real-world constraints that fundamentally shaped the architecture and implementation logic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Rural Connectivity", desc: "Inspectors worked with unstable 3G/4G connections, requiring robust multipart payload handling." },
                    { title: "Dynamic Configuration", desc: "Agricultural parameters changed frequently per product and could not be hardcoded." },
                    { title: "Identity Enforcement", desc: "Identity and GPS validation had to occur before any report data could be entered." },
                    { title: "Divergent UX", desc: "Admins needed dense data grids; inspectors needed a lightweight, mobile-first data collection tool." }
                  ].map((item, i) => (
                    <div key={i} className="p-4 sm:p-5 border border-white/5 bg-[#0a0a0a]">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. ARCHITECTURE & LIFECYCLE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>System Architecture</SectionLabel>
          
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Two Separate SPAs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 text-zinc-400 text-sm leading-relaxed space-y-4">
                <p>
                  The operational requirements of administrators and field inspectors were fundamentally different. Administrators managed configuration-heavy workflows, huge datasets, complex approvals, and reporting from stable desktop environments.
                </p>
                <p>
                  Inspectors required a lightweight, mobile-first application capable of capturing biometric verification, raw GPS coordinates, high-resolution photographs, and complex inspection data directly from agricultural sites over unstable networks.
                </p>
                <p>
                  Separating these into two distinct React applications (<code>WikoIndia_Admin_Dash</code> and <code>WikoIndia_inspector_Dash</code>) reduced complexity, minimized bundle sizes for field users, and allowed each interface to evolve its own specialized state management without polluting the other.
                </p>
              </div>
              <div className="md:col-span-4 p-6 border border-[#10b981]/20 bg-[#10b981]/5 font-mono text-xs flex flex-col items-center justify-center gap-4 text-center">
                <div className="px-4 py-2 border border-white/10 bg-[#0a0a0a] text-white w-full">Admin Dashboard</div>
                <div className="h-4 w-[1px] bg-[#10b981]/50" />
                <div className="px-4 py-2 border border-[#10b981]/40 bg-[#10b981]/10 text-[#10b981] font-bold w-full">Shared REST API</div>
                <div className="h-4 w-[1px] bg-[#10b981]/50" />
                <div className="px-4 py-2 border border-white/10 bg-[#0a0a0a] text-white w-full">Inspector Dashboard</div>
              </div>
            </div>
          </div>

          <SectionLabel>System Lifecycle</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">The Verifiable Pipeline</h2>
          
          <div className="p-6 md:p-12 border border-white/5 bg-[#080808]" ref={lifecycleRef}>
            <div className="flex flex-col xl:flex-row items-center gap-0 justify-center w-full">
              {[
                { step: '01', label: 'Admin Configuration', sub: 'Master Data / Orders', highlight: false, delay: 0 },
                { step: '02', label: 'Inspector Auth', sub: 'OTP JWT Login', highlight: false, delay: 0.1 },
                { step: '03', label: 'Face Verification', sub: 'face-api.js distance < 0.5', highlight: true, delay: 0.2 },
                { step: '04', label: 'GPS Validation', sub: 'LocationGuard HOC', highlight: true, delay: 0.3 },
                { step: '05', label: 'Dynamic Inspection', sub: 'Rendered via API keys', highlight: false, delay: 0.4 },
                { step: '06', label: 'Multipart Payload', sub: 'Images + Data Blob', highlight: true, delay: 0.5 },
                { step: '07', label: 'Admin Review', sub: 'Final Approval', highlight: false, delay: 0.6 },
              ].map((s, i, arr) => (
                <div key={i} className="flex flex-col xl:flex-row items-center w-full xl:w-auto">
                  <div className="w-full xl:w-auto"><WorkflowStep {...s} /></div>
                  {i < arr.length - 1 && (
                    <>
                      <motion.div initial={{ opacity: 0 }} animate={lifecycleInView ? { opacity: 1 } : {}} transition={{ delay: s.delay + 0.2 }}
                        className="hidden xl:block w-6 h-[1px] bg-gradient-to-r from-[#10b981]/40 to-[#10b981]/10 shrink-0"
                      />
                      <motion.div initial={{ opacity: 0 }} animate={lifecycleInView ? { opacity: 1 } : {}} transition={{ delay: s.delay + 0.2 }}
                        className="xl:hidden w-[1px] h-6 bg-gradient-to-b from-[#10b981]/40 to-[#10b981]/10 shrink-0"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. ENGINEERING DEEP DIVES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#0a0a0a] py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto space-y-24">
          
          {/* Deep Dive 1: Face API */}
          <div>
            <SectionLabel>Identity Verification</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Biometric Field Authentication</h3>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed mb-6">
                  <p><strong className="text-white">Problem:</strong> Preventing unauthorized personnel or third-party contractors from submitting agricultural reports in the field on behalf of an official inspector.</p>
                  <p><strong className="text-white">Constraint:</strong> Must run entirely in the browser without requiring a heavy, latency-prone backend roundtrip for every video frame.</p>
                  <p><strong className="text-white">Implementation:</strong> Integrated <code>react-webcam</code> and <code>face-api.js</code>. Pre-loaded <code>tinyFaceDetector</code> and <code>faceRecognitionNet</code> from local models. The browser captures a frame, extracts facial descriptors, and calculates the Euclidean distance against the authorized inspector's stored reference descriptor.</p>
                  <p><strong className="text-white">Tradeoff:</strong> The initial download of the <code>/models</code> weights takes a few seconds on rural networks, but guarantees absolute zero-latency verification once loaded.</p>
                </div>
              </div>
              <div>
                <CodeBlock 
                  title="FaceRecognition.js"
                  code={`const handleAuthInspector = async () => {
  setLoading(true);
  const imageSrc = webcamRef.current.getScreenshot();
  const img = await faceapi.fetchImage(imageSrc);
  
  // Extract features from current frame
  const detection = await faceapi.detectSingleFace(img)
    .withFaceLandmarks().withFaceDescriptor();

  // Load and extract authorized reference image
  const referenceImg = await faceapi.fetchImage(vaibhavRefImg);
  const referenceDetection = await faceapi.detectSingleFace(referenceImg)
    .withFaceLandmarks().withFaceDescriptor();

  // Compare descriptors
  const distance = faceapi.euclideanDistance(
    detection.descriptor, 
    referenceDetection.descriptor
  );

  const threshold = 0.5; // Strict match required
  if (distance < threshold) {
    setAuthenticated(true);
  } else {
    setError('Face not recognized.');
  }
};`}
                />
              </div>
            </div>
          </div>

          {/* Deep Dive 2: Location Guard */}
          <div>
            <SectionLabel>Location Validation</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-4">Strict Geospatial Tracking</h3>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed mb-6">
                  <p><strong className="text-white">Problem:</strong> Confirming the inspector is physically present at the designated agricultural warehouse, preventing GPS spoofing or remote submissions.</p>
                  <p><strong className="text-white">Constraint:</strong> Browsers heavily sandbox the Geolocation API. Users can deny permissions, instantly breaking the business workflow.</p>
                  <p><strong className="text-white">Implementation:</strong> Engineered a High-Order Component (<code>LocationGuard</code>) that wraps protected routes. It forces <code>navigator.geolocation.getCurrentPosition</code> on mount. Upon success, coordinates are reverse-geocoded via OpenStreetMap (<code>nominatim.openstreetmap.org</code>).</p>
                  <p><strong className="text-white">Result:</strong> If a user denies access, the HOC traps them in a strict fallback state, rendering exact, browser-specific instructions on how to re-enable location tracking in Chrome, Firefox, or Safari.</p>
                </div>
              </div>
              <div className="lg:order-1">
                <CodeBlock 
                  title="LocationGuard.js"
                  code={`const requestLocation = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        // Reverse Geocode
        const response = await axios.get(
          \`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=\${latitude}&lon=\${longitude}\`
        );
        setLocationData(response.data);
      },
      () => {
        // User denied access to location
        setOpen(true); // Triggers rigid fallback dialog
        setAllowAccessDisabled(true);
      }
    );
  }
};`}
                />
              </div>
            </div>
          </div>

          {/* Deep Dive 3: Multipart / Forms */}
          <div>
            <SectionLabel>Dynamic Payload Assembly</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Dynamic Forms & Multipart Uploads</h3>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed mb-6">
                  <p><strong className="text-white">Problem:</strong> Inspection parameters (moisture, weight, grade) change per agricultural product. Furthermore, the report must include multiple raw field images.</p>
                  <p><strong className="text-white">Implementation:</strong> The frontend fetches <code>product_report_keys</code> to dynamically render Dropdowns and TextFields. To submit, the system iterates over the dynamic state, packaging keys, values, remarks, and raw <code>image/*</code> binaries into a single, atomic <code>FormData</code> object.</p>
                  <p><strong className="text-white">Tradeoff:</strong> Appending raw binaries directly to <code>FormData</code> ensures full-resolution images for admins, but can cause upload timeouts on poor networks. The <code>multipart/form-data</code> header is strictly enforced by Axios.</p>
                </div>
              </div>
              <div>
                <CodeBlock 
                  title="ProductReport.js"
                  code={`const payload = new FormData();
payload.append('order_id', formattedOrderId);
payload.append('images_count', images?.length);
payload.append('parameters_count', parameterCount);
payload.append('locations', locationData.display_name);

// Dynamically append varying inspection parameters
for (let i = 0; i < parameterCount; i += 1) {
  payload.append(\`key\${i}\`, parameters[i]?.key);
  payload.append(\`value\${i}\`, parameterValues[\`value\${i}\`]);
  payload.append(\`key_remark\${i}\`, parameterValues[\`remark\${i}\`]);
}

// Append raw image binaries
images.forEach((image, index) => {
  payload.append(\`img\${index}\`, image);
  payload.append(\`img_remark\${index}\`, imageRemarks[index]);
});

await axios.post(ENDPOINT, payload, {
  headers: { Authorization: \`Bearer \${token}\` }
});`}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. STATE ARCHITECTURE & RETROSPECTIVE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <SectionLabel>State Architecture</SectionLabel>
            <h2 className="text-2xl font-bold text-white mb-6">Why Redux AND Context?</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed mb-6">
              <p>
                The applications utilize both the React Context API and Redux Toolkit. This was a deliberate architectural split based on data lifecycle.
              </p>
              <p>
                <strong className="text-white">Context API (JWTContext.js):</strong> Used purely for Authentication. Auth state (JWT tokens, OTP flow, login/logout) is universally read but rarely updated. Context handles the 15-minute global inactivity timeout (binding to <code>mousemove</code>, <code>scroll</code>) efficiently without triggering heavy reducer cycles.
              </p>
              <p>
                <strong className="text-white">Redux Toolkit:</strong> Handled complex, deeply nested operational data (Orders, Kanban boards, Master Data). Redux easily managed the heavy data lifting and synchronous mutations required by the Admin Dashboard.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Engineering Retrospective</SectionLabel>
            <h2 className="text-2xl font-bold text-white mb-6">If rebuilding today...</h2>
            <div className="space-y-6 text-sm text-zinc-400 leading-relaxed">
              <div className="p-4 sm:p-5 border border-white/5 bg-[#0a0a0a]">
                <strong className="text-white block mb-1">React Query Migration</strong>
                Currently, the app relies heavily on `axios` inside `useEffect` with manual `isMounted` checks and extensive `try/catch` loading states. Migrating to React Query would drastically simplify caching and background fetching, especially for the Inspector app's offline resilience.
              </div>
              <div className="p-4 sm:p-5 border border-white/5 bg-[#0a0a0a]">
                <strong className="text-white block mb-1">Client-Side Image Compression</strong>
                The `ProductReport.js` logic appends raw `image/*` files directly to `FormData`. On rural 3G connections, uploading 5 raw multi-megabyte photos can cause timeouts. Implementing `browser-image-compression` before the append phase is a crucial missing optimization.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. TECH STACK & FOOTER
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#080808] py-16 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Technology Stack</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { category: 'Frontend Core', items: ['React 18', 'React Router v6', 'Emotion'] },
              { category: 'State & Data', items: ['Redux Toolkit', 'Context API', 'Axios'] },
              { category: 'UI Architecture', items: ['Material UI v5', 'DataGrid', 'Framer Motion'] },
              { category: 'Field Integration', items: ['face-api.js', 'react-webcam', 'Geolocation'] },
              { category: 'Forms & Utils', items: ['React Hook Form', 'Yup', 'date-fns'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{col.category}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-sm text-zinc-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 border border-white/10 p-6 text-sm text-zinc-500 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-zinc-300">Development Workflow</strong> — This case study was produced using an AI-assisted engineering workflow for research, documentation, design iteration, and technical writing. All engineering decisions, implementation details, code validation, and final content were verified against the production source code and supporting project documentation.
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
          <Link to="/work" className="flex-1 p-10 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Return</div>
            <div className="text-white font-mono text-sm group-hover:text-[#10b981] transition-colors">Index</div>
          </Link>
          <Link to="/work/fitraptors" className="flex-1 p-10 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Next Case Study</div>
            <div className="text-white font-mono text-sm group-hover:text-[#10b981] transition-colors flex items-center gap-2">FitRaptors <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
          </Link>
        </div>
      </section>
    </div>
  );
}

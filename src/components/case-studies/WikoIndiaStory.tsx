import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmoothImage from '../ui/SmoothImage';

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
              Professional Project
            </div>
            
            <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              From enterprise configuration to <span className="text-[#10b981]">verified field inspections.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-8">
              <div className="aspect-video bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <SmoothImage 
                  src="/assets/wiko_india_arch.png" 
                  alt="Wiko India Architecture" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="lg:col-span-4 flex flex-col justify-center lg:justify-end space-y-8">
              <div>
                <h3 className="text-white font-bold mb-2">Role</h3>
                <p className="text-sm text-zinc-400">Frontend Developer — Sole Ownership</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Architecture</h3>
                <p className="text-sm text-zinc-400">Two Separate React SPAs (Admin + Inspector)</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Project Type</h3>
                <p className="text-sm text-zinc-400">Professional — Cross-functional Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. PROJECT OVERVIEW
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#080808] py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Project Overview</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What is Wiko India?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                Wiko India is an agricultural operations platform that digitizes procurement, quality inspection, and administrative workflows for agricultural commodities. It connects farmers and sellers with enterprise buyers, managing the complete lifecycle from product configuration to verified field inspections.
              </p>
              <p>
                Administrators configure products, inspection parameters, packaging materials, and operational master data from a desktop dashboard. Field inspectors use a separate mobile-first application to perform location-verified inspections, capture photographic evidence, verify their identity biometrically, and submit structured quality reports directly from agricultural sites.
              </p>
            </div>

            {/* Scope Card */}
            <div className="p-6 border border-white/5 bg-[#0a0a0a]">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Project Scope</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm">
                <div><span className="text-zinc-500 block text-xs uppercase tracking-wider mb-1">Project Type</span><span className="text-white">Professional</span></div>
                <div><span className="text-zinc-500 block text-xs uppercase tracking-wider mb-1">Role</span><span className="text-white">Frontend Developer</span></div>
                <div><span className="text-zinc-500 block text-xs uppercase tracking-wider mb-1">Team</span><span className="text-white">Cross-functional</span></div>
                <div><span className="text-zinc-500 block text-xs uppercase tracking-wider mb-1">Ownership</span><span className="text-[#10b981]">Both Dashboards</span></div>
                <div><span className="text-zinc-500 block text-xs uppercase tracking-wider mb-1">Backend</span><span className="text-zinc-400">No</span></div>
                <div><span className="text-zinc-500 block text-xs uppercase tracking-wider mb-1">Deployment</span><span className="text-zinc-400">No</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. MY RESPONSIBILITIES (Grouped by Engineering Domain)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Frontend Ownership</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">What I Built & Owned</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                domain: 'Application Architecture', 
                items: ['Admin Dashboard (desktop)', 'Inspector Dashboard (mobile-first)', 'Shared authentication layer', 'Routing & navigation'] 
              },
              { 
                domain: 'Identity & Auth', 
                items: ['JWT session management', 'Face recognition integration', '15-minute inactivity timeout', 'Activity event listeners'] 
              },
              { 
                domain: 'Field Data Collection', 
                items: ['Dynamic inspection forms', 'Multipart image uploads', 'GPS capture & reverse geocoding', 'Location permission handling'] 
              },
              { 
                domain: 'UI Engineering', 
                items: ['Responsive layouts (MUI)', 'API integration (Axios)', 'Form validation (Yup)', 'Error handling & loading states'] 
              },
            ].map((group, i) => (
              <div key={i} className="p-5 border border-white/5 bg-[#0a0a0a]">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">{group.domain}</h4>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-400">
                      <CheckCircle size={14} className="text-[#10b981] shrink-0 mt-0.5" />
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
          4. WHY TWO DASHBOARDS
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#080808] py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>System Architecture</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Two Separate Applications?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-white/5 bg-[#0a0a0a]">
              <h3 className="text-white font-bold mb-4">Admin Dashboard</h3>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-4">WikoIndia_Admin_Dash</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Desktop-first layout</li>
                <li>Dense data tables & DataGrid views</li>
                <li>Master data configuration (products, packaging, ports)</li>
                <li>Order management & approval workflows</li>
                <li>User management (Buyers, Sellers, Inspectors)</li>
                <li>Complex CRUD operations</li>
              </ul>
            </div>
            <div className="p-6 border border-[#10b981]/20 bg-[#10b981]/5">
              <h3 className="text-[#10b981] font-bold mb-4">Inspector Dashboard</h3>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-4">WikoIndia_inspector_Dash</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Mobile-first, single-task focus</li>
                <li>Camera access for face verification</li>
                <li>GPS capture for location tagging</li>
                <li>Dynamic inspection form rendering</li>
                <li>Multi-image capture with remarks</li>
                <li>Minimal navigation, fast submission</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
            Splitting these into two separate React applications (<code>WikoIndia_Admin_Dash</code> and <code>WikoIndia_inspector_Dash</code>) kept each bundle focused on its users. Inspectors in the field did not need to download admin components, and administrators did not need camera or geolocation dependencies. Each application maintained its own state management, routing, and UI optimizations.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. END-TO-END WORKFLOW
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Inspection Workflow</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">End-to-End Inspection Pipeline</h2>
          
          <div className="p-6 md:p-10 border border-white/5 bg-[#080808]" ref={lifecycleRef}>
            <div className="flex flex-col xl:flex-row items-center gap-0 justify-center w-full">
              {[
                { step: '01', label: 'Admin Configuration', sub: 'Products, parameters, orders', highlight: false },
                { step: '02', label: 'Inspector Login', sub: 'Mobile + Password → JWT', highlight: false },
                { step: '03', label: 'Face Verified', sub: 'face-api.js, distance < 0.5', highlight: true },
                { step: '04', label: 'Location Captured', sub: 'GPS → reverse geocoded', highlight: true },
                { step: '05', label: 'Dynamic Report', sub: 'API-driven form fields', highlight: false },
                { step: '06', label: 'Evidence Submitted', sub: 'FormData with images', highlight: true },
                { step: '07', label: 'Admin Review', sub: 'Approval workflow', highlight: false },
              ].map((s, i, arr) => (
                <div key={i} className="flex flex-col xl:flex-row items-center w-full xl:w-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={lifecycleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="w-full xl:w-auto"
                  >
                    <div className={`
                      px-4 py-3 border text-xs font-mono font-bold text-center min-w-[150px] w-full xl:w-auto
                      ${s.highlight ? 'border-[#10b981]/40 bg-[#10b981]/10 text-[#10b981]' : 'border-white/10 bg-[#0a0a0a] text-zinc-400'}
                    `}>
                      <div className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1">{s.step}</div>
                      <div className={s.highlight ? 'text-[#10b981]' : 'text-zinc-300'}>{s.label}</div>
                      <div className="text-[9px] text-zinc-500 mt-1 font-normal">{s.sub}</div>
                    </div>
                  </motion.div>
                  {i < arr.length - 1 && (
                    <>
                      <div className="hidden xl:block w-6 h-[1px] bg-gradient-to-r from-[#10b981]/40 to-[#10b981]/10 shrink-0" />
                      <div className="xl:hidden w-[1px] h-6 bg-gradient-to-b from-[#10b981]/40 to-[#10b981]/10 shrink-0" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. ENGINEERING CHALLENGES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#0a0a0a] py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto space-y-24">
          
          {/* Challenge 1: Face Verification */}
          <div>
            <SectionLabel>Identity Verification</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Biometric Field Authentication</h3>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                  <p><strong className="text-white">Problem:</strong> Inspections needed to confirm the authorized inspector was physically present, not a third party submitting reports on their behalf.</p>
                  <p><strong className="text-white">Constraint:</strong> Verification had to run entirely in the browser using client-side models to avoid backend roundtrips for every frame capture.</p>
                  <p><strong className="text-white">Decision:</strong> Integrated <code>react-webcam</code> and <code>face-api.js</code> with four pre-loaded models (<code>tinyFaceDetector</code>, <code>faceLandmark68Net</code>, <code>faceRecognitionNet</code>, <code>ssdMobilenetv1</code>). The browser captures a frame, extracts facial descriptors, and calculates Euclidean distance against the stored reference image.</p>
                  <p><strong className="text-white">Evidence:</strong> Match threshold set at <code>0.5</code>. If the distance exceeds the threshold, authentication fails and the inspector cannot proceed.</p>
                </div>
              </div>
              <div>
                <CodeBlock 
                  title="FaceRecognition.js — Core verification logic"
                  code={`const img = await faceapi.fetchImage(imageSrc);
const detection = await faceapi
  .detectSingleFace(img)
  .withFaceLandmarks()
  .withFaceDescriptor();

const referenceImg = await faceapi.fetchImage(vaibhavRefImg);
const referenceDetection = await faceapi
  .detectSingleFace(referenceImg)
  .withFaceLandmarks()
  .withFaceDescriptor();

const distance = faceapi.euclideanDistance(
  detection.descriptor,
  referenceDetection.descriptor
);

const threshold = 0.5;
if (distance < threshold) {
  setAuthenticated(true);
}`}
                />
              </div>
            </div>
          </div>

          {/* Challenge 2: Location Guard */}
          <div>
            <SectionLabel>Location Validation</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-4">Geolocation & Reverse Geocoding</h3>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                  <p><strong className="text-white">Problem:</strong> Submitted inspection reports needed to include the physical location of the inspection site to associate reports with specific agricultural facilities.</p>
                  <p><strong className="text-white">Constraint:</strong> Browsers sandbox the Geolocation API behind user permissions. If denied, the entire inspection workflow breaks.</p>
                  <p><strong className="text-white">Decision:</strong> Built a <code>LocationGuard</code> wrapper component that requests <code>navigator.geolocation.getCurrentPosition</code> on mount. On success, coordinates are reverse-geocoded via OpenStreetMap's Nominatim API. On denial, the component renders a dialog with browser-specific instructions for re-enabling location access in Chrome, Firefox, and Safari.</p>
                  <p><strong className="text-white">Evidence:</strong> Location data (<code>display_name</code>, <code>lat</code>, <code>lon</code>) is attached to every submitted report via the FormData payload.</p>
                </div>
              </div>
              <div className="lg:order-1">
                <CodeBlock 
                  title="LocationGuard.js — Permission & geocoding"
                  code={`if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await axios.get(
        \`https://nominatim.openstreetmap.org/reverse
          ?format=jsonv2&lat=\${latitude}&lon=\${longitude}\`
      );
      setLocationData(response.data);
    },
    () => {
      // Denied — show browser-specific instructions
      setOpen(true);
      setAllowAccessDisabled(true);
    }
  );
}`}
                />
              </div>
            </div>
          </div>

          {/* Challenge 3: Dynamic Forms & Multipart Uploads */}
          <div>
            <SectionLabel>Dynamic Payload Assembly</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Metadata-Driven Forms & Multipart Uploads</h3>
                <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                  <p><strong className="text-white">Problem:</strong> Inspection parameters (moisture, weight, grade) change per product and cannot be hardcoded. The report must also include multiple raw field photographs with individual remarks.</p>
                  <p><strong className="text-white">Decision:</strong> Designed and implemented a metadata-driven form renderer. The frontend fetches <code>product_report_keys</code> from the API, which returns parameter names and their allowed values. These are dynamically rendered as <code>Select</code> dropdowns with <code>MenuItem</code> options — no hardcoded form fields.</p>
                  <p><strong className="text-white">Evidence:</strong> On submission, all dynamic parameters, images, remarks, location data, and rating are serialized into a single <code>FormData</code> object and posted with JWT authorization.</p>
                </div>
              </div>
              <div>
                <CodeBlock 
                  title="ProductReport.js — FormData assembly"
                  code={`const payload = new FormData();
payload.append('order_id', formattedOrderId);
payload.append('images_count', images?.length);
payload.append('parameters_count', parameterCount);
payload.append('locations', address);
payload.append('longitude', locationData?.lon);
payload.append('latitude', locationData?.lat);

for (let i = 0; i < parameterCount; i += 1) {
  payload.append(\`key\${i}\`, parameters[i]?.key);
  payload.append(\`value\${i}\`, parameterValues[\`value\${i}\`]);
  payload.append(\`key_remark\${i}\`, parameterValues[\`remark\${i}\`]);
}

images.forEach((image, index) => {
  payload.append(\`img\${index}\`, image);
  payload.append(\`img_remark\${index}\`, imageRemarks[index]);
});`}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. AUTHENTICATION LIFECYCLE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <SectionLabel>Authentication Lifecycle</SectionLabel>
            <h2 className="text-2xl font-bold text-white mb-6">Session Management with JWTContext</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                Both dashboards share the same authentication architecture via a <code>JWTContext</code> React Context provider. The Context manages login, logout, registration, and session initialization using a <code>useReducer</code> pattern.
              </p>
              <p>
                <strong className="text-white">Inactivity Timeout:</strong> A 15-minute inactivity timer automatically logs out the user. The timer resets on <code>mousemove</code>, <code>keydown</code>, <code>scroll</code>, and <code>touchstart</code> events — covering both desktop and mobile interactions.
              </p>
              <p>
                <strong className="text-white">Session Lifecycle:</strong> On app initialization, the Context checks <code>localStorage</code> for an existing access token, validates it via <code>isValidToken</code>, and either restores the session or forces re-authentication.
              </p>
            </div>

            {/* Authentication Flow Diagram */}
            <div className="mt-8 p-5 border border-white/5 bg-[#0a0a0a] font-mono text-xs">
              <div className="space-y-3 text-center">
                {[
                  { label: 'Mobile + Password Login', color: 'text-zinc-300' },
                  { label: 'JWT Access + Refresh Tokens Issued', color: 'text-zinc-300' },
                  { label: 'Activity Monitoring (mousemove, keydown, scroll, touch)', color: 'text-[#10b981]' },
                  { label: '15-Minute Inactivity Timeout', color: 'text-zinc-300' },
                  { label: 'Automatic Logout + Session Reset', color: 'text-zinc-300' },
                ].map((step, i, arr) => (
                  <div key={i}>
                    <div className={`${step.color} font-bold`}>{step.label}</div>
                    {i < arr.length - 1 && <div className="text-zinc-700 my-1">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* State Architecture */}
          <div>
            <SectionLabel>State Architecture</SectionLabel>
            <h2 className="text-2xl font-bold text-white mb-6">Why Redux AND Context?</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                Both applications use React Context API and Redux Toolkit, split by data lifecycle.
              </p>
              <p>
                <strong className="text-white">Context API (JWTContext):</strong> Handles authentication state exclusively. Auth data (JWT tokens, login/logout, user object) is universally read but rarely updated. The Context also manages the 15-minute inactivity timeout by binding to <code>mousemove</code>, <code>scroll</code>, <code>keydown</code>, and <code>touchstart</code> events.
              </p>
              <p>
                <strong className="text-white">Redux Toolkit:</strong> Used in the Admin Dashboard primarily through a custom <code>product.js</code> slice that managed product creation and configuration for the platform's Flutter mobile app. The project was built on the Minimal UI template, which included additional default slices — these were retained for potential future use but were not part of the core Wiko India implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. WHAT I COULD NOT CHANGE + RETROSPECTIVE
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#080808] py-16 lg:py-24 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <SectionLabel>Constraints</SectionLabel>
            <h2 className="text-2xl font-bold text-white mb-6">What I Could Not Change</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                This was a professional project with established backend APIs and business workflows. My scope was strictly frontend implementation.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {[
                'Backend APIs — provided by the backend team',
                'Authentication strategy — JWT was predetermined',
                'Business workflows — defined by operations team',
                'Database schema — backend-managed',
                'Deployment infrastructure — handled separately',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                  <span className="text-zinc-600 shrink-0">—</span> {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-400 leading-relaxed">
              I focused entirely on frontend architecture, UI engineering, API integration, and all browser-level features (face verification, geolocation, dynamic forms, multipart uploads).
            </p>
          </div>

          <div>
            <SectionLabel>Engineering Retrospective</SectionLabel>
            <h2 className="text-2xl font-bold text-white mb-6">If Rebuilding Today</h2>
            <div className="space-y-6">
              <div className="p-4 sm:p-5 border border-white/5 bg-[#0a0a0a]">
                <strong className="text-white block mb-2">Client-side image compression</strong>
                <p className="text-xs text-zinc-500 leading-relaxed">Raw <code>image/*</code> files are appended directly to FormData. Implementing <code>browser-image-compression</code> before the append phase would significantly reduce payload size for field submissions.</p>
              </div>
              <div className="p-4 sm:p-5 border border-white/5 bg-[#0a0a0a]">
                <strong className="text-white block mb-2">React Query for data fetching</strong>
                <p className="text-xs text-zinc-500 leading-relaxed">The current pattern uses <code>axios</code> inside <code>useEffect</code> with manual <code>isMounted</code> cleanup checks. Migrating to React Query would simplify caching, background refetching, and error state management.</p>
              </div>
              <div className="p-4 sm:p-5 border border-white/5 bg-[#0a0a0a]">
                <strong className="text-white block mb-2">Upload retry logic</strong>
                <p className="text-xs text-zinc-500 leading-relaxed">The current submission is a single <code>axios.post</code> with no retry mechanism. Adding exponential backoff or a submission queue would improve reliability for field conditions with intermittent connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. TECH STACK (Grouped by Capability)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 py-16 px-3 sm:px-6 lg:px-0">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Technology Stack</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { category: 'Frontend', items: ['React', 'Material UI v5', 'React Router v6'] },
              { category: 'State', items: ['Redux Toolkit', 'Context API'] },
              { category: 'Validation', items: ['Yup', 'React Hook Form'] },
              { category: 'Browser APIs', items: ['Geolocation', 'MediaDevices', 'Canvas'] },
              { category: 'Computer Vision', items: ['face-api.js', 'react-webcam'] },
              { category: 'Networking', items: ['Axios', 'FormData', 'JWT'] },
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
            <strong className="text-zinc-300">Development Workflow</strong> — This case study was produced using an AI-assisted workflow for research, documentation structure, and technical writing. All engineering claims, code snippets, and architectural descriptions were verified against the production source code. No implementation was generated by AI.
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

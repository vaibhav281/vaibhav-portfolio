import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-10 border-t border-white/5 mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="VC Logo" className="w-4 h-4 object-contain rounded-sm" />
          <span className="heading-font font-bold text-sm tracking-widest uppercase">VAIBHAV CHAVAN</span>
        </div>
        <div className="hidden md:block font-bold text-[10px] text-zinc-800 uppercase tracking-[0.4em]">
          © {currentYear} VAIBHAV / EST. NASHIK
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex gap-12 font-bold text-[10px] text-zinc-600 uppercase tracking-widest">
            <Link to="/work" className="hover:text-white transition-colors">Work Archive</Link>
            <Link to="/process" className="hover:text-white transition-colors">Process Thesis</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Connect</Link>
          </div>
          <div className="flex gap-6 text-zinc-500">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="font-bold text-[10px] text-zinc-800 uppercase tracking-[0.4em] md:hidden">
          © {currentYear} VAIBHAV / EST. NASHIK
        </div>
      </div>
    </footer>
  );
}

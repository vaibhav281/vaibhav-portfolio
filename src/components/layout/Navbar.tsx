import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-blur border-b border-white/5" style={{ viewTransitionName: 'main-nav' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <img src="/favicon.png" alt="VC Logo" className="w-5 h-5 md:w-6 md:h-6 object-contain shadow-[0_0_15px_rgba(255,107,53,0.5)] group-hover:shadow-[0_0_25px_rgba(255,107,53,0.8)] transition-shadow rounded-sm" />
          <span className="heading-font font-bold text-lg tracking-tight text-white">VAIBHAV</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                location.pathname.startsWith(link.path) 
                  ? 'text-white border-b border-[#ff6b35] pb-0.5' 
                  : link.name === 'Contact' 
                    ? 'text-[#ff6b35] hover:brightness-125' 
                    : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-[#09090b] flex flex-col items-center justify-center gap-12 z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl heading-font font-black uppercase tracking-widest transition-colors ${
                    location.pathname.startsWith(link.path) 
                      ? 'text-white border-b-2 border-[#ff6b35] pb-2' 
                      : link.name === 'Contact' 
                        ? 'text-[#ff6b35]' 
                        : 'text-zinc-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

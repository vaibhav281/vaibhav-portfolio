import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Archive from './pages/Archive';
import Process from './pages/Process';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative flex flex-col">
        <Navbar />
        <main className="pt-40 pb-20 px-10 max-w-[1440px] mx-auto w-full flex-grow" style={{ viewTransitionName: 'main-content' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Archive />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/:id" element={<CaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

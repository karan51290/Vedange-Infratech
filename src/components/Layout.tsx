import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { businessData } from '../data';

export const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header hide/show logic
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsScrolled(true); // Hide
      } else {
        setIsScrolled(false); // Show
      }
      
      // Scroll to top button logic
      setShowScrollTop(currentScrollY > 300);
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-mute transition-transform duration-300 ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 transition-transform group-hover:scale-105" />
            <span className="font-display font-bold text-2xl text-ink tracking-tight uppercase">
              {businessData.name}
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-primary'
                    : 'text-ink hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-canvas border-t border-mute shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-ink font-medium px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-ink text-canvas pt-16 pb-8 border-t border-ink-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-10 h-10" />
              <span className="font-display font-bold text-xl tracking-tight uppercase">
                {businessData.name}
              </span>
            </Link>
            <p className="text-canvas-soft opacity-80 mb-6 max-w-sm text-sm leading-relaxed">
              Goa's trusted manufacturing partner and distributor for JSW Steel Limited. Building strength, delivering trust since {businessData.established}.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-canvas-soft text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-canvas-soft text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-canvas-soft text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-canvas-soft opacity-60 text-sm">
            &copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a
          href={`tel:${businessData.phone}`}
          className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-primary-hover transition-transform hover:-translate-y-1"
          aria-label="Call Us"
        >
          <Phone size={24} />
        </a>
        
        <button
          onClick={scrollToTop}
          className={`w-14 h-14 bg-ink text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-ink-light transition-all ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

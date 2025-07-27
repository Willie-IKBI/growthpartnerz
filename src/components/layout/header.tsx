'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Who we are', href: '#about' },
  { label: 'What we do', href: '#services' },
  { label: 'Client reviews', href: '#testimonials' },
  { label: 'Get in touch', href: '#contact' },
];

function getSectionId(href: string): string {
  if (href === '/') return 'home';
  if (href.startsWith('#')) return href.slice(1);
  return '';
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false); // Hide header when scrolling down
      } else {
        setIsHeaderVisible(true); // Show header when scrolling up
      }
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const sectionIds = navLinks.map(link => getSectionId(link.href)).filter(Boolean);
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const handleScroll = () => {
      let current = 'home';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed md:absolute top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        'backdrop-blur-md border-b border-white/10 shadow-sm',
        isScrolled ? 'bg-[#0F121A]/95' : 'bg-[#0F121A]/50',
        !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-6 py-3 max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-growth-partnerz.svg"
            width={160}
            height={40}
            alt="Growth Partnerz Logo"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const sectionId = getSectionId(link.href);
            const isActive = sectionId === activeSection || (link.href === '/' && pathname === '/');

            return (
              <div key={link.href} className="relative flex flex-col items-center">
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-white text-base font-display px-2 py-1 transition',
                    isActive ? 'font-semibold' : 'font-normal'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    setTimeout(() => window.dispatchEvent(new Event('scroll')), 10);
                  }}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <span
                    className="mt-1 h-0.5 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    style={{
                      display: 'block',
                      height: '2px',
                      width: '100%',
                      borderRadius: '9999px',
                      background: 'linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899)',
                      marginTop: '0.25rem',
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="text-white focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            className={cn(
              'absolute top-full right-0 mt-2 bg-[#0F121A] rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4 z-[60] min-w-[180px] transition-all duration-300 ease-in-out border border-white/10',
              menuOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-base font-display font-normal px-2 py-3 min-h-[44px] flex items-center transition-colors hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/data/nav';

export function Footer() {
  return (
    <footer className="w-full py-10 px-6 bg-brand-dark border-t border-white/10 mt-12">
      <div className="max-w-content mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1 flex flex-col gap-2">
          <Image src="/images/logo.svg" alt="Growth Partnerz Logo" width={40} height={40} />
          <span className="text-sm text-brand-light">Growth Partnerz helps you accelerate sales with custom software and proven lead generation.</span>
        </div>
        <nav className="flex-1 flex flex-col gap-2 items-center md:items-start">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-pink transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 flex flex-col gap-2 items-end">
          <span className="text-sm">Contact: <a href="mailto:hello@growthpartnerz.com" className="underline">hello@growthpartnerz.com</a></span>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Twitter"><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="20" height="20" fill="currentColor"><rect width="20" height="20" rx="4" /></svg></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-brand-light mt-8">Your Vision. Our Strategy.</div>
    </footer>
  );
} 
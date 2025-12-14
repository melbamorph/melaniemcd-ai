import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Melanie McDonough | AI Solutions for Government',
  description:
    'Portfolio showcasing AI adoption strategies, demos, and playbooks for local government and civic technology.'
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/demos', label: 'Demos' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-surface-50`}>
      <body className="min-h-screen bg-surface-50 font-sans text-white antialiased">
        <div className="relative min-h-screen">
          <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" aria-hidden="true" />
          
          <div className="relative mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-12">
            <header className="mb-12 flex items-center justify-between">
              <Link href="/" className="group space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-400 transition-colors group-hover:text-accent-300">
                  Melanie McDonough
                </p>
                <h1 className="text-lg font-semibold text-white transition-colors group-hover:text-muted-100">
                  AI Solutions for Government
                </h1>
              </Link>
              
              <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <Link key={link.href} className="nav-link" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <button 
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-300 transition-colors hover:bg-surface-200 hover:text-white sm:hidden"
                aria-label="Open menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </header>

            <main className="scroll-fade-in">{children}</main>

            <footer className="mt-20 border-t border-white/[0.05] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-300">
                    Advancing AI adoption in local government.
                  </p>
                  <p className="text-xs text-muted-400">
                    Building practical solutions for public sector challenges.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link className="link" href="/about">
                    About
                  </Link>
                  <Link className="link" href="/contact">
                    Contact
                  </Link>
                  <a
                    className="link"
                    href="https://www.linkedin.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="mt-8 text-xs text-muted-500">
                Personal portfolio. Views expressed are my own.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

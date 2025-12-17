import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ThemePicker } from '@/components/ThemePicker';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Melanie McDonough | AI Experiments for Local Government',
  description:
    'A personal innovation space for sharing AI experiments and learnings focused on local government and civic technology.'
};

const navLinks = [
  { href: '/', label: 'Home' },
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
            <header className="mb-8 flex items-center justify-end gap-4">
              <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <Link key={link.href} className="nav-link" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <ThemePicker />
              
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
                    © Melanie McDonough
                  </p>
                  <p className="mt-8 text-xs text-muted-500">
                    Personal innovation space. Views expressed are my own.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    className="link inline-flex items-center gap-1.5"
                    href="https://github.com/melbamorph"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="link inline-flex items-center gap-1.5"
                    href="https://www.linkedin.com/in/melaniemcdonough/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <Link className="link" href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
             
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

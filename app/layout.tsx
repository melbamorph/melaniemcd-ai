import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Melanie McDonough | AI Experiments for Local Government',
  description:
    'A personal innovation space for sharing AI experiments and learnings focused on local government and civic technology.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-surface-50`}>
      <body className="min-h-screen bg-surface-50 font-sans text-white antialiased">
        <div className="relative min-h-screen">
          <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" aria-hidden="true" />
          
          <div className="relative mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-12">
            <Header />

            <main className="scroll-fade-in">{children}</main>

            <footer className="mt-12 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
                <div className="space-y-1">
                  <p className="text-sm text-muted-300">
                    © Melanie McDonough
                  </p>
                  <p className="text-xs text-muted-500">
                    Personal innovation space. Views expressed are my own.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

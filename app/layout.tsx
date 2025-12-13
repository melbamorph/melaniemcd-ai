import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melanie McDonough | Local Government Portfolio',
  description:
    'Portfolio site for Melanie McDonough featuring work highlights, demos, playbooks, and practical local government updates.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="bg-sand-50">
      <body className={`${inter.className} bg-sand-50 text-slate-900 antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-sand-100">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-12">
            <header className="mb-10 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-sand-600">Melanie McDonough</p>
                <h1 className="text-xl font-semibold text-slate-900">Local Government & Civic Technology</h1>
              </div>
              <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 sm:flex">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/work">Work</a>
                <a className="nav-link" href="/demos">Demos</a>
                <a className="nav-link" href="/playbooks">Playbooks</a>
                <a className="nav-link" href="/writing">Writing</a>
                <a className="nav-link" href="/about">About</a>
                <a className="nav-link" href="/contact">Contact</a>
              </nav>
            </header>
            <main>{children}</main>
            <footer className="mt-16 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>Practical, resident-centered local government delivery.</p>
              <div className="flex gap-4">
                <a className="underline-offset-4 hover:underline" href="/contact">
                  Get in touch
                </a>
                <a className="underline-offset-4 hover:underline" href="/about">
                  About Melanie
                </a>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

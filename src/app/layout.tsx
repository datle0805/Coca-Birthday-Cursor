'use client';

import React, { useEffect, useState } from 'react';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setIsDark(stored === 'dark');
      document.documentElement.classList.toggle('dark', stored === 'dark');
      return;
    }

    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)',
    ).matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  // Sync html.dark class whenever isDark changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <html lang="en" className="dark:bg-slate-950">
      <body className="transition-colors duration-300">
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Soft background halo shapes */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl animate-float-slower dark:bg-sky-900/60" />
            <div className="absolute -bottom-40 -right-24 h-80 w-80 rounded-full bg-rose-200/60 blur-3xl animate-float-slow dark:bg-rose-900/60" />
            <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-amber-100/80 blur-3xl opacity-90 dark:bg-slate-800/70" />
          </div>

          {/* Simple top nav with anchors */}
          <header className="sticky top-0 z-30 border-b border-white/70 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-400 via-rose-300 to-amber-300 text-xl shadow-md dark:from-sky-500 dark:via-rose-400 dark:to-amber-400">
                  🧸
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">
                    Welcome Baby
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Little Moments Album
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-300 sm:flex">
                <a
                  href="#about"
                  className="transition hover:text-sky-500 dark:hover:text-sky-300"
                >
                  About
                </a>
                <a
                  href="#milestones"
                  className="transition hover:text-sky-500 dark:hover:text-sky-300"
                >
                  Milestones
                </a>
                <a
                  href="#gallery"
                  className="transition hover:text-sky-500 dark:hover:text-sky-300"
                >
                  Photos
                </a>
                <a
                  href="#stats"
                  className="transition hover:text-sky-500 dark:hover:text-sky-300"
                >
                  Growth
                </a>
                <a
                  href="#memories"
                  className="transition hover:text-sky-500 dark:hover:text-sky-300"
                >
                  Memories
                </a>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-100 bg-white/70 text-xs text-slate-700 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? '☾' : '☼'}
                </button>
              </div>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

const FooterSection: React.FC = () => {
  return (
    <footer className="relative border-t border-white/70 bg-white/70 pb-10 pt-8 text-xs text-slate-500 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
            Made with love
          </p>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-100">
            Made with love by Mom &amp; Dad.
          </p>
          <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">
            Thank you for visiting Aurora&apos;s first-year album.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex gap-2">
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-500 shadow-sm transition hover:bg-sky-100 dark:bg-sky-900/60 dark:text-sky-200 dark:hover:bg-sky-800"
              aria-label="Share on Instagram"
            >
              ♡
            </a>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500 shadow-sm transition hover:bg-rose-100 dark:bg-rose-900/60 dark:text-rose-200 dark:hover:bg-rose-800"
              aria-label="Share on Facebook"
            >
              ✦
            </a>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500 shadow-sm transition hover:bg-amber-100 dark:bg-amber-900/60 dark:text-amber-200 dark:hover:bg-amber-800"
              aria-label="Share with family"
            >
              ✉
            </a>
          </div>
          <p className="text-[0.7rem] text-slate-400 dark:text-slate-500">
            All photos and memories © {new Date().getFullYear()} Aurora&apos;s
            family.
          </p>
        </div>
      </div>

      {/* Small floating footer elements */}
      <div className="pointer-events-none absolute -top-4 left-16 h-6 w-6 animate-float-slow">
        <span className="text-lg text-amber-300">★</span>
      </div>
      <div className="pointer-events-none absolute -top-2 right-12 h-7 w-7 animate-float-slower">
        <span className="text-lg text-sky-300">☁️</span>
      </div>
    </footer>
  );
};

export default FooterSection;

'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

const HeroSection: React.FC = () => {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:flex-row lg:items-center lg:gap-16">
      {/* Decorative parallax-style clouds and stars */}
      <div className="pointer-events-none absolute inset-x-0 -top-12 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.38),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,207,232,0.4),transparent_55%)]" />

      <div className="pointer-events-none absolute -left-10 top-10 -z-10 hidden h-28 w-28 rounded-full bg-sky-200/70 blur-2xl sm:block animate-float-slow" />
      <div className="pointer-events-none absolute bottom-16 right-0 -z-10 hidden h-24 w-24 rounded-full bg-rose-200/70 blur-2xl sm:block animate-float-slower" />

      <div className="flex-1 space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-600 shadow-sm ring-1 ring-white/70 backdrop-blur dark:bg-slate-900/70 dark:text-sky-300 dark:ring-slate-800">
          <span className="text-lg">✨</span>
          <span>Introducing our little sunshine</span>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
            Meet{' '}
            <span className="bg-gradient-to-r from-sky-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Baby Aurora
            </span>
            , our tiny miracle.
          </h1>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Born • July 14, 2025 • 7:42 AM
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            A cozy space to relive every first smile, sleepy yawn, and
            heart-melting giggle from newborn to one year old.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#milestones"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-rose-400 to-amber-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-400/30 transition hover:translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
          >
            View Milestones
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-full border border-sky-100 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-600 shadow-sm transition hover:border-sky-200 hover:bg-sky-50/70 dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-300 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            Photo Album
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm dark:bg-slate-900/80">
            <span className="text-base">☁️</span>
            <span>Soft clouds & sleepy dreams</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm dark:bg-slate-900/80">
            <span className="text-base">⭐️</span>
            <span>Everyday magic, saved forever</span>
          </div>
        </div>
      </div>

      {/* Baby photo / illustration card */}
      <div className="flex-1">
        <div className="soft-card relative mx-auto max-w-md overflow-hidden">
          {/* Floating icons */}
          <div className="pointer-events-none absolute -left-6 top-6 h-9 w-9 rounded-2xl bg-sky-100/90 text-lg shadow-sm ring-1 ring-white/80 flex items-center justify-center animate-float-slow">
            🍼
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-10 h-10 w-10 rounded-full bg-amber-100/90 text-lg shadow-sm ring-1 ring-white/80 flex items-center justify-center animate-float-slower">
            🧸
          </div>
          <div className="pointer-events-none absolute -top-4 right-14 flex gap-1 text-base text-amber-300">
            ★ ★ ★
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-white/20" />
            <img
              src="https://images.pexels.com/photos/3875215/pexels-photo-3875215.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cozy newborn baby sleeping peacefully"
              className="h-full w-full object-cover transition duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-between px-5 pb-5 pt-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-300">
                Baby Aurora
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-200">
                3.4 kg • 50 cm • Leo rising
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 px-3 py-2 text-xs text-sky-600 shadow-sm dark:bg-sky-900/50 dark:text-sky-200">
              <p className="font-semibold">Day 3</p>
              <p className="text-[0.7rem]">Counting tiny toes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

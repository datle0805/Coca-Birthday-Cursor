'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

const AboutSection: React.FC = () => {
  const milestones = [
    {
      label: 'Newborn',
      age: '0 months',
      description: 'Sleepy cuddles, soft sighs, and first hello.',
      icon: '👶',
    },
    {
      label: 'Curious Koala',
      age: '3 months',
      description: 'Wide eyes, gummy smiles, and rolling wiggles.',
      icon: '🧸',
    },
    {
      label: 'Little Explorer',
      age: '6 months',
      description: 'Sitting tall, grabbing toys, belly laughs.',
      icon: '🌈',
    },
    {
      label: 'Busy Bumblebee',
      age: '9 months',
      description: 'Crawling fast, babbling stories, clapping hands.',
      icon: '🐝',
    },
    {
      label: 'First Birthday',
      age: '12 months',
      description: 'Wobbly steps, cake crumbs, and so much wonder.',
      icon: '🎂',
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] lg:items-start">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
            About Baby Aurora
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            A tiny person with a galaxy of personality.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            From the very first sleepy stretch, Aurora filled our home with a
            gentle glow. This little corner of the internet is our living love
            letter – a place to gather her stories, celebrate her firsts, and
            remember how small her fingers once were.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Scroll through her first year as it unfolds: the soft newborn days,
            the delightful chaos of giggles and wiggles, and the quiet,
            everyday magic in between.
          </p>
        </div>

        <div className="soft-card relative overflow-hidden px-5 py-6 sm:px-7 sm:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_65%)]" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Year One Timeline
              </p>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-[0.7rem] font-medium text-sky-600 dark:bg-sky-900/60 dark:text-sky-200">
                0 → 12 months
              </span>
            </div>

            <div className="relative">
              {/* line */}
              <div className="absolute left-[14px] top-4 h-[calc(100%-2rem)] w-[2px] rounded-full bg-gradient-to-b from-sky-300 via-rose-200 to-amber-200" />

              <div className="space-y-5">
                {milestones.map((item, index) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="relative mt-1 flex flex-col items-center">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-sky-200 dark:bg-slate-900 dark:ring-sky-500/70">
                        <span className="text-sm">{item.icon}</span>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="mt-1 h-full w-px bg-sky-100" />
                      )}
                    </div>
                    <div className="flex-1 rounded-2xl bg-white/80 px-4 py-3 shadow-[0_10px_25px_rgba(148,163,184,0.15)] dark:bg-slate-950/70 dark:shadow-[0_10px_25px_rgba(15,23,42,0.8)]">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                          {item.label}
                        </p>
                        <p className="text-xs font-medium text-sky-500 dark:text-sky-300">
                          {item.age}
                        </p>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

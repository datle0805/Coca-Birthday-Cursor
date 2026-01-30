'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

const GrowthStatsSection: React.FC = () => {
  const stats = [
    {
      label: 'Height',
      value: '74 cm',
      progress: 0.75,
      color: 'from-sky-400 to-sky-300',
      detail: 'Grew from 50 cm at birth',
    },
    {
      label: 'Weight',
      value: '9.2 kg',
      progress: 0.68,
      color: 'from-rose-400 to-rose-300',
      detail: 'Healthy and cuddly',
    },
    {
      label: 'First words',
      value: '“Mama”, “ba-ba”',
      progress: 0.4,
      color: 'from-amber-400 to-amber-300',
      detail: 'Practicing daily monologues',
    },
    {
      label: 'Favorite toys',
      value: 'Teddy bear & crinkle book',
      progress: 0.9,
      color: 'from-emerald-400 to-emerald-300',
      detail: 'Also: every TV remote ever',
    },
  ];

  return (
    <SectionWrapper id="stats">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
            Growth & Little Stats
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            Watching her grow, one tiny milestone at a time.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-600 sm:text-sm dark:text-slate-300">
          Soft, friendly progress bars that turn numbers into a visual love
          story of Aurora’s first year.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="soft-card relative overflow-hidden p-5 sm:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_60%),radial-gradient(circle_at_bottom,_rgba(248,250,252,0.9),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.26),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_60%)]" />
          <div className="relative space-y-5">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {stat.label}
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">
                    {stat.value}
                  </p>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100/80 dark:bg-slate-800/80">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${stat.color} shadow-[0_0_0_1px_rgba(255,255,255,0.6)] transition-[width] duration-700 ease-out`}
                    style={{ width: `${Math.round(stat.progress * 100)}%` }}
                  />
                </div>
                <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="soft-card relative overflow-hidden px-5 py-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,207,232,0.4),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(244,114,182,0.3),transparent_55%)]" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-xl dark:bg-rose-900/70">
                📈
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 dark:text-rose-300">
                  Growth chart
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Curves drawn with love, not pressure.
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  We&apos;re following Aurora&apos;s own gentle rhythm and
                  celebrating her pace, every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div className="soft-card relative overflow-hidden px-5 py-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(129,230,217,0.35),transparent_55%)] dark:bg-[radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.3),transparent_55%)]" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-xl dark:bg-sky-900/70">
                💬
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 dark:text-sky-300">
                  Little sounds
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Babble charts & giggle counts.
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  From soft coos to bubbling laughter, we&apos;re noting the
                  soundtrack of her first year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GrowthStatsSection;

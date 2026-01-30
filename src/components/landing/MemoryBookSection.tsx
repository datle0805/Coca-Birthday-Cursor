'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

const MemoryBookSection: React.FC = () => {
  const notes = [
    {
      title: 'The first night home',
      text: 'We stayed awake just to watch you breathe, whispering “hi” to this brand new little person who somehow felt like home.',
      author: 'Mom',
    },
    {
      title: 'Tiny fingers, big feelings',
      text: 'Your hand curled around my thumb, and in that moment the whole world shrank down to soft skin and sleepy sighs.',
      author: 'Dad',
    },
    {
      title: 'Our favorite sound',
      text: 'The first time you laughed, really laughed, we both cried. We replay it in our minds more than any song.',
      author: 'Mom & Dad',
    },
  ];

  return (
    <SectionWrapper id="memories">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
            Memory Book
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            A handwritten scrapbook of our hearts.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-600 sm:text-sm dark:text-slate-300">
          Short love notes from Mom and Dad, written between diaper changes and
          midnight snuggles.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
        <div className="soft-card relative overflow-hidden p-5 sm:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.9),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),transparent_55%)]" />
          <div className="relative note-paper rounded-3xl bg-amber-50/70 px-5 py-6 shadow-inner sm:px-7 sm:py-8 dark:bg-slate-950/70">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 dark:text-amber-300">
                  Dear Aurora,
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  A letter from Mom & Dad
                </p>
              </div>
              <span className="rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-medium text-slate-500 shadow-sm dark:bg-slate-900/80 dark:text-slate-300">
                Memory book · Year 1
              </span>
            </div>

            <p className="text-sm italic leading-relaxed text-slate-700 sm:text-base dark:text-slate-200">
              We&apos;re writing this between feedings and naps, with one of us
              rocking you in our arms. You won&apos;t remember these early
              nights, but we will never forget them. This page is for the quiet
              moments – the ones without cameras – where we simply look at you
              and feel our hearts grow a size too big.
            </p>

            <p className="mt-4 text-sm italic text-slate-700 dark:text-slate-200">
              One day you&apos;ll run, speak, argue, and dream. For now, you
              simply exist, and that is more than enough.
            </p>

            <p className="mt-6 text-right text-sm font-medium text-slate-800 dark:text-slate-100">
              With all our love, <span className="italic">Mom &amp; Dad</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.title}
              className="soft-card relative overflow-hidden px-5 py-4"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(252,211,77,0.26),transparent_55%)]" />
              <div className="relative">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-400">
                  {note.author}&apos;s note
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {note.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {note.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MemoryBookSection;

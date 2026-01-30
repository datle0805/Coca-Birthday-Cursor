'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

const MilestonesSection: React.FC = () => {
  const cards = [
    {
      month: '1 Month',
      title: 'First little smiles',
      description:
        'Sleepy half-smiles that slowly turned into bright, gummy grins.',
      badge: 'Newborn magic',
      color: 'from-sky-400/80 to-sky-300/70',
      image:
        'https://images.pexels.com/photos/1557183/pexels-photo-1557183.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      month: '3 Months',
      title: 'Finding her voice',
      description:
        'Soft coos, bubble sounds, and tiny conversations with the ceiling fan.',
      badge: 'Chatty clouds',
      color: 'from-rose-400/80 to-rose-300/70',
      image:
        'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      month: '6 Months',
      title: 'Sitting & giggling',
      description:
        'Wobbly sits, delighted squeals, and grabbing every toy in sight.',
      badge: 'Little explorer',
      color: 'from-amber-400/80 to-amber-300/70',
      image:
        'https://images.pexels.com/photos/12161668/pexels-photo-12161668.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      month: '9 Months',
      title: 'On the move',
      description:
        'Crawling after cats, pulling up on furniture, and clapping along to music.',
      badge: 'Busy bee',
      color: 'from-emerald-400/80 to-emerald-300/70',
      image:
        'https://images.pexels.com/photos/4713562/pexels-photo-4713562.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <SectionWrapper id="milestones">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
            Milestones
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            Tiny firsts that feel enormous.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-600 sm:text-sm dark:text-slate-300">
          Each card marks a chapter in Aurora’s first year – a collection of
          wonderfully ordinary, unforgettable days.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.month}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 shadow-[0_16px_40px_rgba(148,163,184,0.25)] ring-1 ring-white/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(148,163,184,0.35)] dark:bg-slate-950/70 dark:ring-slate-800 dark:shadow-[0_20px_55px_rgba(15,23,42,0.9)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 mix-blend-multiply`}
              />
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm dark:bg-slate-950/85 dark:text-slate-50">
                {card.month}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-400">
                {card.badge}
              </p>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {card.title}
              </h3>
              <p className="flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MilestonesSection;

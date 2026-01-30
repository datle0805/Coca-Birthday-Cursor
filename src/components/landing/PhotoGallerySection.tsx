'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../SectionWrapper';

type GalleryPhoto = {
  id: number;
  src: string;
  alt: string;
};

const PhotoGallerySection: React.FC = () => {
  const photos: GalleryPhoto[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3661394/pexels-photo-3661394.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Baby lying on a soft blanket with a teddy bear',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3536480/pexels-photo-3536480.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Baby holding parent finger',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3875230/pexels-photo-3875230.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Baby sleeping with soft toy',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3875225/pexels-photo-3875225.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Baby yawning adorably',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3860307/pexels-photo-3860307.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Baby wrapped in cozy blanket',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3875207/pexels-photo-3875207.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Baby feet and tiny socks',
    },
  ];

  const [selected, setSelected] = useState<GalleryPhoto | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Respect prefers-reduced-motion for auto-play
  const prefersReducedMotion = (() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  })();

  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [photos.length, prefersReducedMotion, isHovered]);

  const goTo = (index: number) => {
    setActiveIndex((index + photos.length) % photos.length);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  return (
    <SectionWrapper id="gallery">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
            Photo Gallery
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            A little museum of tiny moments.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-600 sm:text-sm dark:text-slate-300">
          Scroll through a soft, cozy wall of memories. Tap any photo to see it
          up close.
        </p>
      </div>

      <div className="soft-card overflow-hidden p-4 sm:p-6">
        {/* Carousel */}
        <div
          className="relative mb-4 overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {photos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                className="relative inline-flex h-full w-full min-w-full cursor-pointer select-none items-stretch overflow-hidden"
                onClick={() => setSelected(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-80" />
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-left">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-200">
                    Favorite snapshot
                  </p>
                  <p className="max-w-md text-sm font-semibold text-white">
                    {photo.alt}
                  </p>
                  <p className="text-[0.7rem] text-slate-200">
                    Tap to open the memory in full.
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3">
            <div className="pointer-events-auto flex gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 text-xs text-slate-100 shadow-md backdrop-blur transition hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 text-xs text-slate-100 shadow-md backdrop-blur transition hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                ›
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="pointer-events-auto absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to photo ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 bg-sky-400'
                    : 'w-2 bg-slate-300/70 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails strip */}
        <div className="hidden gap-3 overflow-x-auto pb-2 pt-1 sm:flex">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => goTo(index)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border text-left transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                index === activeIndex
                  ? 'border-sky-400 shadow-md'
                  : 'border-slate-200/70'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
              />
              {index === activeIndex && (
                <div className="pointer-events-none absolute inset-0 bg-sky-500/10" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-950/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-5 pb-4 pt-10">
              <p className="text-sm font-medium text-white">{selected.alt}</p>
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default PhotoGallerySection;

'use client';

import React, { useEffect, useRef, useState } from 'react';

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = '',
  children,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

'use client';

import React from 'react';

const stats = [
  {
    id: 'experience',
    value: '30+',
    label: 'years of experience',
  },
  {
    id: 'patients',
    value: '25,000+',
    label: 'patients treated',
  },
  {
    id: 'invisalign',
    value: 'Expert',
    label: 'Invisalign® provider',
  },
] as const;

export default function HomeStats() {
  return (
    <section
      className="py-14 sm:py-16 lg:py-20 bg-white border-y border-[#e8e8e8]"
      aria-label="Practice highlights"
    >
      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-12 2xl:px-16">
        <ul className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-0 text-center justify-items-center divide-y divide-[#e8e8e8] sm:max-w-5xl xl:max-w-6xl sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-[#e8e8e8]">
          {stats.map((stat) => (
            <li
              key={stat.id}
              className="flex w-full flex-col items-center justify-center px-4 py-8 sm:py-6 sm:px-6 lg:px-10"
            >
              <span className="text-[#1d1d1f] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="mt-2 text-[#1d1d1f]/65 text-sm sm:text-base font-medium leading-snug max-w-[16rem] mx-auto">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

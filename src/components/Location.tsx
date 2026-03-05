'use client';

import React from 'react';
import Image from 'next/image';
import { CONTACT } from '@/lib/constants';

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 lg:py-32 bg-[#141414] relative overflow-hidden"
      aria-label="Our Location"
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Address Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
              Visit Us
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Our Location
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Conveniently located in Langley, BC. We&apos;re easy to find and offer plenty of parking.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:map-point-bold"
                    width="24"
                    height="24"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-white font-medium">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.zip}, {CONTACT.address.country}
                  </div>
                  <div className="text-white/50 text-sm">Address</div>
                </div>
              </div>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <iconify-icon
                    icon="solar:phone-bold"
                    width="24"
                    height="24"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-white font-medium">{CONTACT.phoneDisplay}</div>
                  <div className="text-white/50 text-sm">Call us directly</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:clock-circle-bold"
                    width="24"
                    height="24"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-white font-medium">Mon-Thu: 8am - 5pm</div>
                  <div className="text-white/50 text-sm">Office hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/map-clinic.png"
                alt="Map showing Cronin Ortho location at 6351 197 St #101, Langley Twp, BC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

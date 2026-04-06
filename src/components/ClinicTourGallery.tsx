import Image from 'next/image';
import { CLINIC_TOUR_IMAGES } from '@/lib/clinic-tour-images';

type ClinicTourGalleryProps = {
  /** Anchor id, e.g. office-tour (patient) or clinic-tour (about) */
  sectionId?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tone?: 'darker' | 'dark';
};

export default function ClinicTourGallery({
  sectionId = 'clinic-tour',
  eyebrow = 'Clinic tour',
  title = 'Clinic Tour',
  subtitle = 'Take a quick look around our space.',
  tone = 'darker',
}: ClinicTourGalleryProps) {
  const bg = tone === 'darker' ? 'bg-[#0a0a0a]' : 'bg-[#0f0f0f]';

  return (
    <section
      id={sectionId}
      className={`relative scroll-mt-28 py-14 sm:py-20 lg:py-28 overflow-hidden ${bg}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="mb-8 sm:mb-10 lg:mb-14 text-center">
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-[10px] sm:text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
              {eyebrow}
            </div>
          </div>
          <h2
            id={`${sectionId}-heading`}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            {title}
          </h2>
          <p className="text-white/55 text-sm sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-4 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
          {CLINIC_TOUR_IMAGES.map((image) => (
            <div
              key={image.src}
              className="group snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-200 hover:border-[#c9a962]/40 hover:shadow-lg hover:shadow-[#c9a962]/10"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-sm mt-2 text-center sm:text-left">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}

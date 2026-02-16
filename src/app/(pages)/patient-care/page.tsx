import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'Patient Care Videos',
  description: 'Helpful video guides for caring for your braces, aligners, and orthodontic appliances.',
  alternates: { canonical: '/patient-care' },
};

const videos = [
  {
    title: 'How to Brush with Braces',
    description: 'Learn the proper technique for brushing your teeth while wearing braces to maintain optimal oral hygiene.',
    duration: '3:45',
  },
  {
    title: 'Flossing with Braces',
    description: 'Step-by-step guide on how to effectively floss around brackets and wires.',
    duration: '4:20',
  },
  {
    title: 'Using Orthodontic Wax',
    description: 'How to apply wax to brackets and wires to prevent irritation and sore spots.',
    duration: '2:15',
  },
  {
    title: 'Caring for Your Aligners',
    description: 'Best practices for cleaning and maintaining your clear aligners for optimal results.',
    duration: '3:30',
  },
  {
    title: 'Foods to Avoid',
    description: 'Learn which foods can damage your braces and what to eat instead.',
    duration: '4:00',
  },
  {
    title: 'Handling Orthodontic Emergencies',
    description: 'What to do if a bracket comes loose, a wire pokes, or you experience discomfort.',
    duration: '5:10',
  },
];

export default function PatientCarePage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Gemini_Generated_Image_qad8rqad8rqad8rq.png"
            alt="Patient care videos"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
              <span className="text-white/90 text-sm font-medium">
                Video Guides
              </span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6">
              Patient Care{' '}
              <span className="text-white/50">
                Videos
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Helpful video tutorials to guide you through caring for your braces, aligners, and maintaining excellent oral hygiene during treatment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="/patient" icon="solar:document-text-linear">
                Patient Resources
              </Button>
              <Button variant="secondary" size="lg" href="/emergency" icon="solar:shield-warning-linear">
                Emergency Care
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 lg:py-28 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <div
                key={video.title}
                className="group rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-200 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-white/[0.03] relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/5 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 group-hover:bg-[#c9a962] group-hover:border-[#c9a962] group-hover:scale-110">
                    <iconify-icon
                      icon="solar:play-bold"
                      width="28"
                      height="28"
                      className="text-white/80 ml-1 transition-colors duration-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white/80 text-xs font-medium">
                    {video.duration}
                  </div>

                  {/* Video Number */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 text-sm font-medium">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-[#c9a962]">
                    {video.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed transition-colors duration-200 group-hover:text-white/65">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-br from-[#c9a962]/10 via-[#c9a962]/5 to-transparent border border-[#c9a962]/20 p-10 lg:p-14 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#c9a962]/15 border border-[#c9a962]/30 flex items-center justify-center mx-auto mb-6">
              <iconify-icon
                icon="solar:question-circle-bold"
                width="32"
                height="32"
                className="text-[#c9a962]"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">
              Have Questions?
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
              If you need additional guidance or have questions about your treatment, our team is here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact#contact-form" icon="solar:chat-round-line-linear">
                Contact Us
              </Button>
              <Button variant="secondary" size="lg" href="/patient#office-visits" icon="solar:calendar-linear">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

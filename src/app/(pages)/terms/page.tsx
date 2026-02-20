import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/ui';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service',
  description:
    'Read the terms and conditions for using CroninOrtho services. Understanding your rights and responsibilities.',
  pathname: '/terms',
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Terms and conditions for using our services"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Acceptance of Terms
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              By accessing or using our website and services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Medical Disclaimer
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              The information provided on this website is for general
              informational purposes only and is not intended as a substitute
              for professional medical advice, diagnosis, or treatment. Always
              seek the advice of your orthodontist or other qualified health
              provider with any questions you may have.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Appointment Policy
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              We kindly request that you provide at least 24 hours notice if you
              need to cancel or reschedule an appointment. Missed appointments
              may be subject to a cancellation fee.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Intellectual Property
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, and
              images, is the property of CroninOrtho and is protected by
              copyright and other intellectual property laws.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please
              contact us at{' '}
              <a
                href="mailto:info@ronianortho.com"
                className="text-accent hover:underline"
              >
                info@ronianortho.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

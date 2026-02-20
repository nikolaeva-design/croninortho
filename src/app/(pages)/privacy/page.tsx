import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/ui';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how CroninOrtho protects your personal information and privacy. Our commitment to safeguarding your data.',
  pathname: '/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we protect and use your personal information"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Information We Collect
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              We collect information you provide directly to us, such as when
              you schedule an appointment, sign up for our newsletter, or
              contact us with questions. This may include your name, email
              address, phone number, and any other information you choose to
              provide.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              How We Use Your Information
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you about appointments
              and treatment, and to send you promotional communications if you
              have opted in.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Information Security
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              We take reasonable measures to help protect your personal
              information from loss, theft, misuse, and unauthorized access,
              disclosure, alteration, and destruction.
            </p>

            <h2 className="text-white text-2xl font-semibold mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please
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

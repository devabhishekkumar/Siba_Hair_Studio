import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/site';
import { formatPrice } from '@/lib/utils';
import { Cta, PageHero, SectionTitle } from '@/components/Ui';
export const metadata: Metadata = { title: 'Pricing' };
export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="PERSONALIZED TO YOU"
        title={
          <>
            Your beauty, <em>your way.</em>
          </>
        }
        description="Every look is unique. Enquire directly for the latest service prices, appointments and package details."
      />
      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="SERVICE ENQUIRIES"
            title={
              <>
                A little clarity, <em>before you begin.</em>
              </>
            }
            description="Sample starting prices are shown for preview. Contact the studio to confirm current service rates."
          />
          <div className="pricing-list">
            {services.map((s, i) => (
              <Link
                href={`/services/${s.slug}`}
                key={s.slug}
                className="pricing-row"
              >
                <span className="pricing-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <small>{s.short}</small>
                </div>
                <span className="pricing-quote">
                  {s.startingPrice === undefined
                    ? 'Quote on enquiry'
                    : `${s.isSamplePrice ? 'Sample from' : 'From'} ${formatPrice(s.startingPrice)}`}
                </span>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
          <div className="pricing-note">
            <strong>Sample prices for preview</strong>
            <p>
              These demo amounts are placeholders. Contact the studio to confirm
              actual rates, appointment duration and service inclusions.
            </p>
            <Cta href="/booking">Request your quote</Cta>
          </div>
        </div>
      </section>
    </>
  );
}

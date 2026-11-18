import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '@/components/Reveal';
import { Cta, PageHero, SectionTitle } from '@/components/Ui';
import { services } from '@/lib/site';
export const metadata: Metadata = { title: 'Services' };
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="THE SERVICE COLLECTION"
        title={
          <>
            Every look has <em>a story.</em>
          </>
        }
        description="Discover hair, beauty and spa-inspired rituals tailored to the way you want to feel."
      />
      <section className="section-space">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="DISCOVER YOUR NEXT LOOK"
              title={
                <>
                  Signature <em>experiences.</em>
                </>
              }
              description="Explore a category for details and send an appointment enquiry to discuss availability and pricing."
            />
          </Reveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="service-enquiry-banner">
        <div className="container-page">
          <div>
            <span>YOUR LOOK. YOUR MOMENT.</span>
            <h2>Need help choosing?</h2>
            <p>Tell us your goals and we can prepare a personalized enquiry.</p>
          </div>
          <Cta href="/booking">Enquire now</Cta>
        </div>
      </section>
    </>
  );
}

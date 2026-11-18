import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/site';
import { Cta, Eyebrow } from '@/components/Ui';
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service?.title || 'Service' };
}
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <section className="service-detail-hero">
        <div
          className="service-detail-image"
          role="img"
          aria-label={service.imageAlt || service.title}
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(7,6,5,.95),rgba(7,6,5,.46)),url("${service.image}")`,
            backgroundPosition: service.imagePosition,
          }}
        />
        <div className="container-page service-detail-inner">
          <Eyebrow>{service.category.toUpperCase()} / SIBA HAIR STUDIO</Eyebrow>
          <h1 className="hero-title">{service.title}</h1>
          <p>{service.description}</p>
          <Cta href="/booking">Enquire about this service</Cta>
        </div>
      </section>
      <section className="section-space">
        <div className="container-page service-detail-body">
          <div>
            <Link href="/services" className="back-link">
              <ArrowLeft size={17} /> All services
            </Link>
            <h2 className="display-title">
              A look that's <em>all yours.</em>
            </h2>
            <p className="body-copy">
              Our service descriptions are a guide. Please confirm the exact
              treatment, product selection, duration, availability and final
              price with the salon before your visit.
            </p>
            <Cta href="/pricing" outline>
              Pricing enquiries
            </Cta>
          </div>
          <div className="service-detail-includes">
            <h3>Explore the possibilities</h3>
            {service.includes.map((inc) => (
              <div key={inc}>
                <Check size={17} />
                {inc}
              </div>
            ))}
            <small>Availability is subject to confirmation.</small>
          </div>
        </div>
      </section>
    </>
  );
}

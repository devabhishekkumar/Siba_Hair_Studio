import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';
import { PageHero } from '@/components/Ui';
import { services, site } from '@/lib/site';
export const metadata: Metadata = { title: 'Book an Appointment' };
export default async function Booking({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const query = await searchParams;
  const selectedService =
    services.find((service) => service.slug === query.service)?.title || '';

  return (
    <>
      <PageHero
        eyebrow="MAKE TIME FOR YOURSELF"
        title={
          <>
            Your moment <em>awaits.</em>
          </>
        }
        description="Tell us what you would love to book. Your enquiry is prepared for the salon to confirm personally."
      />
      <section className="section-space">
        <div className="container-page">
          <BookingForm key={selectedService} initialService={selectedService} whatsappNumber={site.whatsapp} />
        </div>
      </section>
    </>
  );
}

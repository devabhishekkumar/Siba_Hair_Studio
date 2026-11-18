import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  Scissors,
  Palette,
  Sparkles,
  Heart,
  Hand,
  Flower2,
} from 'lucide-react';
import type { Service } from '@/lib/site';
import { formatPrice } from '@/lib/utils';

const icons = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  heart: Heart,
  hand: Hand,
  flower: Flower2,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const detailsHref = `/services/${service.slug}`;
  const price = service.startingPrice;

  return (
    <article className="service-card">
      <Link
        href={detailsHref}
        className="service-card-photo"
        aria-label={`Explore ${service.title.toLowerCase()}`}
      >
        <span
          className="service-card-image"
          role="img"
          aria-label={service.imageAlt || service.title}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.08)), url("${service.image}")`,
            backgroundPosition: service.imagePosition,
          }}
        />
        <span className="service-card-category">
          <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
          {service.category}
        </span>
        <span className="service-photo-arrow" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </Link>
      <div className="service-card-content">
        <h3>
          <Link href={detailsHref}>{service.title}</Link>
        </h3>
        <p>{service.short}</p>
        <ul className="service-card-includes">
          {service.includes.slice(0, 2).map((item) => (
            <li key={item}>
              <Check size={15} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="service-card-footer">
          <div className="service-card-price">
            <span>
              {price === undefined ? 'Service price' : 'Starting from'}
              {service.isSamplePrice && ' · demo'}
            </span>
            <strong>
              {price === undefined ? 'Price on request' : formatPrice(price)}
            </strong>
          </div>
          <Link
            href={`/booking?service=${encodeURIComponent(service.slug)}`}
            className="service-card-book"
            aria-label={`Book ${service.title.toLowerCase()}`}
          >
            Book now <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

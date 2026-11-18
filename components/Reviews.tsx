'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SectionTitle } from '@/components/Ui';
import { whatsappLink } from '@/lib/utils';

const sampleReviews = [
  {
    service: 'Haircut & Styling',
    quote: 'A thoughtful consultation, a fresh shape and a finish that was easy to style at home.',
    avatar: '/images/team-stylist-placeholder.webp',
  },
  {
    service: 'Colour & Hair Care',
    quote: 'The colour had just the warmth and dimension I wanted. I loved the soft, natural finish.',
    avatar: '/images/team-colourist-placeholder.webp',
  },
  {
    service: 'Beauty & Makeup',
    quote: 'My makeup felt light and looked lovely in photographs. A beautiful start to a special day.',
    avatar: '/images/team-beauty-placeholder.webp',
  },
  {
    service: 'Hair Treatments',
    quote: 'A relaxing little reset for my hair. I left with softer lengths and a fresh, polished look.',
    avatar: '/images/team-colourist-placeholder.webp',
  },
  {
    service: 'Occasion Styling',
    quote: 'The styling brought my whole look together and stayed comfortable through the celebration.',
    avatar: '/images/team-beauty-placeholder.webp',
  },
  {
    service: 'Personal Styling',
    quote: 'I enjoyed talking through the options and finding a style that felt like my own.',
    avatar: '/images/team-stylist-placeholder.webp',
  },
];

const reviewRows = [
  sampleReviews,
  [...sampleReviews.slice(2), ...sampleReviews.slice(0, 2)],
  [...sampleReviews.slice(4), ...sampleReviews.slice(0, 4)],
];

export default function Reviews({ whatsappNumber }: { whatsappNumber: string }) {
  const [paused, setPaused] = useState(false);
  const feedbackHref = whatsappLink(
    whatsappNumber,
    'Hello Siba Hair Studio! I would like to share a review of my visit.\n\nService: \nMy experience: ',
  );

  return <section id="reviews" aria-label="Customer reviews" className="reviews-section section-space">
    <div className="container-page">
      <Reveal>
        <SectionTitle
          eyebrow="CUSTOMER REVIEWS"
          title={<>Your experience. <em>In your words.</em></>}
          description="Fresh cuts, new colours and moments of self-care. A little inspiration for your next visit."
          center
        />
        <p className="reviews-sample-note">Sample testimonials and AI-generated portraits shown for preview.</p>
      </Reveal>
    </div>

    <div id="review-marquee" className={`reviews-marquee${paused ? ' reviews-marquee-paused' : ''}`}>
      {reviewRows.map((reviews, rowIndex) => <div className="reviews-row" key={rowIndex} aria-hidden={rowIndex > 0 ? true : undefined}>
        <div className="reviews-track">
          {[0, 1].map(copy => <div className="reviews-group" key={copy} aria-hidden={copy > 0 ? true : undefined}>
            {reviews.map(review => <figure className="review-item" key={review.service}>
              <div className="review-avatar">
                <Image src={review.avatar} alt="" width={56} height={56} sizes="56px" />
              </div>
              <figcaption className="review-copy">
                <div className="review-person"><strong>{review.service}</strong><span>Sample review</span></div>
                <blockquote>{review.quote}</blockquote>
              </figcaption>
            </figure>)}
          </div>)}
        </div>
      </div>)}
    </div>

    <div className="container-page reviews-actions">
      <a
        href={feedbackHref || '/contact'}
        className="cta-button cta-outline"
      >
        Share a review <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
      </a>
      <button
        type="button"
        className="reviews-toggle"
        aria-controls="review-marquee"
        aria-pressed={paused}
        aria-label="Pause review scrolling"
        onClick={() => setPaused(previous => !previous)}
      >
        {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        <span>{paused ? 'Resume scrolling' : 'Pause scrolling'}</span>
      </button>
    </div>
  </section>;
}

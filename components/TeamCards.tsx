import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const roles = [
  {
    title: 'Hair & Styling',
    specialty: 'CUT, SHAPE & FINISH',
    description: 'A fresh cut, a softer shape or an occasion-ready finish. Explore a look that feels like you.',
    image: '/images/team-stylist-placeholder.webp',
    imageAlt: 'AI-generated sample portrait of a hair stylist',
    href: '/services/haircut-styling',
  },
  {
    title: 'Colour & Hair Care',
    specialty: 'TONE, TEXTURE & SHINE',
    description: 'From subtle dimension to a new shade, discover colour and care for your next hair chapter.',
    image: '/images/team-colourist-placeholder.webp',
    imageAlt: 'AI-generated sample portrait of a hair colour specialist',
    href: '/services/hair-colour-treatments',
  },
  {
    title: 'Beauty & Makeup',
    specialty: 'THE FINISHING TOUCH',
    description: 'Soft, radiant or a little more expressive. Find beauty inspiration for your special moments.',
    image: '/images/team-beauty-placeholder.webp',
    imageAlt: 'AI-generated sample portrait of a makeup artist',
    href: '/services/makeup-occasion',
  },
];

export default function TeamCards() {
  return <div className="role-grid">
    {roles.map((role, index) => <Reveal key={role.title} delay={index * 0.08}>
        <article className="role-card">
          <div className="role-portrait">
            <Image
              src={role.image}
              alt={role.imageAlt}
              fill
              sizes="(max-width: 768px) calc(100vw - 36px), (max-width: 1024px) 50vw, 440px"
            />
          </div>
          <div className="role-card-info">
            <span>{role.specialty}</span>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <Link href={role.href} className="role-card-link" aria-label={`Explore ${role.title.toLowerCase()} services`}>
              Explore specialty <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </Reveal>)}
  </div>;
}

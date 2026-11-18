import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { classNames } from '@/lib/utils';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}
export function SectionTitle({ eyebrow, title, description, center = false }: { eyebrow: string; title: ReactNode; description?: string; center?: boolean }) {
  return <div className={classNames('section-heading', center && 'section-heading-center')}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="display-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}
export function Cta({ href, children, light = false, outline = false, className = '' }: { href: string; children: ReactNode; light?: boolean; outline?: boolean; className?: string }) {
  return <Link className={classNames('cta-button', light && 'cta-light', outline && 'cta-outline', className)} href={href}>{children}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></Link>;
}
export function PageHero({ eyebrow, title, description, className = '' }: { eyebrow: string; title: ReactNode; description: string; className?: string }) {
  return <section className={classNames('page-hero', className)}><div className="page-hero-glow" aria-hidden="true" /><div className="container-page page-hero-content">
    <Eyebrow>{eyebrow}</Eyebrow><h1 className="hero-title">{title}</h1><p className="page-hero-description">{description}</p>
  </div></section>;
}

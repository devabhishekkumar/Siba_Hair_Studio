'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav } from '@/lib/site';
import { classNames } from '@/lib/utils';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return <header className="site-header">
    <div className="container-page header-inner">
      <Link href="/" className="brand-lockup" aria-label="SIBA HAIR STUDIO home">
        <span className="brand-mark"><Image src="/images/siba-crest.png" width={68} height={68} alt="Siba Hair Studio gold S logo" priority /></span>
        <span className="brand-words"><strong>SIBA HAIR STUDIO</strong><small>HAIR &amp; BEAUTY</small></span>
      </Link>
      <nav aria-label="Main navigation" className="header-nav">
        {nav.map(item => <Link className={classNames('nav-link', pathname === item.href && 'nav-link-active')} href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
      <Link href="/booking" className="header-book">Book an appointment <ArrowUpRight size={16} aria-hidden="true" /></Link>
      <ThemeToggle />
      <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'}>
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
    </div>
    <nav id="mobile-menu" aria-label="Mobile navigation" className={classNames('mobile-nav', open && 'mobile-nav-open')} inert={!open}>
      {[...nav, {label:'Book Appointment', href:'/booking'}, {label:'Dashboard Demo', href:'/dashboard'}].map((item, index) =>
        <Link href={item.href} key={item.href}><span className="mobile-index">{String(index+1).padStart(2,'0')}</span>{item.label}<ArrowUpRight size={18} /></Link>
      )}
    </nav>
  </header>;
}

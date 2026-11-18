import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { nav, site } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

export default function Footer() {
  return <footer className="site-footer">
    <div className="container-page">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Image src="/images/siba-logo-recreated.png" width={150} height={150} alt="Siba Hair Studio ornate gold crest and wordmark" />
          <div className="footer-brand-title">SIBA <span>HAIR STUDIO</span></div>
          <p>Hair &amp; Beauty</p>
          <span className="footer-small-heading">THE ART OF BEING BEAUTIFULLY YOU</span>
        </div>
        <div className="footer-links-col"><h3>Explore</h3>{nav.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
        <div className="footer-links-col"><h3>Discover</h3><Link href="/booking">Book your visit</Link><Link href="/pricing">Pricing enquiries</Link><Link href="/dashboard">Dashboard demo</Link><Link href="/contact">Get in touch</Link></div>
        <div className="footer-links-col"><h3>Connect</h3>
          {site.whatsapp && <a href={whatsappLink(site.whatsapp, site.whatsappMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle size={14}/> WhatsApp <ArrowUpRight size={13}/></a>}
          {site.address && <a className="footer-address" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`} target="_blank" rel="noopener noreferrer"><MapPin size={14}/><span>{site.address}</span></a>}
          {site.phone ? <a href={`tel:${site.phone}`}><Phone size={14}/>{site.phone}</a> : <span>Phone details coming soon</span>}
          {site.email ? <a href={`mailto:${site.email}`}><Mail size={14}/>{site.email}</a> : <span>Email details coming soon</span>}
          {site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={14}/> Instagram <ArrowUpRight size={13}/></a>}
          <Link href="/contact">Find our contact details <ArrowUpRight size={14}/></Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} SIBA HAIR STUDIO. All rights reserved.</span><span>Crafted for beautiful experiences.</span></div>
    </div>
  </footer>;
}

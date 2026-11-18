import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { PageHero, SectionTitle } from '@/components/Ui';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';
export const metadata:Metadata={title:'Contact'};
export default function Contact(){return <><PageHero eyebrow="SAY HELLO" title={<>We'd love to <em>hear from you.</em></>} description="Ask about a service, discuss a special occasion or plan your next self-care moment."/>
<section className="section-space"><div className="container-page contact-layout"><div><SectionTitle eyebrow="CONTACT SIBA HAIR STUDIO" title={<>Let's make it <em>beautiful.</em></>} description="Find the studio, ask about a service or get in touch to plan your next visit."/><div className="contact-details">
  {site.whatsapp && <div><MessageCircle/><span><strong>WhatsApp</strong><a href={whatsappLink(site.whatsapp, site.whatsappMessage)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={14}/></a></span></div>}
  <div><Phone/><span><strong>Phone</strong>{site.phone?<a href={`tel:${site.phone}`}>{site.phone}</a>:<small>Not provided yet</small>}</span></div>
  <div><Mail/><span><strong>Email</strong>{site.email?<a href={`mailto:${site.email}`}>{site.email}</a>:<small>Not provided yet</small>}</span></div>
  <div><MapPin/><span><strong>Our address</strong><small>{site.address||'Address details coming soon'}</small>{site.address && <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`} target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowUpRight size={14}/></a>}</span></div>
  {site.instagram&&<div><Instagram/><span><strong>Instagram</strong><a href={site.instagram} target="_blank" rel="noreferrer">Follow SIBA HAIR STUDIO <ArrowUpRight size={14}/></a></span></div>}
</div></div><div><ContactForm/></div></div></section></>}

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

export default function FloatingWhatsApp() {
  const href = whatsappLink(site.whatsapp, site.whatsappMessage);
  const label = href ? 'Chat with Siba Hair Studio on WhatsApp' : 'Contact Siba Hair Studio';

  return <Link
    href={href || '/contact'}
    className="floating-whatsapp"
    aria-label={label}
    title={label}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
  >
    <span className={href ? 'floating-whatsapp-icon floating-whatsapp-brand' : 'floating-whatsapp-icon'} aria-hidden="true">
      {href ? <Image src="/images/whatsapp-logo.svg" alt="" width={25} height={25} /> : <MessageCircle size={19} />}
    </span>
    <span className="floating-whatsapp-label">{href ? 'WhatsApp' : 'Contact us'}</span>
  </Link>;
}

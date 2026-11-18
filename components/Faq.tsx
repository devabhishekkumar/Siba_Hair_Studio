'use client';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const questions = [
  ['How do I request an appointment?', 'Select a service and preferred date on our booking page. With a configured WhatsApp number, your request opens in WhatsApp; otherwise you can copy the request and contact the salon. Your booking is not confirmed until the salon responds.'],
  ['Are your service prices fixed?', 'Some services depend on hair length, products, time and consultation. Contact the studio for an up-to-date, personalized quote.'],
  ['Do you offer occasion and bridal services?', 'You can enquire about occasion or bridal makeup on the booking page. Availability and packages must be confirmed directly with the salon.'],
  ['Can I choose a stylist?', 'You can mention your preferred stylist in the booking notes. The salon needs to confirm the available team and appointment time.'],
];
export default function Faq() {
  const [expanded, setExpanded] = useState<number | null>(0);
  return <div className="faq-list">{questions.map(([q, a], index) => <div className="faq-item" key={q}>
    <button type="button" aria-expanded={expanded===index} onClick={() => setExpanded(expanded===index ? null : index)} className="faq-trigger"><span>{q}</span>{expanded===index ? <Minus size={18}/> : <Plus size={18}/>}</button>
    {expanded === index && <p className="faq-answer">{a}</p>}
  </div>)}</div>;
}

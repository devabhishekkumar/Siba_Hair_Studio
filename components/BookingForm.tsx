'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { services, site } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

type Booking = {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};
const initial: Booking = {
  fullName: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  notes: '',
};
function todayLocal() {
  const d = new Date();
  const offset = d.getTimezoneOffset() * 60_000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 10);
}
function formatRequest(form: Booking) {
  return `SIBA HAIR STUDIO — Appointment enquiry\nName: ${form.fullName.trim()}\nPhone: ${form.phone.trim()}\nService: ${form.service}\nPreferred date: ${form.date}\nPreferred time: ${form.time}\nNotes: ${form.notes.trim() || 'None'}\nPlease confirm availability, timing and pricing.`;
}
export default function BookingForm({
  initialService = '',
}: {
  initialService?: string;
}) {
  const [form, setForm] = useState<Booking>({
    ...initial,
    service: initialService,
  });
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const minDate = todayLocal();
  const update = (field: keyof Booking, value: string) => {
    setForm((old) => ({ ...old, [field]: value }));
    setResult('');
    setCopied(false);
  };
  const text = formatRequest(form);
  const wa = whatsappLink(site.whatsapp, text);
  const send = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.date < minDate) {
      setResult('Please choose today or a future date.');
      return;
    }
    if (wa) {
      window.location.assign(wa);
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setResult(
        'Request copied. Please share it with SIBA HAIR STUDIO; no appointment has been submitted or confirmed.',
      );
    } catch {
      setResult(
        'Use the request text below to contact the salon. No appointment has been submitted.',
      );
    }
  };
  return (
    <div className="booking-layout">
      <form onSubmit={send} className="booking-form">
        <div className="form-grid">
          <label>
            Full name{' '}
            <input
              value={form.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
          <label>
            Phone number{' '}
            <input
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              required
              minLength={7}
              maxLength={24}
              type="tel"
              autoComplete="tel"
              placeholder="Include country code"
            />
          </label>
          <label className="form-full">
            Choose your service{' '}
            <select
              value={form.service}
              onChange={(e) => update('service', e.target.value)}
              required
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Preferred date{' '}
            <input
              type="date"
              required
              min={minDate}
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
            />
          </label>
          <label>
            Preferred time{' '}
            <select
              value={form.time}
              onChange={(e) => update('time', e.target.value)}
              required
            >
              <option value="">Select a time</option>
              {['Morning', 'Afternoon', 'Evening'].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="form-full">
            Anything else?{' '}
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              maxLength={1000}
              rows={5}
              placeholder="Tell us about your preferred look or any special requirements"
            />
          </label>
        </div>
        <button className="submit-button" type="submit">
          {wa ? 'Continue to WhatsApp' : 'Copy appointment request'}
          {wa ? (
            <ArrowUpRight size={18} />
          ) : copied ? (
            <Check size={18} />
          ) : (
            <Copy size={18} />
          )}
        </button>
        <p className="form-help">
          This form prepares an enquiry; it does not reserve a slot. The salon
          must confirm your appointment.
        </p>
        {result && (
          <div className="form-result" role="status">
            {result}
            {!wa && <pre>{text}</pre>}
          </div>
        )}
      </form>
      <aside className="booking-side">
        <div className="booking-side-overline">A LITTLE TIME FOR YOU</div>
        <h3>We cannot wait to welcome you.</h3>
        <p>
          Tell us the experience you are looking for. Our team will confirm the
          availability and final service quote directly with you.
        </p>
        <div className="booking-side-rule" />
        <div className="booking-step">
          <span>01</span>
          <div>
            <strong>Choose your ritual</strong>
            <small>Browse services and select your favourite.</small>
          </div>
        </div>
        <div className="booking-step">
          <span>02</span>
          <div>
            <strong>Share your preference</strong>
            <small>Suggest a date and time that suits you.</small>
          </div>
        </div>
        <div className="booking-step">
          <span>03</span>
          <div>
            <strong>Await confirmation</strong>
            <small>The studio confirms your visit personally.</small>
          </div>
        </div>
      </aside>
    </div>
  );
}

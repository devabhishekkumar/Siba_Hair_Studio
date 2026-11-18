'use client';
import { useState } from 'react';
import { Copy, Mail } from 'lucide-react';
import { site } from '@/lib/site';
export default function ContactForm(){
  const [name,setName]=useState('');const [email,setEmail]=useState('');const [message,setMessage]=useState('');const [status,setStatus]=useState('');
  const body=`SIBA HAIR STUDIO website enquiry\nName: ${name}\nEmail: ${email}\n\n${message}`;
  const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(site.email){window.location.href=`mailto:${site.email}?subject=${encodeURIComponent('Siba Hair Studio enquiry')}&body=${encodeURIComponent(body)}`;setStatus('Your mail application should open; you must send the email to complete the enquiry.');}
    else{try{await navigator.clipboard.writeText(body);setStatus('Enquiry copied. Please share it with the salon when contact details are added.');}catch{setStatus(`Copy this enquiry manually: ${body}`);}}
  };
  return <form onSubmit={onSubmit} className="contact-form"><label>Your name <input required minLength={2} maxLength={100} value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" autoComplete="name"/></label>
    <label>Email address <input required type="email" maxLength={180} value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" /></label>
    <label>How can we help? <textarea required minLength={5} maxLength={3000} rows={5} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your message" /></label>
    <button type="submit" className="submit-button">{site.email?'Open email client':'Copy enquiry'}{site.email?<Mail size={17}/>:<Copy size={17}/>}</button>
    <p className="form-help">This frontend does not send messages to a server. You must send the email or share the copied text.</p>{status && <p className="form-result" role="status">{status}</p>}
  </form>;
}

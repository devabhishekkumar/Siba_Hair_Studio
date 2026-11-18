import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Users, Scissors, TrendingUp, ArrowUpRight, ShieldCheck, Inbox } from 'lucide-react';
import { PageHero } from '@/components/Ui';
export const metadata:Metadata={title:'Dashboard Preview',robots:{index:false,follow:false}};
const widgets=[{label:'Total bookings',value:'0',icon:CalendarDays},{label:'Upcoming visits',value:'0',icon:TrendingUp},{label:'Customer records',value:'0',icon:Users},{label:'Active staff profiles',value:'0',icon:Scissors}];
export default function Dashboard(){return <><PageHero eyebrow="FRONTEND ADMIN PREVIEW" title={<>Studio <em>overview.</em></>} description="A responsive visual preview for a future salon management system. No live business data or authentication is connected."/>
<section className="section-space"><div className="container-page"><div className="dashboard-notice"><ShieldCheck size={20}/><div><strong>Design preview only — not a secure admin dashboard</strong><p>To manage real customers and appointments, add backend authentication, role-based access, database storage, and server-side validation before deployment.</p></div></div>
<div className="dashboard-stats">{widgets.map(w=>{const Icon=w.icon;return <div className="dashboard-stat" key={w.label}><Icon size={24}/><span>{w.label}</span><strong>{w.value}</strong></div>})}</div>
<div className="dashboard-panel"><div><h2>Appointment requests</h2><p>Live enquiries appear here after a real booking backend is integrated.</p></div><div className="dashboard-empty"><Inbox size={42} strokeWidth={1.1}/><h3>No connected bookings</h3><p>The website’s booking form prepares an enquiry. It does not store personal data or send appointments to this dashboard.</p><Link href="/booking">View booking experience <ArrowUpRight size={15}/></Link></div></div></div></section></>}

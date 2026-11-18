import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound(){return <section className="not-found"><span>404</span><h1>Something beautiful<br/>is missing.</h1><p>We couldn’t find that page.</p><Link className="cta-button" href="/">Return home <ArrowUpRight size={16}/></Link></section>}

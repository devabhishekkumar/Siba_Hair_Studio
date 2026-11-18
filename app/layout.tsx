import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'SIBA HAIR STUDIO | Hair & Beauty', template: '%s | SIBA HAIR STUDIO' },
  description: 'Explore the luxury-inspired SIBA HAIR STUDIO Hair & Beauty website, service categories, gallery and appointment enquiries.',
  applicationName: 'SIBA HAIR STUDIO',
  icons: { icon: '/icon.png' },
  robots: { index: false, follow: false }, // Remove only after adding genuine business details and final copy.
};
export const viewport: Viewport = { themeColor: '#f5f2e9', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} data-theme="light" suppressHydrationWarning><head><script id="theme-init" dangerouslySetInnerHTML={{ __html: `(function(){var theme='light';try{if(localStorage.getItem('studio-a1-theme')==='dark')theme='dark';}catch(e){}document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#15251d':'#f5f2e9');})();` }} /></head><body><a className="skip-link" href="#main">Skip to main content</a><Header/><main id="main">{children}</main><Footer/><FloatingWhatsApp/></body></html>;
}

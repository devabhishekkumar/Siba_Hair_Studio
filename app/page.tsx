import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowUpRight,
  Diamond,
  Sparkles,
  Waves,
  Crown,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import Faq from '@/components/Faq';
import TeamCards from '@/components/TeamCards';
import Reviews from '@/components/Reviews';
import VideoGallery from '@/components/VideoGallery';
import GalleryGrid from '@/components/GalleryGrid';
import { Cta, Eyebrow, SectionTitle } from '@/components/Ui';
import { services, site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-backdrop" aria-hidden="true">
          <Image
            src="/images/salon-hero-placeholder.webp"
            alt=""
            className="hero-background-image"
            fill
            sizes="100vw"
            preload
          />
        </div>
        <div className="hero-veil" aria-hidden="true" />
        <div className="container-page home-hero-inner">
          <div className="hero-main-copy">
            <div className="hero-kicker">
              <span className="hero-kicker-rule" /> THE ART OF BEAUTY AND
              INDULGENCE
            </div>
            <h1>
              Elegance is
              <br />
              <em>an experience.</em>
            </h1>
            <p>
              Welcome to SIBA HAIR STUDIO. A refined space for hair, beauty and
              moments of indulgent self-care.
            </p>
            <div className="hero-actions">
              <Cta href="/booking">Book your experience</Cta>
              <Link href="/services" className="quiet-link">
                Explore services <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-bottom container-page">
          <div>
            <span>01 — 06</span> CURATED SERVICE CATEGORIES
          </div>
          <div>BEAUTY • STYLE • RESTORATION</div>
          <a href="#welcome" aria-label="Scroll to discover">
            <ArrowDownRight size={22} />
          </a>
        </div>
      </section>

      {/* <section id="welcome" className="section-space welcome-section"><div className="container-page split-editorial">
      <Reveal className="welcome-visual"><div className="welcome-photo" role="img" aria-label="SIBA HAIR STUDIO original gold salon wall signage"/><span className="photo-vertical-label">A SIGNATURE OF STYLE</span><div className="welcome-visual-accent">S <span>SIBA HAIR STUDIO</span></div></Reveal>
      <Reveal className="welcome-copy" delay={0.13}><Eyebrow>WELCOME TO SIBA HAIR STUDIO</Eyebrow><h2 className="display-title">Beauty is personal.<br/><em>So is our approach.</em></h2><p>More than a salon appointment, your time here is an invitation to look after yourself. Discover a space inspired by timeless elegance, individual expression and thoughtful care.</p><p>Whether it is a familiar refresh or a completely new look, every visit starts with you.</p>
        <div className="signature-line"><span>S</span><div><strong>SIBA HAIR STUDIO</strong><small>Hair &amp; Beauty</small></div></div><Cta href="/about" outline>Discover our story</Cta>
      </Reveal>
    </div></section> */}

      <section className="section-space services-section">
        <div className="container-page">
          <Reveal>
            <div className="section-heading-row">
              <SectionTitle
                eyebrow="THE SIGNATURE COLLECTION"
                title={
                  <>
                    Designed for <em>your every mood.</em>
                  </>
                }
                description="Explore beautifully considered services, from fresh cuts and colour to the art of relaxation."
              />
              <Cta href="/services" outline>
                View all services
              </Cta>
            </div>
          </Reveal>
          <div className="services-grid">
            {services.slice(0, 3).map((s, i) => (
              <Reveal delay={i * 0.09} key={s.slug}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="luxury-divider" aria-hidden="true">
        <span>S</span>
        <div>THE SIBA HAIR STUDIO EXPERIENCE</div>
        <span>✦</span>
      </div>

      <section className="section-space experience-section">
        <div className="container-page experience-grid">
          <Reveal className="experience-copy">
            <Eyebrow>THE LITTLE THINGS MATTER</Eyebrow>
            <h2 className="display-title">
              Your time.
              <br />
              <em>Your moment.</em>
            </h2>
            <p>
              Every great transformation begins with the freedom to be yourself.
              Our inspiration comes from the quiet luxury of an unhurried,
              feel-good experience.
            </p>
            <div className="experience-features">
              <div>
                <Diamond />
                <strong>A refined atmosphere</strong>
                <small>Warm gold, rich textures, and calm details.</small>
              </div>
              <div>
                <Sparkles />
                <strong>Thoughtful personal style</strong>
                <small>Make the look your own.</small>
              </div>
              <div>
                <Waves />
                <strong>Time for restoration</strong>
                <small>Find your pause between busy days.</small>
              </div>
            </div>
            <Cta href="/booking">Make time for you</Cta>
          </Reveal>
          <Reveal className="experience-photo-panel" delay={0.15}>
            <div className="experience-photo">
              <Image
                src="/images/hero/bride_2-YKb89Bz8aqFb3ZyK.avif"
                alt="Bridal makeup with shimmering eye shadow, gold jewellery and a rose-coloured veil"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1440px) 45vw, 555px"
              />
            </div>
            <div className="experience-photo-quote">
              “Indulge in the art of being you.”
              <span>SIBA HAIR STUDIO • HAIR & BEAUTY</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="team"
        aria-label="Our team"
        className="team-section section-space"
      >
        <div className="container-page">
          <Reveal>
            <div className="section-heading-row">
              <SectionTitle
                eyebrow="OUR TEAM"
                title={
                  <>
                    The craft behind <em>your confidence.</em>
                  </>
                }
                description="Discover the specialties behind your next look, from a fresh cut and colour to the finishing touches."
              />
              <Cta href="/team" outline>
                Explore our team
              </Cta>
            </div>
          </Reveal>
          <TeamCards />
          <p className="team-profile-note">
            AI-generated sample portraits. Individual team profiles are coming
            soon.
          </p>
        </div>
      </section>

      <section
        id="photos"
        aria-label="Photo gallery"
        className="gallery-home-section section-space"
      >
        <div className="container-page">
          <Reveal>
            <div className="section-heading-row">
              <SectionTitle
                eyebrow="THE STUDIO IN FOCUS"
                title={
                  <>
                    The details make <em>the difference.</em>
                  </>
                }
                description="Explore salon spaces, hair looks and beauty inspiration."
              />
              <Cta href="/gallery" outline>
                Explore gallery
              </Cta>
            </div>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>

      <section
        id="videos"
        aria-label="Videos"
        className="gallery-videos-section section-space"
      >
        <div className="container-page">
          <Reveal>
            <div className="section-heading-row">
              <SectionTitle
                eyebrow="THE STUDIO IN MOTION"
                title={
                  <>
                    See it <em>in motion.</em>
                  </>
                }
                description="Videos play automatically with sound muted. Use the controls to pause, turn on sound or watch in fullscreen."
              />
              <Cta href="/gallery#videos" outline>
                Explore videos
              </Cta>
            </div>
          </Reveal>
          <VideoGallery />
        </div>
      </section>

      <Reviews whatsappNumber={site.whatsapp} />

      <section className="faq-section section-space">
        <div className="container-page faq-layout">
          <Reveal>
            <SectionTitle
              eyebrow="GOOD TO KNOW"
              title={
                <>
                  Questions, <em>answered.</em>
                </>
              }
              description="A few useful details before your first visit."
            />
            <Cta href="/contact" outline>
              Ask us anything
            </Cta>
          </Reveal>
          <Reveal delay={0.12}>
            <Faq />
          </Reveal>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-cta-glow" />
        <div className="container-page closing-cta-inner">
          <Reveal>
            <Crown size={30} strokeWidth={1.15} />
            <Eyebrow>YOUR NEXT BEAUTIFUL MOMENT</Eyebrow>
            <h2>
              Make time for <em>yourself.</em>
            </h2>
            <p>The best investment is sometimes a little time just for you.</p>
            <Cta href="/booking" light>
              Request your appointment
            </Cta>
          </Reveal>
          <span className="closing-decor">S</span>
        </div>
      </section>
    </>
  );
}

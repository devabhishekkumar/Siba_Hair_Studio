import type { Metadata } from 'next';
import { Film, Images } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import VideoGallery from '@/components/VideoGallery';
import { Cta, PageHero, SectionTitle } from '@/components/Ui';

export const metadata: Metadata = { title: 'Gallery' };

export default function Gallery() {
  return <>
    <PageHero
      eyebrow="A WORLD OF SIBA HAIR STUDIO"
      title={<>The look. <em>The feeling.</em></>}
      description="Explore our photo gallery and watch moments from our video collection."
    />

    <nav className="container-page gallery-section-nav" aria-label="Gallery sections">
      <a href="#photos"><Images size={18} aria-hidden="true" />Photos</a>
      <a href="#videos"><Film size={18} aria-hidden="true" />Videos</a>
    </nav>

    <section id="photos" aria-label="Photos" className="section-space gallery-photos-section">
      <div className="container-page">
        <SectionTitle eyebrow="PHOTO GALLERY" title={<>A closer <em>look.</em></>} />
        <GalleryGrid />
      </div>
    </section>

    <section id="videos" aria-label="Videos" className="section-space gallery-videos-section">
      <div className="container-page">
        <SectionTitle
          eyebrow="VIDEO GALLERY"
          title={<>See it <em>in motion.</em></>}
          description="Videos play automatically with sound muted. Use the controls to pause, turn on sound or watch in fullscreen."
        />
        <VideoGallery />
      </div>
    </section>

    <section className="service-enquiry-banner">
      <div className="container-page">
        <div><span>YOUR NEXT STORY BEGINS HERE</span><h2>Let&apos;s create your look.</h2><p>Have something in mind? Tell us about it.</p></div>
        <Cta href="/booking">Book an enquiry</Cta>
      </div>
    </section>
  </>;
}

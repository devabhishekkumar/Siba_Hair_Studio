import type { Metadata } from 'next';
import TeamCards from '@/components/TeamCards';
import { Cta, PageHero, SectionTitle } from '@/components/Ui';

export const metadata: Metadata = { title: 'Our Team' };

export default function Team() {
  return <>
    <PageHero
      eyebrow="OUR TEAM"
      title={<>Artistry meets <em>care.</em></>}
      description="Your next look starts with a conversation. Explore hair, colour and beauty specialties at Siba Hair Studio."
    />
    <section className="team-section section-space">
      <div className="container-page">
        <SectionTitle
          eyebrow="THE CRAFT BEHIND THE EXPERIENCE"
          title={<>A personal touch. <em>In every detail.</em></>}
          description="From your first consultation to the final finish, make room for your own expression of style."
        />
        <TeamCards />
        <p className="team-profile-note">AI-generated sample portraits. Individual team profiles are coming soon.</p>
        <div className="team-note">
          <div>
            <h2>Let’s talk about your next look.</h2>
            <p>Share your ideas, ask about a service and plan a visit around you.</p>
          </div>
          <Cta href="/booking">Request a consultation</Cta>
        </div>
      </div>
    </section>
  </>;
}

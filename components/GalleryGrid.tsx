'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gallery } from '@/lib/site';
export default function GalleryGrid() {
  const [active, setActive] = useState('All');
  const shown = gallery.filter(
    (item) => active === 'All' || item.group === active,
  );
  return (
    <>
      <div className="filter-tabs" role="group" aria-label="Filter gallery">
        {['All', 'Siba Hair Studio', 'Inspiration'].map((key) => (
          <button
            className={active === key ? 'filter-active' : ''}
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {shown.map((item, index) => (
          <article className="gallery-tile" key={item.title}>
            <div
              className={
                item.src === '/images/siba-logo-recreated.png'
                  ? 'gallery-photo gallery-logo'
                  : 'gallery-photo'
              }
              role="img"
              aria-label={item.alt}
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(0,0,0,.72)), url("${item.src}")`,
              }}
            />
            <div className="gallery-tile-content">
              <span>
                {item.group === 'Siba Hair Studio'
                  ? 'FROM OUR STUDIO'
                  : 'INSPIRATION IMAGE'}
              </span>
              <h3>{item.title}</h3>
            </div>
            <span className="gallery-arrow">
              <ArrowUpRight size={19} />
            </span>
            <span className="gallery-number">
              {String(index + 1).padStart(2, '0')}
            </span>
          </article>
        ))}
      </div>
      <p className="gallery-disclaimer">
        Studio photographs and branding show the Siba Hair Studio identity.
        Inspiration images illustrate our service categories.
      </p>
    </>
  );
}

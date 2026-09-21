import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Visuals' },
    { id: 'hair', label: 'Hair Artistry' },
    { id: 'rituals', label: 'Treatments & Rituals' },
    { id: 'nails', label: 'Nails & Beauty' },
    { id: 'space', label: 'Studio Sanctuary' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="gallery" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">The Lookbook</span>
          <h2 className="section-title">
            Visual Harmony & <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Artisanal Detailing
            </span>
          </h2>
          <p className="section-description">
            A curated look into the hairstyles, restorative steam rituals, luxury nail overlays, and tranquil atmosphere at our Ogudu studio.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'all var(--transition-smooth)',
                backgroundColor:
                  activeFilter === filter.id ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                color: activeFilter === filter.id ? '#0A0807' : 'var(--color-text-secondary)',
                border: `1px solid ${
                  activeFilter === filter.id ? 'var(--color-gold)' : 'var(--color-border-subtle)'
                }`,
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-bg-card)',
                boxShadow: 'var(--shadow-card)',
                aspectRatio: item.featured ? '16/11' : '4/3',
              }}
              className="gallery-card"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(10, 8, 7, 0.92) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.75rem',
                  opacity: 0.9,
                  transition: 'all var(--transition-smooth)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold)',
                        display: 'block',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.category}
                    </span>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif-display)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#FFF',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(223, 190, 122, 0.15)',
                      border: '1px solid var(--color-border-gold)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="modal-overlay"
          onClick={() => setLightboxItem(null)}
          style={{ zIndex: 1100 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#120F0D',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-floating)',
            }}
          >
            <button
              onClick={() => setLightboxItem(null)}
              aria-label="Close Lightbox"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <X size={18} />
            </button>

            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.title}
              style={{
                width: '100%',
                maxHeight: '65vh',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <div style={{ padding: '1.75rem 2rem' }}>
              <span className="gold-badge gold-badge-sm" style={{ marginBottom: '0.5rem' }}>
                {lightboxItem.category}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.85rem',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {lightboxItem.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

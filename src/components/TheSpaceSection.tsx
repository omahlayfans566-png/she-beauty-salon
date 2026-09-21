import React from 'react';
import { Sparkles, Wind, Eye, Droplets, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface TheSpaceSectionProps {
  onOpenBooking: () => void;
}

export const TheSpaceSection: React.FC<TheSpaceSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="the-space"
      className="section"
      style={{
        backgroundColor: '#0A0807',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">The Studio Sanctuary</span>
          <h2 className="section-title">
            Where Beauty Meets <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Tranquil Calm
            </span>
          </h2>
          <p className="section-description">
            Designed as a modern-luxe refuge in Ogudu, Lagos. We created a space of warmth, acoustic calm, and immaculate cleanliness where your self-care time is truly honored.
          </p>
        </div>

        {/* Cinematic Full-Width Interior Showcase */}
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(223, 190, 122, 0.3)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7)',
            marginBottom: '3.5rem',
          }}
        >
          <img
            src="/images/studio-interior.jpg"
            alt="Interior atmosphere of SHE Beauty Studio at 163 Ogudu Road Lagos"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '520px',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Gradient Lighting & Inset Banner */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(10, 8, 7, 0.92) 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '100%',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div style={{ maxWidth: '580px' }}>
                <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>
                  <Sparkles size={12} /> Modern Mainland Luxury
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                    color: '#FFF',
                    lineHeight: 1.15,
                    marginBottom: '0.5rem',
                  }}
                >
                  Warm neutrals, arched bronze mirrors, and serene comfort.
                </h3>
                <p style={{ color: 'var(--color-cream-soft)', fontSize: '0.92rem', margin: 0 }}>
                  Every styling station and treatment suite is crafted to make your visit feel like an unhurried spa escape.
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ padding: '0.9rem 1.85rem', fontSize: '0.85rem' }}
              >
                <span>Experience The Space</span>
              </button>
            </div>
          </div>
        </div>

        {/* Space Attributes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            {
              icon: <Wind size={22} style={{ color: 'var(--color-gold)' }} />,
              title: 'Acoustic Calm & Relaxation',
              description: 'Soft curated playlists and serene ambiance designed to de-stress after Lagos traffic.',
            },
            {
              icon: <Droplets size={22} style={{ color: 'var(--color-gold)' }} />,
              title: 'Ionic Steam & Spa Stations',
              description: 'Specialized deep treatment steam units for optimal botanical infusion and hair therapy.',
            },
            {
              icon: <Eye size={22} style={{ color: 'var(--color-gold)' }} />,
              title: 'Comfortable Styling Stations',
              description: 'High-comfort seating that ensures total ease during braiding, loc maintenance, or color sessions.',
            },
            {
              icon: <ShieldCheck size={22} style={{ color: 'var(--color-gold)' }} />,
              title: 'Professional Sanitation',
              description: 'Consistent hygiene and sanitation practices across all nail, skin, and hair treatment services.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                backgroundColor: 'rgba(23, 19, 16, 0.6)',
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h4
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.3rem',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

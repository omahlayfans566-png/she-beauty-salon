import React from 'react';
import { Star, Sparkles, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getStudioStatus } from '../data/businessData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const status = getStudioStatus();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 5.25rem)',
        maxHeight: '960px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient luxury lighting */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(223, 190, 122, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(161, 122, 84, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Headline & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Location & Status Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
                marginBottom: '1.75rem',
              }}
            >
              <span className="gold-badge">
                <MapPin size={12} />
                <span>Ogudu, Lagos</span>
              </span>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: status.isOpen ? 'var(--color-success-bg)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${status.isOpen ? 'rgba(82, 183, 136, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: status.isOpen ? 'var(--color-success)' : 'var(--color-text-muted)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: status.isOpen ? 'var(--color-success)' : 'var(--color-gold)',
                    display: 'inline-block',
                  }}
                />
                <span>{status.statusText}</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.75rem)',
                fontFamily: 'var(--font-serif-display)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: 'var(--color-text-primary)',
              }}
            >
              Beauty, <br />
              <span className="text-gold-gradient" style={{ fontStyle: 'italic', fontWeight: 500 }}>
                Refined.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.22rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2.25rem',
                fontWeight: 300,
              }}
            >
              {BUSINESS_INFO.heroSubhead}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                width: '100%',
                marginBottom: '2.75rem',
              }}
            >
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary"
                style={{ padding: '1.05rem 2.2rem', fontSize: '0.92rem' }}
              >
                <Sparkles size={16} />
                <span>Book Your Experience</span>
              </button>

              <button
                onClick={onExploreServices}
                className="btn-secondary"
                style={{ padding: '1.02rem 1.95rem', fontSize: '0.92rem' }}
              >
                <span>Explore Services</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Verified Google Social Proof Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0.9rem 1.35rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-gold)"
                    color="var(--color-gold)"
                  />
                ))}
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                    {BUSINESS_INFO.rating.score} / {BUSINESS_INFO.rating.maxScore}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    ({BUSINESS_INFO.rating.reviewCount}+ Google Reviews)
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-gold-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ShieldCheck size={12} />
                  <span>Verified Client Experiences &middot; Ogudu Lagos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Editorial Visual Treatment */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Outer Decorative Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                borderRadius: '32px 32px 140px 32px',
                overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7), 0 0 40px rgba(197, 160, 89, 0.18)',
                border: '1px solid rgba(223, 190, 122, 0.35)',
              }}
            >
              <img
                src="/images/hero-editorial.jpg"
                alt="SHE Beauty Studio luxury hair and beauty editorial, Ogudu Lagos"
                fetchPriority="high"
                loading="eager"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  display: 'block',
                  transform: 'scale(1.01)',
                  transition: 'transform 0.75s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
              />

              {/* Gradient Overlay for Editorial Depth */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(10, 8, 7, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Floating Tag inside image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(15, 13, 11, 0.92)',
                  border: '1px solid rgba(223, 190, 122, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      display: 'block',
                    }}
                  >
                    Signature Focus
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#FFF',
                    }}
                  >
                    Healthy Hair & Luxury Aesthetics
                  </span>
                </div>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(223, 190, 122, 0.15)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                  }}
                >
                  <Sparkles size={16} />
                </div>
              </div>
            </div>

            {/* Subtle Floating Badge Offset */}
            <div
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '0',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(20, 17, 14, 0.95)',
                border: '1px solid var(--color-border-gold)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold)',
                  boxShadow: '0 0 10px var(--color-gold)',
                }}
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--color-gold-light)', textTransform: 'uppercase' }}>
                Lagos Mainland Sanctuary
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

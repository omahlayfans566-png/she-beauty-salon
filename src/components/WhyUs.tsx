import React from 'react';
import { PILLARS } from '../data/businessData';
import { ShieldCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">The Pillars of Distinction</span>
          <h2 className="section-title">
            Why Discerning Clients <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Choose SHE Beauty Studio
            </span>
          </h2>
          <p className="section-description">
            Five core commitments that define our approach to healthy hair, client comfort, and modern Afro-luxury beauty.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem 2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Pillar Number Watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: 'rgba(223, 190, 122, 0.08)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {pillar.number}
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Pillar {pillar.number}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.65rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {pillar.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-gold-light)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '1rem',
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--color-gold)' }} />
                <span>{pillar.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

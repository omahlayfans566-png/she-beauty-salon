import React, { useState } from 'react';
import { Sparkles, Check, Clock, ArrowRight, Shield } from 'lucide-react';
import { SIGNATURE_RITUALS } from '../data/businessData';

interface RitualsSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const RitualsSection: React.FC<RitualsSectionProps> = ({ onOpenBooking }) => {
  const [activeRitualIndex, setActiveRitualIndex] = useState(0);
  const currentRitual = SIGNATURE_RITUALS[activeRitualIndex];

  return (
    <section
      id="rituals"
      className="section"
      style={{
        backgroundColor: '#0C0A09',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Botanical Hair Science</span>
          <h2 className="section-title">
            Signature Rituals & <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Repair Therapies
            </span>
          </h2>
          <p className="section-description">
            Formulated to restore natural moisture balance, fortify hair bonds, and nourish textured strands. Dedicated to long-term hair wellness and scalp vitality.
          </p>
        </div>

        {/* Ritual Selector Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {SIGNATURE_RITUALS.map((ritual, idx) => (
            <button
              key={ritual.id}
              onClick={() => setActiveRitualIndex(idx)}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                transition: 'all var(--transition-smooth)',
                backgroundColor:
                  activeRitualIndex === idx ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                color: activeRitualIndex === idx ? '#0A0807' : 'var(--color-text-secondary)',
                border: `1px solid ${
                  activeRitualIndex === idx ? 'var(--color-gold)' : 'var(--color-border-subtle)'
                }`,
                boxShadow:
                  activeRitualIndex === idx ? '0 4px 20px rgba(223, 190, 122, 0.3)' : 'none',
              }}
            >
              {ritual.title}
            </button>
          ))}
        </div>

        {/* Featured Ritual Showcase */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
            }}
          >
            {/* Left Image Showcase */}
            <div style={{ position: 'relative', height: '100%', minHeight: '380px' }}>
              <img
                src={currentRitual.image}
                alt={currentRitual.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 60%, rgba(23, 19, 16, 0.9) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                }}
              >
                <span className="gold-badge">
                  <Sparkles size={12} /> {currentRitual.tag}
                </span>
              </div>
            </div>

            {/* Right Detailed Narrative */}
            <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {currentRitual.subtitle}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '2.2rem',
                    lineHeight: 1.15,
                    color: 'var(--color-text-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  {currentRitual.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
                  {currentRitual.description}
                </p>
              </div>

              {/* Ritual Step Features */}
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    display: 'block',
                    marginBottom: '0.85rem',
                  }}
                >
                  Key Experience Steps & Inclusions:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {currentRitual.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-cream-soft)',
                      }}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(223, 190, 122, 0.15)',
                          color: 'var(--color-gold)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={11} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                  <Clock size={15} style={{ color: 'var(--color-gold)' }} />
                  <span>Session Length: <strong>{currentRitual.duration}</strong></span>
                </div>

                <button
                  onClick={() => onOpenBooking(currentRitual.title)}
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.65rem', fontSize: '0.82rem' }}
                >
                  <Sparkles size={14} />
                  <span>Reserve This Ritual</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

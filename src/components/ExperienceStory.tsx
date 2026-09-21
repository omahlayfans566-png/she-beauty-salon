import React from 'react';
import { Sparkles, Wifi, Coffee, Heart, CheckCircle2, ShieldCheck, Feather } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ExperienceStoryProps {
  onOpenBooking: () => void;
}

export const ExperienceStory: React.FC<ExperienceStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        {/* Top Header */}
        <div className="section-header">
          <span className="section-subtitle">The SHE Philosophy</span>
          <h2 className="section-title">
            More than a beauty appointment. <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              A sanctuary for renewal.
            </span>
          </h2>
          <p className="section-description">
            {BUSINESS_INFO.experienceDescription}
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Image with Luxury Framing */}
          <div style={{ position: 'relative', paddingBottom: '3.5rem' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(223, 190, 122, 0.25)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src="/images/ritual-treatment.jpg"
                alt="SHE Beauty Studio hair steam treatment and scalp relaxation in Ogudu Lagos"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Inset Quote Card */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: '1.5rem',
                left: '1.5rem',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(12, 10, 9, 0.96)',
                border: '1px solid var(--color-border-gold)',
                boxShadow: 'var(--shadow-floating)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', marginBottom: '0.35rem' }}>
                <Feather size={15} />
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                  The Calm Standard
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-cream-soft)', fontStyle: 'italic', margin: 0 }}>
                “We believe the best version of your hair and beauty flourishes in an environment of patience, gentle care, and intentional luxury.”
              </p>
            </div>
          </div>

          {/* Right Column: Values & Commitments */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <span className="gold-badge gold-badge-sm" style={{ marginBottom: '1rem' }}>
                Crafted for Lagos Professionals & Trendsetters
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '2.1rem',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                  color: 'var(--color-text-primary)',
                }}
              >
                Where meticulous hair science meets serene hospitality.
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                At SHE Beauty Studio, we reject rushed salon chairs and aggressive techniques. Whether you are transitioning to natural curls, getting silk-pressed for a red-carpet weekend, or maintaining your locs, our stylists preserve the long-term integrity of your hair.
              </p>
            </div>

            {/* Feature List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              {[
                { title: 'Healthy Hair First', desc: 'Hydration steam & bond-protecting formulas on every texture.' },
                { title: 'Tension-Free Artistry', desc: 'Gentle protective braid & loc techniques that protect your edges.' },
                { title: 'Attentive Hospitality', desc: 'Warm greetings, dedicated attention, and unhurried appointments.' },
                { title: 'Pristine Hygiene', desc: 'Professional hygiene and sanitation practices across all treatments and styling stations.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', marginBottom: '0.35rem' }}>
                    <CheckCircle2 size={16} />
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)' }}>
                      {item.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Amenities Ribbon */}
            <div
              style={{
                marginTop: '0.5rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(223, 190, 122, 0.05)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Complimentary Studio Amenities
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Coffee size={15} style={{ color: 'var(--color-gold)' }} />
                  <span>Comfortable Client Experience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Wifi size={15} style={{ color: 'var(--color-gold)' }} />
                  <span>High-Speed Studio Wi-Fi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={15} style={{ color: 'var(--color-gold)' }} />
                  <span>Dedicated Treatment Spaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

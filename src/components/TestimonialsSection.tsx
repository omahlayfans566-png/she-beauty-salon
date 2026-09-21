import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/businessData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="reviews"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Client Feedback</span>
          <h2 className="section-title">
            Client Love & <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Real Experiences
            </span>
          </h2>
          <p className="section-description">
            Reflections from clients who visit SHE Beauty Studio for healthy hair care, modern luxury ambiance, and dedicated mainland hospitality.
          </p>
        </div>

        {/* Google Ratings Aggregate Summary Card */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 3.5rem auto',
            backgroundColor: 'rgba(12, 10, 9, 0.7)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--color-gold-light)',
                lineHeight: 1,
              }}
            >
              {BUSINESS_INFO.rating.score}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                Rated <strong>{BUSINESS_INFO.rating.score}★</strong> by customers on <strong>Google</strong>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(223, 190, 122, 0.08)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border-subtle)',
              fontSize: '0.78rem',
              color: 'var(--color-gold-light)',
            }}
          >
            <ShieldCheck size={14} style={{ color: 'var(--color-gold)' }} />
            <span>{BUSINESS_INFO.rating.reviewCount}+ Google Reviews</span>
          </div>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              border: '1px solid rgba(223, 190, 122, 0.35)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              position: 'relative',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Quote Icon */}
            <div
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2.5rem',
                color: 'rgba(223, 190, 122, 0.15)',
              }}
            >
              <Quote size={52} />
            </div>

            <div>
              {/* Rating & Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                  ))}
                </div>
                {current.serviceTag && (
                  <span className="gold-badge gold-badge-sm">
                    {current.serviceTag}
                  </span>
                )}
              </div>

              {/* Quote Content */}
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.45,
                  fontWeight: 400,
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                “{current.quote}”
              </blockquote>
            </div>

            {/* Author Meta */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.25rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {current.clientName}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-gold-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={12} /> {current.source} &middot; {current.date}
                </span>
              </div>

              {/* Carousel Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--color-gold)';
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', minWidth: '45px', textAlign: 'center' }}>
                  {String(currentIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
                </span>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--color-gold)';
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

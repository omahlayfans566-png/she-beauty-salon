import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS, getStudioStatus } from '../data/businessData';

export const LocationSection: React.FC = () => {
  const status = getStudioStatus();
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

  return (
    <section id="location" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Visit Our Studio</span>
          <h2 className="section-title">
            Prime Ogudu Road Location & <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Studio Hours
            </span>
          </h2>
          <p className="section-description">
            Conveniently situated on Ogudu Road, welcoming clients across Ikeja, Maryland, Gbagada, Magodo, and Victoria Island.
          </p>
        </div>

        {/* 2-Column Grid: Left Map & Actions, Right Opening Hours Schedule */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Location Details & Interactive Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <MapPin size={20} style={{ color: 'var(--color-gold)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.65rem',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  Studio Address
                </h3>
              </div>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-cream-soft)',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  lineHeight: 1.5,
                }}
              >
                {BUSINESS_INFO.address.full}
              </p>

              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Easily accessible with secure parking and easy drop-off along the central Ogudu Road corridor.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem' }}
                >
                  <Navigation size={15} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_INFO.contact.telLink}
                  className="btn-secondary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem' }}
                >
                  <Phone size={15} style={{ color: 'var(--color-gold)' }} />
                  <span>{BUSINESS_INFO.contact.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Embedded Stylized Map Frame */}
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border-subtle)',
                height: '280px',
                position: 'relative',
                backgroundColor: '#171310',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <iframe
                title="SHE Beauty Studio Location Map"
                src="https://maps.google.com/maps?q=163+Ogudu+Road+Ogudu+Lagos+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(110%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(12, 10, 9, 0.88)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border-gold)',
                  fontSize: '0.75rem',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <MapPin size={12} />
                <span>163 Ogudu Road, Lagos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Schedule & Studio Status */}
          <div className="glass-card" style={{ padding: '2.25rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} style={{ color: 'var(--color-gold)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.65rem',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  Opening Hours
                </h3>
              </div>

              {/* Status Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: status.isOpen ? 'var(--color-success-bg)' : 'rgba(223, 190, 122, 0.1)',
                  border: `1px solid ${status.isOpen ? 'rgba(82, 183, 136, 0.4)' : 'var(--color-border-gold)'}`,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: status.isOpen ? 'var(--color-success)' : 'var(--color-gold-light)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: status.isOpen ? 'var(--color-success)' : 'var(--color-gold)',
                  }}
                />
                <span>{status.statusText}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
              We recommend reserving your appointment in advance to ensure preferred stylist and suite availability.
            </p>

            {/* Schedule Table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              {OPENING_HOURS.map((item) => {
                const isToday = item.day.toLowerCase() === todayName.toLowerCase();
                return (
                  <div
                    key={item.day}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isToday ? 'rgba(223, 190, 122, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isToday ? 'var(--color-border-gold)' : 'rgba(255, 255, 255, 0.04)'}`,
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontWeight: isToday ? 700 : 500,
                          color: isToday ? 'var(--color-gold-light)' : 'var(--color-text-primary)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item.day}
                      </span>
                      {isToday && (
                        <span
                          style={{
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            padding: '0.1rem 0.45rem',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: 'var(--color-gold)',
                            color: '#0A0807',
                            fontWeight: 700,
                          }}
                        >
                          Today
                        </span>
                      )}
                    </div>

                    <span
                      style={{
                        fontSize: '0.88rem',
                        color: item.isOpen ? (isToday ? 'var(--color-gold)' : 'var(--color-text-secondary)') : 'var(--color-text-muted)',
                        fontWeight: isToday ? 600 : 400,
                        fontStyle: item.isOpen ? 'normal' : 'italic',
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp Concierge direct box */}
            <div
              style={{
                backgroundColor: 'rgba(37, 211, 102, 0.06)',
                border: '1px solid rgba(37, 211, 102, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#25D366', display: 'block' }}>
                  Need Immediate Assistance?
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                  Our front-desk concierge is available on WhatsApp during open hours.
                </span>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}
              >
                <MessageCircle size={15} />
                <span>Chat Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Sparkles, Phone, MessageCircle, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBooking }) => {
  const defaultWhatsAppUrl = buildWhatsAppLink();

  return (
    <section
      id="booking"
      className="section"
      style={{
        position: 'relative',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(197, 160, 89, 0.12) 0%, #0C0A09 100%)',
        borderTop: '1px solid var(--color-border-gold)',
        borderBottom: '1px solid var(--color-border-gold)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        <div
          style={{
            textAlign: 'center',
            padding: 'clamp(2rem, 5vw, 4.5rem) 1.5rem',
            backgroundColor: 'rgba(18, 15, 13, 0.85)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: '32px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
            position: 'relative',
          }}
        >
          {/* Top Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <span className="gold-badge">
              <Sparkles size={13} /> Reserve Your Appointment
            </span>
          </div>

          {/* Main Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
              color: 'var(--color-text-primary)',
            }}
          >
            Your next beauty experience <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              starts here.
            </span>
          </h2>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              maxWidth: '620px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Whether you desire a restorative botanical hair steam, sleek silk press, luxury knotless braids, or clean BIAB nail architecture—our artisans in Ogudu, Lagos await you.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ padding: '1.1rem 2.4rem', fontSize: '0.95rem' }}
            >
              <Calendar size={18} />
              <span>Book An Appointment</span>
            </button>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '1.1rem 2.2rem', fontSize: '0.95rem' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={BUSINESS_INFO.contact.telLink}
              className="btn-secondary"
              style={{ padding: '1.05rem 2rem', fontSize: '0.92rem' }}
            >
              <Phone size={17} style={{ color: 'var(--color-gold)' }} />
              <span>Call SHE Studio</span>
            </a>
          </div>

          {/* Location & Peace of Mind */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={15} style={{ color: 'var(--color-gold)' }} />
              <span>163 Ogudu Road, Ogudu, Lagos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} style={{ color: 'var(--color-gold)' }} />
              <span>Dedicated Stylist Attention &middot; No Rush Policy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

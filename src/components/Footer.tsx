import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Star, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#080605',
        borderTop: '1px solid var(--color-border-gold)',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1,
                }}
              >
                SHE
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  borderLeft: '1px solid rgba(223, 190, 122, 0.4)',
                  paddingLeft: '0.45rem',
                  lineHeight: 1.1,
                }}
              >
                BEAUTY<br />STUDIO
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              An elevated hair and beauty sanctuary on the Lagos Mainland, dedicated to healthy hair, precision styling, tension-free braids, and effortless luxury.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.15rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                4.9★ on Google (69+ reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Studio Menu Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              Explore Studio
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'The SHE Experience', href: '#about' },
                { label: 'Signature Services', href: '#services' },
                { label: 'Botanical Rituals & Treatments', href: '#rituals' },
                { label: 'The Space & Atmosphere', href: '#the-space' },
                { label: 'Client Reviews & Stories', href: '#reviews' },
                { label: 'Lookbook Gallery', href: '#gallery' },
                { label: 'Location & Hours', href: '#location' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--color-text-secondary)',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Details & Address */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              Ogudu Location
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={17} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <a
                  href={BUSINESS_INFO.contact.telLink}
                  style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}
                >
                  {BUSINESS_INFO.contact.displayPhone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <MessageCircle size={17} style={{ color: '#25D366', flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}
                >
                  WhatsApp Concierge
                </a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ marginTop: '1.75rem', width: '100%', padding: '0.85rem' }}
            >
              <Sparkles size={14} />
              <span>Book An Appointment</span>
            </button>
          </div>
        </div>

        {/* Concept Disclaimer & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
              <strong>Private Concept Presentation:</strong> This website is an independent digital concept demo created for <strong>SHE Beauty Studio</strong> (163 Ogudu Road, Ogudu, Lagos). All public business details, opening hours, and review excerpts reflect verified public listings.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              &copy; {new Date().getFullYear()} SHE Beauty Studio Concept.
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'var(--color-gold)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getStudioStatus } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getStudioStatus();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Rituals', href: '#rituals' },
    { label: 'The Space', href: '#the-space' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(12, 10, 9, 0.94)' : 'rgba(15, 13, 11, 0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(223, 190, 122, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '4.5rem' : '5.25rem',
          transition: 'height 0.35s ease',
        }}
      >
        {/* Brand Logo / Monogram */}
        <a
          href="#"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '1.85rem',
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
                fontSize: '0.62rem',
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
          <span
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginTop: '0.2rem',
            }}
          >
            Ogudu, Lagos
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '0.25rem 0',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="desktop-actions"
        >
          <a
            href={BUSINESS_INFO.contact.telLink}
            aria-label="Call SHE Beauty Studio"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 500,
              padding: '0.5rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border-subtle)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-gold-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <Phone size={14} style={{ color: 'var(--color-gold)' }} />
            <span>{BUSINESS_INFO.contact.phone}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="btn-primary"
            style={{
              padding: '0.75rem 1.45rem',
              fontSize: '0.8rem',
            }}
          >
            <Sparkles size={14} />
            <span>Book Experience</span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border-gold)',
            color: 'var(--color-gold)',
            background: 'rgba(223, 190, 122, 0.08)',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '4.5rem',
            backgroundColor: 'rgba(10, 8, 7, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem 6rem 1.5rem',
            overflowY: 'auto',
            animation: 'fadeIn 0.25s ease-out forwards',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: status.isOpen ? 'var(--color-success)' : 'var(--color-gold)',
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                width: 'fit-content',
                marginBottom: '0.5rem',
              }}
            >
              <Clock size={13} />
              <span>{status.statusText}</span>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.75rem',
                  color: 'var(--color-text-primary)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingBottom: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', opacity: 0.6 }}>
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Sparkles size={16} />
              <span>Book An Appointment</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                justifyContent: 'center',
                marginTop: '0.5rem',
              }}
            >
              <MapPin size={14} style={{ color: 'var(--color-gold)' }} />
              <span>163 Ogudu Road, Ogudu, Lagos</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

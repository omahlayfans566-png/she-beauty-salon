import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 85,
        backgroundColor: 'rgba(12, 10, 9, 0.95)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(223, 190, 122, 0.3)',
        padding: '0.65rem 1rem',
        boxShadow: '0 -8px 25px rgba(0, 0, 0, 0.5)',
      }}
      className="mobile-action-bar"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto 1fr',
          gap: '0.65rem',
          alignItems: 'center',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <a
          href={BUSINESS_INFO.contact.telLink}
          aria-label="Call studio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--color-border-subtle)',
            color: 'var(--color-gold)',
          }}
        >
          <Phone size={18} />
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp studio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(37, 211, 102, 0.15)',
            border: '1px solid rgba(37, 211, 102, 0.4)',
            color: '#25D366',
          }}
        >
          <MessageCircle size={18} />
        </a>

        <button
          onClick={onOpenBooking}
          className="btn-primary"
          style={{
            width: '100%',
            height: '44px',
            padding: '0 1rem',
            fontSize: '0.82rem',
          }}
        >
          <Sparkles size={14} />
          <span>Book Experience</span>
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-action-bar {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};

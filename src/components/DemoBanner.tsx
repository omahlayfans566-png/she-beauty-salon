import React, { useState } from 'react';
import { Sparkles, X, Info } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={{
      backgroundColor: '#14100D',
      borderBottom: '1px solid rgba(223, 190, 122, 0.25)',
      padding: '0.6rem 1rem',
      position: 'relative',
      zIndex: 100,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.8rem',
        color: '#D8CEBF',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(223, 190, 122, 0.15)',
            color: 'var(--color-gold)',
            padding: '0.15rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
          }}>
            <Sparkles size={12} /> Concept Demo
          </span>
          <span>
            Private Website Concept & Prototype prepared for <strong>SHE Beauty Studio</strong> (163 Ogudu Road, Lagos).
          </span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss banner"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-muted)',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.2rem',
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles, Clock, ArrowRight, Check, Search, Tag } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/businessData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

type CategoryType = 'all' | 'hair' | 'nails-beauty' | 'wellness' | 'gentlemen';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'hair', label: 'Hair Care & Artistry' },
    { id: 'nails-beauty', label: 'Nails & Skin' },
    { id: 'wellness', label: 'Wellness & Massage' },
    { id: 'gentlemen', label: "Gentlemen's Care" },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Curated Offerings</span>
          <h2 className="section-title">
            Signature Services & <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Bespoke Treatments
            </span>
          </h2>
          <p className="section-description">
            Explore our comprehensive menu of premium hair care, tension-free braid artistry, restorative loc spa ceremonies, and luxury nail architecture.
          </p>
        </div>

        {/* Category Controls & Search */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(23, 19, 16, 0.8)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border-subtle)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all var(--transition-smooth)',
                  backgroundColor:
                    activeCategory === cat.id ? 'var(--color-gold)' : 'transparent',
                  color: activeCategory === cat.id ? '#0A0807' : 'var(--color-text-secondary)',
                  boxShadow:
                    activeCategory === cat.id ? '0 4px 15px rgba(223, 190, 122, 0.3)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search services (e.g. Silk Press, BIAB, Locs)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem 1rem 0.7rem 2.6rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-text-primary)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'border-color var(--transition-fast)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-subtle)')}
            />
          </div>
        </div>

        {/* Pricing Note */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '0.78rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <span>* Sample Fresha pricing shown for demo reference. Custom consultations and final quotes confirmed upon booking.</span>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                position: 'relative',
                border: service.isSignature
                  ? '1px solid rgba(223, 190, 122, 0.4)'
                  : '1px solid var(--color-border-subtle)',
              }}
            >
              {/* Badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {service.isSignature && (
                    <span className="gold-badge gold-badge-sm">
                      <Sparkles size={11} /> Signature
                    </span>
                  )}
                  {service.isPopular && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        color: 'var(--color-text-primary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Most Requested
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.75rem',
                  }}
                >
                  <Clock size={13} />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Info */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    marginBottom: '0.65rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.25,
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                {service.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--color-text-muted)',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: 'var(--radius-xs)',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions & Price */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.7rem',
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Investment
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--color-gold)',
                    }}
                  >
                    {service.priceText.includes('₦')
                      ? service.priceText.split('/')[0].trim()
                      : service.priceText}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'rgba(223, 190, 122, 0.12)',
                    color: 'var(--color-gold-light)',
                    border: '1px solid var(--color-border-gold)',
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                    e.currentTarget.style.color = '#0A0807';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(223, 190, 122, 0.12)';
                    e.currentTarget.style.color = 'var(--color-gold-light)';
                  }}
                >
                  <span>Book</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <p>No services matched your search term "{searchQuery}".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-secondary"
              style={{ marginTop: '1rem', fontSize: '0.8rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

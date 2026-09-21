import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { SERVICES, ServiceItem, TIME_SLOTS, BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    preSelectedService || SERVICES[0]
  );
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[0]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNote, setClientNote] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
      setStep(2);
    }
  }, [preSelectedService]);

  useEffect(() => {
    if (!selectedDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      setSelectedDate(`${yyyy}-${mm}-${dd}`);
    }
  }, [selectedDate]);

  // Clean up form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setClientName('');
      setClientPhone('');
      setClientNote('');
      setSelectedTime(TIME_SLOTS[0]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrepareDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;
    setStep(4);
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  const whatsappDirectUrl = buildWhatsAppLink(
    selectedService?.name,
    selectedDate,
    selectedTime,
    clientName
  );

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          backgroundColor: '#120F0D',
          border: '1px solid var(--color-border-gold)',
          borderRadius: '24px',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-floating)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close Booking Modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFF';
            e.currentTarget.style.borderColor = 'var(--color-gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-muted)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <X size={18} />
        </button>

        {/* Step Progress */}
        {step < 4 && (
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span className="gold-badge gold-badge-sm">
                <Sparkles size={11} /> Appointment Concierge
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                Step {step} of 3
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem', height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div style={{ backgroundColor: step >= 1 ? 'var(--color-gold)' : 'transparent', transition: 'all 0.3s' }} />
              <div style={{ backgroundColor: step >= 2 ? 'var(--color-gold)' : 'transparent', transition: 'all 0.3s' }} />
              <div style={{ backgroundColor: step >= 3 ? 'var(--color-gold)' : 'transparent', transition: 'all 0.3s' }} />
            </div>
          </div>
        )}

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
              Select Your Service
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Choose from our signature healthy hair therapies, braid artistry, loc spa rituals, or luxury nail care.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '340px', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '2rem' }}>
              {SERVICES.map((srv) => {
                const isSelected = selectedService?.id === srv.id;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'rgba(223, 190, 122, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.06)'}`,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontWeight: 600, color: isSelected ? 'var(--color-gold-light)' : 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                          {srv.name}
                        </span>
                        {srv.isSignature && (
                          <span className="gold-badge gold-badge-sm" style={{ padding: '0.1rem 0.4rem', fontSize: '0.62rem' }}>
                            Signature
                          </span>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                        <span>Duration: {srv.duration}</span>
                        <span>&middot;</span>
                        <span style={{ color: 'var(--color-gold)' }}>{srv.priceText}</span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: `1.5px solid ${isSelected ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)'}`,
                        backgroundColor: isSelected ? 'var(--color-gold)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {isSelected && <CheckCircle2 size={13} color="#0A0807" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!selectedService}
              className="btn-primary"
              style={{ width: '100%', padding: '0.95rem' }}
            >
              <span>Continue to Date &amp; Time</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* STEP 2: Select Date & Time */}
        {step === 2 && (
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <button
                onClick={() => setStep(1)}
                style={{ background: 'none', border: 'none', color: 'var(--color-gold)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <ChevronLeft size={14} /> Back to Services
              </button>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '0.3rem' }}>
              Choose Date &amp; Time
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Selected: <strong style={{ color: 'var(--color-gold-light)' }}>{selectedService?.name}</strong> ({selectedService?.duration})
            </p>

            <div className="form-group">
              <label className="form-label">Preferred Appointment Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="form-input"
                style={{ colorScheme: 'dark' }}
              />
              <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.3rem', display: 'block' }}>
                Studio is closed on Mondays. Sunday hours start at 12:30 PM.
              </span>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Time</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    style={{
                      padding: '0.65rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      backgroundColor: selectedTime === time ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                      color: selectedTime === time ? '#0A0807' : 'var(--color-text-secondary)',
                      border: `1px solid ${selectedTime === time ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.08)'}`,
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="button" onClick={() => setStep(1)} className="btn-secondary" style={{ flex: 1, padding: '0.9rem' }}>
                Back
              </button>
              <button type="button" onClick={() => setStep(3)} className="btn-primary" style={{ flex: 2, padding: '0.9rem' }}>
                <span>Continue to Your Details</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Client Details */}
        {step === 3 && (
          <form onSubmit={handlePrepareDetails}>
            <div style={{ marginBottom: '1rem' }}>
              <button
                type="button"
                onClick={() => setStep(2)}
                style={{ background: 'none', border: 'none', color: 'var(--color-gold)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <ChevronLeft size={14} /> Back to Date &amp; Time
              </button>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '0.3rem' }}>
              Your Contact Details
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              We'll prepare your appointment details so you can send them directly to the studio.
            </p>

            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Chioma Adeleke"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +234 803 000 0000"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Notes / Specific Hair Needs (Optional)</label>
              <textarea
                rows={2}
                placeholder="e.g. Transitioning hair, sensitive scalp, need HD lace customization..."
                value={clientNote}
                onChange={(e) => setClientNote(e.target.value)}
                className="form-textarea"
              />
            </div>

            {/* Summary */}
            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(223, 190, 122, 0.05)',
                border: '1px solid var(--color-border-subtle)',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span>Service:</span>
                <strong style={{ color: 'var(--color-text-primary)' }}>{selectedService?.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span>Date &amp; Time:</span>
                <strong style={{ color: 'var(--color-gold)' }}>{selectedDate} at {selectedTime}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Location:</span>
                <span>163 Ogudu Road, Ogudu, Lagos</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" onClick={() => setStep(2)} className="btn-secondary" style={{ flex: 1, padding: '0.9rem' }}>
                Back
              </button>
              <button type="submit" className="btn-primary" style={{ flex: 2, padding: '0.9rem' }}>
                <Sparkles size={16} />
                <span>Prepare My Appointment</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Details Ready — Send via WhatsApp */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(223, 190, 122, 0.15)',
                border: '2px solid var(--color-gold)',
                color: 'var(--color-gold)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <CheckCircle2 size={34} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '2.2rem',
                color: 'var(--color-text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Appointment Details Ready
            </h3>

            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '460px', margin: '0 auto 1.75rem auto', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Your appointment details have been prepared, <strong style={{ color: 'var(--color-text-primary)' }}>{clientName}</strong>. Send them to SHE Beauty Studio on WhatsApp to complete your request and confirm availability.
            </p>

            {/* Primary: WhatsApp CTA */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '1.05rem', fontSize: '0.95rem', display: 'inline-flex', marginBottom: '1rem' }}
            >
              <MessageCircle size={18} />
              <span>Send to Studio via WhatsApp</span>
            </a>

            {/* Booking summary recap */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span>Service</span>
                <strong style={{ color: 'var(--color-text-primary)' }}>{selectedService?.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span>Date &amp; Time</span>
                <strong style={{ color: 'var(--color-gold)' }}>{selectedDate} at {selectedTime}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Studio</span>
                <span>163 Ogudu Road, Ogudu, Lagos</span>
              </div>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Your appointment is not yet confirmed. The studio will respond on WhatsApp to confirm your date and time.
            </p>

            <button
              onClick={handleResetAndClose}
              className="btn-secondary"
              style={{ padding: '0.75rem 2rem', fontSize: '0.82rem' }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

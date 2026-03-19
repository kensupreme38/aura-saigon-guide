import React from 'react';
import { formatPhoneNumber, createWhatsAppUrl } from '@/lib/whatsapp';

interface PhoneDisplayProps {
  showWhatsAppLink?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const PhoneDisplay = ({ showWhatsAppLink = true, className = "", children }: PhoneDisplayProps) => {
  const formattedNumber = formatPhoneNumber();
  const whatsappUrl = createWhatsAppUrl();

  if (showWhatsAppLink) {
    return (
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gradient-luxury font-semibold hover:opacity-80 transition-opacity ${className}`}
        aria-label={`Contact us on WhatsApp at ${formattedNumber}`}
      >
        {children || formattedNumber}
      </a>
    );
  }

  return (
    <span className={`text-gradient-luxury font-semibold ${className}`}>
      {children || formattedNumber}
    </span>
  );
};

export default PhoneDisplay;
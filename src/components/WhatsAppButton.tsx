import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

const WhatsAppButton = () => {
  const whatsappUrl = createWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
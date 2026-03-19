import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {

  return (
    <nav className="bg-gradient-card border-b border-gradient sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center space-x-3 group min-touch-target p-2 -ml-2"
            aria-label="Go to homepage"
          >
            <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-luxury hover:shadow-glow transition-luxury overflow-hidden bg-ktv-darker" aria-hidden="true">
              <img 
                src="/logo.png" 
                alt="Catwalk KTV Logo" 
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  // Try Google Drive sources
                  if (!e.currentTarget.src.includes('drive.google.com')) {
                    if (e.currentTarget.src !== 'https://drive.google.com/thumbnail?id=15R1tDygYVu40h8IvFyjrUCkrlqEJQALy&sz=w256') {
                      e.currentTarget.src = 'https://drive.google.com/thumbnail?id=15R1tDygYVu40h8IvFyjrUCkrlqEJQALy&sz=w256';
                    } else if (e.currentTarget.src !== 'https://drive.google.com/uc?export=view&id=15R1tDygYVu40h8IvFyjrUCkrlqEJQALy') {
                      e.currentTarget.src = 'https://drive.google.com/uc?export=view&id=15R1tDygYVu40h8IvFyjrUCkrlqEJQALy';
                    } else {
                      // Final fallback to placeholder
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }
                  } else {
                    // Final fallback to placeholder
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full bg-gradient-luxury rounded-xl flex items-center justify-center" style={{ display: 'none' }}>
                <span className="text-white font-luxury font-bold text-lg">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-luxury font-bold text-gradient-luxury">Catwalk KTV</span>
              <span className="text-[10px] text-muted-foreground font-elegant">Singapore's Premier</span>
            </div>
          </button>

          {/* Navigation - Both Desktop and Mobile */}
          <div className="flex items-center space-x-8">
            <a href="https://wa.me/6582668669?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20CATWALK%20KTV.%20Please%20let%20me%20know%20about%20availability%20and%20pricing." target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp at +65 8266 8669" className="min-touch-target inline-flex">
              <Button variant="luxury" size="default" className="gap-2 h-11">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
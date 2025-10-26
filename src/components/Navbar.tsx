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
            <div className="w-11 h-11 bg-gradient-luxury rounded-xl flex items-center justify-center shadow-luxury hover:shadow-glow transition-luxury" aria-hidden="true">
              <span className="text-white font-luxury font-bold text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-luxury font-bold text-gradient-luxury">Catwalk KTV</span>
              <span className="text-xs text-muted-foreground font-elegant">Singapore's Premier</span>
            </div>
          </button>

          {/* Navigation - Both Desktop and Mobile */}
          <div className="flex items-center space-x-8">
            <a href="tel:+6582808072" aria-label="Call us at +65 8280 8072" className="min-touch-target inline-flex">
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
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gradient-card border-b border-gradient sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-luxury rounded-xl flex items-center justify-center shadow-luxury hover:shadow-glow transition-luxury">
              <span className="text-white font-luxury font-bold text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-luxury font-bold text-gradient-luxury">Catwalk KTV</span>
              <span className="text-xs text-muted-foreground font-elegant">Singapore's Premier</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-luxury text-foreground hover:text-luxury-gold hover:bg-luxury-surface"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:93393265">
              <Button variant="luxury" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gradient animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-luxury text-foreground hover:text-luxury-gold hover:bg-luxury-surface text-left"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:93393265" className="mt-3">
                <Button variant="luxury" size="sm" className="gap-2 w-full">
                  <Phone className="w-4 h-4" />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
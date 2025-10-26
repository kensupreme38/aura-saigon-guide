import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ktv-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo và giới thiệu */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-gradient-luxury">Catwalk KTV</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Singapore's premier luxury KTV experience with 55 private rooms 
              and world-class entertainment. Your ultimate destination for unforgettable nights.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links nhanh */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">200 Jalan Sultan, Textile Centre Level 7, Singapore 199018</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:93393265" className="hover:text-primary transition-smooth">9339 3265</a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                booking@catwalkktv.sg
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Catwalk KTV Singapore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
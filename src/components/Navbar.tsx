import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/ktv-list', label: 'Danh Sách KTV' },
    { path: '/articles', label: 'Bài Viết' },
    { path: '/contact', label: 'Liên Hệ' },
  ];

  return (
    <nav className="bg-gradient-card border-b border-gradient sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-luxury rounded-xl flex items-center justify-center shadow-luxury hover:shadow-glow transition-luxury">
              <span className="text-white font-luxury font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-luxury font-bold text-gradient-luxury">Aura KTV</span>
              <span className="text-xs text-muted-foreground font-elegant">Luxury Experience</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-luxury ${
                  isActive(item.path)
                    ? 'text-luxury-gold bg-luxury-surface-light shadow-elegant'
                    : 'text-foreground hover:text-luxury-gold hover:bg-luxury-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="premium" size="sm" className="gap-2">
              <Search className="w-4 h-4" />
              Tìm Kiếm
            </Button>
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-luxury ${
                    isActive(item.path)
                      ? 'text-luxury-gold bg-gradient-surface shadow-elegant'
                      : 'text-foreground hover:text-luxury-gold hover:bg-luxury-surface'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="premium" size="sm" className="gap-2 mt-3">
                <Search className="w-4 h-4" />
                Tìm Kiếm
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
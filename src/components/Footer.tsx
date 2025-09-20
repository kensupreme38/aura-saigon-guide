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
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gradient-gold">Aura KTV</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Hướng dẫn tốt nhất về các địa điểm karaoke tại TP.HCM. 
              Thông tin chính xác, đánh giá trung thực và cập nhật liên tục.
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
            <h3 className="font-semibold text-foreground mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/ktv-list" className="text-muted-foreground hover:text-primary transition-smooth">
                  Danh Sách KTV
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-smooth">
                  Bài Viết
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                TP. Hồ Chí Minh
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                0909 123 456
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                info@auraktv.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Aura KTV. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
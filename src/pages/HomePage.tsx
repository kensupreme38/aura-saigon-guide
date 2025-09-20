import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import KTVCard from '@/components/KTVCard';
import { featuredKTVs, districts } from '@/data/ktvData';
import { Star, MapPin, TrendingUp, Users, Music, Search } from 'lucide-react';
import heroImage from '@/assets/hero-ktv.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury KTV Interior" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-fade-up">
          <div className="mb-6">
            <Badge className="bg-gradient-luxury text-white border-0 text-sm px-4 py-2 font-medium shadow-luxury">
              ✨ Trải Nghiệm Karaoke Đẳng Cấp
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-white mb-8 leading-tight">
            Khám Phá KTV 
            <span className="text-gradient-luxury block mt-2">Tốt Nhất Sài Gòn</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-elegant leading-relaxed">
            Hướng dẫn toàn diện về các địa điểm karaoke sang trọng và chất lượng cao tại TP.HCM. 
            Thông tin chính xác, đánh giá chân thực từ cộng đồng.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/ktv-list">
              <Button size="lg" variant="luxury" className="gap-3 text-lg px-8 py-4 animate-pulse-luxury">
                <Search className="w-5 h-5" />
                Khám Phá Ngay
              </Button>
            </Link>
            <Link to="/articles">
              <Button variant="premium" size="lg" className="gap-3 text-lg px-8 py-4 glass-effect">
                <Music className="w-5 h-5" />
                Đọc Bài Viết
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-luxury-rose/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-luxury-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover-lift">
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">50+</div>
              <div className="text-muted-foreground font-elegant">Địa Điểm KTV</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">1000+</div>
              <div className="text-muted-foreground font-elegant">Đánh Giá</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">9</div>
              <div className="text-muted-foreground font-elegant">Quận Huyện</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">24/7</div>
              <div className="text-muted-foreground font-elegant">Hỗ Trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured KTVs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
              KTV <span className="text-gradient-luxury">Nổi Bật</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant leading-relaxed">
              Những địa điểm karaoke được đánh giá cao nhất và được yêu thích bởi cộng đồng tại TP.HCM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredKTVs.slice(0, 6).map((ktv) => (
              <KTVCard key={ktv.id} ktv={ktv} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/ktv-list">
              <Button size="lg" variant="outline">
                Xem Tất Cả KTV
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 bg-ktv-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tìm Theo <span className="text-gradient-gold">Khu Vực</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá các địa điểm karaoke theo từng quận huyện tại TP.HCM
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {districts.map((district) => (
              <Link key={district} to={`/ktv-list?district=${district}`}>
                <Card className="hover:shadow-lg transition-smooth cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
                    <h3 className="font-semibold group-hover:text-primary transition-smooth">
                      {district}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {Math.floor(Math.random() * 10) + 5}+ địa điểm
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tại Sao Chọn <span className="text-gradient-gold">Aura KTV?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Thông Tin Cập Nhật</h3>
                <p className="text-muted-foreground">
                  Liên tục cập nhật thông tin mới nhất về giá cả, dịch vụ và chất lượng các địa điểm KTV
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Đánh Giá Thực Tế</h3>
                <p className="text-muted-foreground">
                  Các review và đánh giá từ khách hàng thực tế, giúp bạn có cái nhìn chính xác nhất
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Chất Lượng Cao</h3>
                <p className="text-muted-foreground">
                  Chỉ giới thiệu những địa điểm có chất lượng dịch vụ tốt và được khách hàng tin tưởng
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury KTV Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Khám Phá KTV Tốt Nhất 
            <span className="text-gradient-gold block">Tại TP.HCM</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Hướng dẫn toàn diện về các địa điểm karaoke cao cấp và bình dân tại Sài Gòn. 
            Thông tin chính xác, đánh giá trung thực từ cộng đồng.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ktv-list">
              <Button size="lg" className="gap-2 shadow-gold">
                <Search className="w-5 h-5" />
                Tìm KTV Ngay
              </Button>
            </Link>
            <Link to="/articles">
              <Button variant="outline" size="lg" className="gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Music className="w-5 h-5" />
                Xem Bài Viết
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-ktv-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Địa Điểm KTV</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Đánh Giá</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9</div>
              <div className="text-muted-foreground">Quận Huyện</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Hỗ Trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured KTVs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              KTV <span className="text-gradient-gold">Nổi Bật</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
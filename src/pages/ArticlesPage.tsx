import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, TrendingUp } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Hướng Dẫn Đi Karaoke Lần Đầu: Những Điều Bạn Cần Biết',
    excerpt: 'Bạn mới lần đầu đi karaoke và không biết chuẩn bị gì? Hãy đọc bài viết này để có trải nghiệm tuyệt vời nhất.',
    content: 'Nội dung chi tiết về cách đi karaoke lần đầu...',
    author: 'Minh Anh',
    date: '2024-01-15',
    readTime: '5 phút',
    category: 'Hướng dẫn',
    featured: true,
    image: '/src/assets/ktv-lounge-1.jpg'
  },
  {
    id: '2',
    title: 'Top 10 Bài Hát Karaoke Hot Nhất 2024',
    excerpt: 'Cập nhật danh sách những bài hát được yêu thích nhất tại các quán karaoke TP.HCM trong năm 2024.',
    content: 'Danh sách chi tiết các bài hát hot...',
    author: 'Thanh Tú',
    date: '2024-01-12',
    readTime: '8 phút',
    category: 'Âm nhạc',
    featured: true,
    image: '/src/assets/ktv-vip-room.jpg'
  },
  {
    id: '3',
    title: 'Văn Hóa Karaoke Tại Việt Nam: Từ Quá Khứ Đến Hiện Tại',
    excerpt: 'Tìm hiểu về lịch sử và sự phát triển của văn hóa karaoke tại Việt Nam, đặc biệt là TP.HCM.',
    content: 'Lịch sử phát triển của karaoke...',
    author: 'Hoàng Long',
    date: '2024-01-10',
    readTime: '12 phút',
    category: 'Văn hóa',
    featured: false,
    image: '/src/assets/hero-ktv.jpg'
  },
  {
    id: '4',
    title: 'So Sánh Karaoke Cao Cấp vs Bình Dân: Nên Chọn Loại Nào?',
    excerpt: 'Phân tích ưu nhược điểm của các loại hình karaoke khác nhau để bạn lựa chọn phù hợp.',
    content: 'So sánh chi tiết các loại karaoke...',
    author: 'Kim Ngân',
    date: '2024-01-08',
    readTime: '7 phút',
    category: 'Review',
    featured: false,
    image: '/src/assets/ktv-exterior.jpg'
  },
  {
    id: '5',
    title: 'Bí Quyết Hát Karaoke Hay: Tips Từ Các Chuyên Gia',
    excerpt: 'Những mẹo nhỏ giúp bạn hát karaoke tự tin và hay hơn, chinh phục mọi người nghe.',
    content: 'Các kỹ thuật hát karaoke...',
    author: 'Việt Anh',
    date: '2024-01-05',
    readTime: '10 phút',
    category: 'Hướng dẫn',
    featured: true,
    image: '/src/assets/ktv-lounge-1.jpg'
  }
];

const categories = ['Tất cả', 'Hướng dẫn', 'Review', 'Âm nhạc', 'Văn hóa'];

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Tất cả');

  const filteredArticles = selectedCategory === 'Tất cả' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bài Viết & <span className="text-gradient-gold">Review</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Khám phá thế giới karaoke qua các bài viết chuyên sâu và review trung thực
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Bài Viết Nổi Bật</h2>
            <Card className="overflow-hidden hover:shadow-elegant transition-smooth">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={featuredArticles[0].image} 
                    alt={featuredArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredArticles[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth">
                    <Link to={`/articles/${featuredArticles[0].id}`}>
                      {featuredArticles[0].title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticles[0].date).toLocaleDateString('vi-VN')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                  <Link to={`/articles/${featuredArticles[0].id}`}>
                    <Button>Đọc Tiếp</Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-smooth group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
                {article.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Hot
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth line-clamp-2">
                  <Link to={`/articles/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>

                <Link to={`/articles/${article.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Đọc Thêm
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Chưa có bài viết</h3>
              <p className="text-muted-foreground">
                Chưa có bài viết nào trong danh mục này
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
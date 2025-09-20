import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import KTVCard from '@/components/KTVCard';
import { ktvVenues, districts } from '@/data/ktvData';
import { Search, Filter, Grid, List } from 'lucide-react';

const KTVListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedKTVs = useMemo(() => {
    let filtered = ktvVenues.filter(ktv => {
      const matchesSearch = ktv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ktv.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistrict = selectedDistrict === 'all' || ktv.district === selectedDistrict;
      const matchesType = selectedType === 'all' || ktv.type === selectedType;
      
      return matchesSearch && matchesDistrict && matchesType;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'district':
          return a.district.localeCompare(b.district);
        case 'price':
          // Simple price sorting based on price range
          const getPrice = (range: string) => {
            const match = range.match(/(\d+)\.000/);
            return match ? parseInt(match[1]) : 0;
          };
          return getPrice(a.priceRange) - getPrice(b.priceRange);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedDistrict, selectedType, sortBy]);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'cao-cap': return 'Cao Cấp';
      case 'premium': return 'Premium';
      case 'binh-dan': return 'Bình Dân';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Danh Sách <span className="text-gradient-gold">KTV</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Khám phá {ktvVenues.length} địa điểm karaoke tốt nhất tại TP.HCM
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Tìm kiếm KTV..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* District Filter */}
              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn quận" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả quận</SelectItem>
                  {districts.map(district => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Loại hình" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại</SelectItem>
                  <SelectItem value="binh-dan">Bình Dân</SelectItem>
                  <SelectItem value="cao-cap">Cao Cấp</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Đánh giá</SelectItem>
                  <SelectItem value="name">Tên A-Z</SelectItem>
                  <SelectItem value="district">Quận</SelectItem>
                  <SelectItem value="price">Giá</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="secondary" className="gap-2">
                  Tìm kiếm: {searchTerm}
                  <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-destructive">
                    ×
                  </button>
                </Badge>
              )}
              {selectedDistrict !== 'all' && (
                <Badge variant="secondary" className="gap-2">
                  {selectedDistrict}
                  <button onClick={() => setSelectedDistrict('all')} className="ml-1 hover:text-destructive">
                    ×
                  </button>
                </Badge>
              )}
              {selectedType !== 'all' && (
                <Badge variant="secondary" className="gap-2">
                  {getTypeLabel(selectedType)}
                  <button onClick={() => setSelectedType('all')} className="ml-1 hover:text-destructive">
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-muted-foreground">
            Hiển thị {filteredAndSortedKTVs.length} kết quả
          </p>
        </div>

        {/* KTV Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredAndSortedKTVs.map((ktv) => (
            <KTVCard key={ktv.id} ktv={ktv} />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedKTVs.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Không tìm thấy kết quả</h3>
              <p className="text-muted-foreground">
                Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default KTVListPage;
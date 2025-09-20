export interface KTVVenue {
  id: string;
  name: string;
  address: string;
  district: string;
  type: 'cao-cap' | 'binh-dan' | 'premium';
  rating: number;
  reviewCount: number;
  priceRange: string;
  hours: string;
  phone: string;
  services: string[];
  rooms: number;
  image: string;
  gallery: string[];
  description: string;
  featured: boolean;
}

export const districts = [
  'Quận 1', 'Quận 3', 'Quận 5', 'Quận 7', 'Quận 10', 
  'Phú Nhuận', 'Bình Thạnh', 'Tân Bình', 'Gò Vấp'
];

export const ktvVenues: KTVVenue[] = [
  {
    id: '1',
    name: 'Golden Voice KTV',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    district: 'Quận 1',
    type: 'cao-cap',
    rating: 4.8,
    reviewCount: 245,
    priceRange: '200.000 - 500.000đ/giờ',
    hours: '18:00 - 02:00',
    phone: '028 3822 1234',
    services: ['Đồ ăn cao cấp', 'Đồ uống premium', 'Dịch vụ xe đưa đón', 'Phòng VIP'],
    rooms: 25,
    image: '/src/assets/ktv-lounge-1.jpg',
    gallery: ['/src/assets/ktv-lounge-1.jpg', '/src/assets/ktv-vip-room.jpg'],
    description: 'Karaoke cao cấp với hệ thống âm thanh hiện đại và dịch vụ chuyên nghiệp.',
    featured: true
  },
  {
    id: '2',
    name: 'Luxury Sing KTV',
    address: '456 Lê Lợi, Quận 1, TP.HCM',
    district: 'Quận 1',
    type: 'premium',
    rating: 4.9,
    reviewCount: 189,
    priceRange: '300.000 - 800.000đ/giờ',
    hours: '19:00 - 03:00',
    phone: '028 3829 5678',
    services: ['Buffet cao cấp', 'Rượu vang nhập khẩu', 'Phục vụ riêng', 'Spa thư giãn'],
    rooms: 15,
    image: '/src/assets/ktv-vip-room.jpg',
    gallery: ['/src/assets/ktv-vip-room.jpg', '/src/assets/hero-ktv.jpg'],
    description: 'Trải nghiệm karaoke đẳng cấp với không gian sang trọng và dịch vụ 5 sao.',
    featured: true
  },
  {
    id: '3',
    name: 'Music Box KTV',
    address: '789 Võ Văn Tần, Quận 3, TP.HCM',
    district: 'Quận 3',
    type: 'binh-dan',
    rating: 4.5,
    reviewCount: 312,
    priceRange: '80.000 - 200.000đ/giờ',
    hours: '17:00 - 01:00',
    phone: '028 3932 1111',
    services: ['Đồ ăn nhẹ', 'Nước ngọt', 'Bia tươi', 'Giao đồ ăn'],
    rooms: 20,
    image: '/src/assets/ktv-exterior.jpg',
    gallery: ['/src/assets/ktv-exterior.jpg', '/src/assets/ktv-lounge-1.jpg'],
    description: 'Karaoke giá cả phải chăng với không gian thoải mái và âm thanh chất lượng.',
    featured: true
  },
  {
    id: '4',
    name: 'Diamond KTV',
    address: '321 Điện Biên Phủ, Bình Thạnh, TP.HCM',
    district: 'Bình Thạnh',
    type: 'cao-cap',
    rating: 4.7,
    reviewCount: 198,
    priceRange: '250.000 - 600.000đ/giờ',
    hours: '18:30 - 02:30',
    phone: '028 3899 9999',
    services: ['Thức ăn Nhật Bản', 'Cocktail đặc biệt', 'Phòng gia đình', 'Game arcade'],
    rooms: 30,
    image: '/src/assets/hero-ktv.jpg',
    gallery: ['/src/assets/hero-ktv.jpg', '/src/assets/ktv-vip-room.jpg'],
    description: 'Không gian karaoke hiện đại với thiết kế độc đáo và trải nghiệm đa dạng.',
    featured: true
  },
  {
    id: '5',
    name: 'Royal Voice',
    address: '555 Cách Mạng Tháng 8, Tân Bình, TP.HCM',
    district: 'Tân Bình',
    type: 'premium',
    rating: 4.6,
    reviewCount: 156,
    priceRange: '350.000 - 900.000đ/giờ',
    hours: '19:00 - 03:00',
    phone: '028 3977 7777',
    services: ['Menu châu Âu', 'Rượu whisky cao cấp', 'Butler service', 'Phòng tắm riêng'],
    rooms: 12,
    image: '/src/assets/ktv-lounge-1.jpg',
    gallery: ['/src/assets/ktv-lounge-1.jpg', '/src/assets/ktv-vip-room.jpg'],
    description: 'Karaoke hoàng gia với dịch vụ butler và không gian siêu sang trọng.',
    featured: true
  },
  {
    id: '6',
    name: 'Friendly KTV',
    address: '777 Nguyễn Thị Minh Khai, Quận 3, TP.HCM',
    district: 'Quận 3',
    type: 'binh-dan',
    rating: 4.3,
    reviewCount: 267,
    priceRange: '60.000 - 150.000đ/giờ',
    hours: '16:00 - 24:00',
    phone: '028 3943 3333',
    services: ['Trà sữa', 'Bánh kẹo', 'Nước ép trái cây', 'Wi-Fi miễn phí'],
    rooms: 18,
    image: '/src/assets/ktv-exterior.jpg',
    gallery: ['/src/assets/ktv-exterior.jpg', '/src/assets/ktv-lounge-1.jpg'],
    description: 'Karaoke thân thiện với không gian ấm cúng, phù hợp với sinh viên.',
    featured: true
  }
];

export const featuredKTVs = ktvVenues.filter(ktv => ktv.featured);

export const getKTVsByDistrict = (district: string) => 
  ktvVenues.filter(ktv => ktv.district === district);

export const getKTVsByType = (type: string) => 
  ktvVenues.filter(ktv => ktv.type === type);
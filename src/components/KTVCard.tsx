import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { KTVVenue } from '@/data/ktvData';

interface KTVCardProps {
  ktv: KTVVenue;
  showActions?: boolean;
}

const KTVCard = ({ ktv, showActions = true }: KTVCardProps) => {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'cao-cap': return 'Cao Cấp';
      case 'premium': return 'Premium';
      case 'binh-dan': return 'Bình Dân';
      default: return type;
    }
  };

  const getTypeVariant = (type: string) => {
    switch (type) {
      case 'cao-cap': return 'secondary';
      case 'premium': return 'default';
      case 'binh-dan': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-smooth overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={ktv.image} 
          alt={ktv.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={getTypeVariant(ktv.type)}>
            {getTypeLabel(ktv.type)}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-primary fill-current" />
          <span className="text-xs font-medium text-white">{ktv.rating}</span>
          <span className="text-xs text-gray-300">({ktv.reviewCount})</span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
          {ktv.name}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{ktv.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{ktv.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{ktv.phone}</span>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-sm font-medium text-primary">{ktv.priceRange}</p>
          <p className="text-xs text-muted-foreground mt-1">{ktv.rooms} phòng</p>
        </div>
      </CardContent>

      {showActions && (
        <CardFooter className="p-4 pt-0">
          <Link to={`/ktv/${ktv.id}`} className="w-full">
            <Button className="w-full">
              Xem Chi Tiết
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default KTVCard;
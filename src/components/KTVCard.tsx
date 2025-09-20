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
    <Card className="group hover-lift bg-gradient-card border-gradient overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={ktv.image} 
          alt={ktv.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4">
          <Badge 
            variant={getTypeVariant(ktv.type)}
            className="bg-luxury-surface/90 backdrop-blur-sm border-gradient text-luxury-gold font-medium"
          >
            {getTypeLabel(ktv.type)}
          </Badge>
        </div>
        
        <div className="absolute top-4 right-4 glass-effect rounded-lg px-3 py-2 flex items-center gap-2">
          <Star className="w-4 h-4 text-luxury-gold fill-current" />
          <span className="text-sm font-semibold text-white">{ktv.rating}</span>
          <span className="text-xs text-gray-300">({ktv.reviewCount})</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-luxury font-bold text-xl text-white mb-1 group-hover:text-luxury-gold transition-luxury">
            {ktv.name}
          </h3>
          <p className="text-luxury-gold font-semibold text-lg">
            {ktv.priceRange}
          </p>
        </div>
      </div>

      <CardContent className="p-6 bg-gradient-surface">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground hover:text-luxury-gold transition-smooth">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{ktv.address}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground hover:text-luxury-gold transition-smooth">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{ktv.hours}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground hover:text-luxury-gold transition-smooth">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{ktv.phone}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gradient">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{ktv.rooms} phòng</p>
            <div className="flex gap-1">
              {ktv.services.slice(0, 2).map((service, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {showActions && (
        <CardFooter className="p-6 pt-0">
          <Link to={`/ktv/${ktv.id}`} className="w-full">
            <Button className="w-full" variant="luxury">
              Khám Phá Ngay
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default KTVCard;
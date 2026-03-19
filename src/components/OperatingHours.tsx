import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DaySchedule {
  day: string;
  shortDay: string;
  open: string;
  close: string;
}

const OperatingHours: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [status, setStatus] = useState<{ text: string; variant: 'default' | 'destructive' | 'secondary' | 'outline' }>({
    text: '',
    variant: 'default'
  });

  const schedule: DaySchedule[] = [
    { day: 'Monday', shortDay: 'Mon', open: '16:00', close: '03:00' },
    { day: 'Tuesday', shortDay: 'Tue', open: '16:00', close: '03:00' },
    { day: 'Wednesday', shortDay: 'Wed', open: '16:00', close: '03:00' },
    { day: 'Thursday', shortDay: 'Thu', open: '16:00', close: '03:00' },
    { day: 'Friday', shortDay: 'Fri', open: '16:00', close: '03:00' },
    { day: 'Saturday', shortDay: 'Sat', open: '16:00', close: '04:00' },
    { day: 'Sunday', shortDay: 'Sun', open: '19:00', close: '03:00' },
  ];

  const calculateStatus = () => {
    // Get current time in Singapore timezone (GMT+8)
    const now = new Date();
    const singaporeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }));
    
    const currentHour = singaporeTime.getHours();
    const currentMinute = singaporeTime.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;
    const dayIndex = singaporeTime.getDay() === 0 ? 6 : singaporeTime.getDay() - 1; // Convert Sunday from 0 to 6
    
    const todaySchedule = schedule[dayIndex];
    const [openHour, openMinute] = todaySchedule.open.split(':').map(Number);
    const [closeHour, closeMinute] = todaySchedule.close.split(':').map(Number);
    
    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;
    
    setCurrentDay(dayIndex);
    
    // Determine if business is open, closed, closing soon, or opening soon
    const isOvernight = closeTime < openTime; // e.g., 03:00 (180 min) < 16:00 (960 min)
    
    let isOpen = false;
    
    if (isOvernight) {
      // Business runs overnight (e.g., 16:00 to 03:00 next day, or Sunday: 19:00 to 03:00)
      // Open from opening time to midnight, and from midnight to closing time
      isOpen = (currentTimeMinutes >= openTime && currentTimeMinutes < 24 * 60) || 
               (currentTimeMinutes >= 0 && currentTimeMinutes < closeTime);
    } else {
      // Normal business hours (not used in our schedule, but handle it)
      isOpen = currentTimeMinutes >= openTime && currentTimeMinutes < closeTime;
    }
    
    if (!isOpen) {
      // Business is closed
      // Calculate minutes until opening
      let minutesUntilOpen;
      if (currentTimeMinutes < openTime) {
        minutesUntilOpen = openTime - currentTimeMinutes;
      } else {
        // Already past today's open time, calculate until tomorrow's open time
        minutesUntilOpen = (24 * 60 - currentTimeMinutes) + openTime;
      }
      
      if (minutesUntilOpen <= 60) {
        setStatus({ text: 'Opens soon', variant: 'secondary' });
      } else {
        setStatus({ text: 'Closed', variant: 'outline' });
      }
    } else {
      // Business is open
      // Calculate minutes until closing
      let minutesUntilClose;
      if (isOvernight) {
        if (currentTimeMinutes < closeTime) {
          // Before closing time (e.g., current is 1:00 AM, close is 3:00 AM)
          minutesUntilClose = closeTime - currentTimeMinutes;
        } else if (currentTimeMinutes >= openTime && currentTimeMinutes < 24 * 60) {
          // After opening time but before midnight
          minutesUntilClose = closeTime + (24 * 60 - currentTimeMinutes);
        } else {
          minutesUntilClose = 0;
        }
      } else {
        minutesUntilClose = closeTime - currentTimeMinutes;
      }
      
      if (minutesUntilClose <= 60 && minutesUntilClose > 0) {
        setStatus({ text: 'Closes soon', variant: 'destructive' });
      } else {
        setStatus({ text: 'Open now', variant: 'default' });
      }
    }
  };

  useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();
      const singaporeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }));
      setCurrentTime(singaporeTime);
      calculateStatus();
    };

    updateTimeAndStatus();
    const interval = setInterval(updateTimeAndStatus, 60000); // Update every minute

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    let hourNum = parseInt(hour);
    
    // Convert 24-hour to 12-hour format
    let hour12;
    let ampm;
    
    if (hourNum === 0) {
      hour12 = 12;
      ampm = 'am';
    } else if (hourNum === 12) {
      hour12 = 12;
      ampm = 'pm';
    } else if (hourNum > 12) {
      hour12 = hourNum - 12;
      ampm = 'pm';
    } else {
      hour12 = hourNum;
      ampm = 'am';
    }
    
    return `${hour12}:${minute}${ampm}`;
  };

  return (
    <Card className="glass-effect border-gradient hover-lift">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury flex-shrink-0">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-luxury font-bold">Operating Hours</h3>
            <div className="flex items-center gap-2 mt-2">
              <Badge 
                variant={status.variant} 
                className="flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {status.text}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 text-muted-foreground">
          {schedule.map((day, index) => (
            <div 
              key={day.day}
              className={`flex justify-between items-center p-2 rounded-lg transition-colors ${
                index === currentDay ? 'bg-gradient-luxury/10 border border-luxury-gold/30' : ''
              }`}
            >
              <span className={`font-elegant ${index === currentDay ? 'font-semibold text-white' : ''}`}>
                {day.shortDay}:
              </span>
              <span className={`font-semibold ${index === currentDay ? 'text-gradient-luxury' : 'text-muted-foreground'}`}>
                {formatTime(day.open)} - {formatTime(day.close)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 space-y-3">
          <p className="text-sm text-muted-foreground font-elegant text-center">
            <Clock className="w-4 h-4 inline mr-2" />
            Current time (SGT): {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </p>
          <a href="https://wa.me/6582668669?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20CATWALK%20KTV.%20Please%20let%20me%20know%20about%20availability%20and%20pricing." target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="luxury" className="w-full gap-2 shadow-luxury">
              <Phone className="w-4 h-4" />
              Book Your Room
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default OperatingHours;


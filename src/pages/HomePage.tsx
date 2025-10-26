import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Users, Music, Phone, DollarSign } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';

const HomePage = () => {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-luxury-gold focus:text-luxury-dark focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen" role="main">
      {/* Hero Section */}
      <section aria-label="Hero section with KTV branding" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1920" 
            alt="Catwalk KTV Singapore - Luxury Karaoke Experience with elegant interior" 
            className="w-full h-full object-cover scale-105"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
            sizes="100vw"
            srcSet="https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.1.0&auto=format&fit=crop&w=640&q=75 640w,
                    https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.1.0&auto=format&fit=crop&w=1280&q=75 1280w,
                    https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=75 1920w"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/1920x1080/1a1a2e/ffffff?text=CATWALK+KTV';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <BlurFade delay={0.2} direction="up">
            <h1 className="text-6xl md:text-8xl font-luxury font-bold mb-6 leading-tight">
              <span 
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'url(https://64.media.tumblr.com/fe46498759b6c038b14262441a0a48cb/4d488df637ef986c-7d/s540x810/f211da5f6df8cb5bbbdb85df56032ebdf083d792.gifv)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundSize: 'cover',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                CATWALK
              </span>
              <span className="text-gradient-luxury block mt-3">KTV</span>
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.6} direction="up">
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-elegant leading-relaxed">
              Experience Luxury Entertainment at Singapore's Largest KTV Complex
            </p>
          </BlurFade>
          
          <BlurFade delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+6582808072">
                <Button size="lg" variant="luxury" className="gap-3 text-xl px-10 py-4 animate-pulse-luxury hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                  Book Now
                </Button>
              </a>
              <a href="#about">
                <Button variant="premium" size="lg" className="gap-3 text-xl px-10 py-4 glass-effect hover:scale-105 transition-transform">
                  <Music className="w-5 h-5" />
                  Learn More
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-luxury-gold/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-luxury-rose/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-luxury-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Quick Info Section */}
      <section id="about" className="py-20 bg-gradient-surface" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Why Choose <span className="text-gradient-luxury">Catwalk KTV?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
              Singapore's largest KTV complex with 55 luxurious rooms and premium service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury">
                <Music className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">55</div>
              <div className="text-muted-foreground font-elegant">Luxury Rooms</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">30+</div>
              <div className="text-muted-foreground font-elegant">Professional Hostesses</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">VIP</div>
              <div className="text-muted-foreground font-elegant">Premium Service</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-luxury font-bold text-gradient-luxury mb-3">11h</div>
              <div className="text-muted-foreground font-elegant">Daily Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="gallery-heading" className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Our <span className="text-gradient-luxury">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
              Experience the luxury and elegance of our premium KTV rooms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-luxury hover-lift">
              <img 
                src="https://images.pexels.com/photos/6312354/pexels-photo-6312354.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Luxury KTV Room Interior with modern design and premium entertainment setup"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width={800}
                height={320}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                srcSet="https://images.pexels.com/photos/6312354/pexels-photo-6312354.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                        https://images.pexels.com/photos/6312354/pexels-photo-6312354.jpeg?auto=compress&cs=tinysrgb&w=800 800w"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Luxury+KTV+Room';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-luxury text-2xl font-bold mb-2">VIP Room</h3>
                  <p className="text-gray-200 font-elegant">Luxurious private karaoke experience</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-luxury hover-lift">
              <img 
                src="https://images.pexels.com/photos/760705/pexels-photo-760705.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="KTV Lounge Area with comfortable seating and elegant ambiance"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width={800}
                height={320}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                srcSet="https://images.pexels.com/photos/760705/pexels-photo-760705.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                        https://images.pexels.com/photos/760705/pexels-photo-760705.jpeg?auto=compress&cs=tinysrgb&w=800 800w"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Lounge+Area';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-luxury text-2xl font-bold mb-2">Lounge Area</h3>
                  <p className="text-gray-200 font-elegant">Relax in comfort and style</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-luxury hover-lift">
              <img 
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Premium VIP Suite with luxury decor and high-end amenities"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width={800}
                height={320}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                srcSet="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400 400w,
                        https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800 800w"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x400/1a1a2e/ffffff?text=VIP+Suite';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-luxury text-2xl font-bold mb-2">VIP Suite</h3>
                  <p className="text-gray-200 font-elegant">Ultimate luxury experience</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-luxury hover-lift lg:col-span-2">
              <img 
                src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Catwalk KTV Exterior view at Textile Centre, Jalan Sultan"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width={1200}
                height={320}
                sizes="(max-width: 1024px) 100vw, 66vw"
                srcSet="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600 600w,
                        https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1200x400/1a1a2e/ffffff?text=Our+Venue';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-luxury text-2xl font-bold mb-2">Our Venue</h3>
                  <p className="text-gray-200 font-elegant">Located at Textile Centre, Jalan Sultan</p>
                </div>
              </div>
            </div>

                         <div className="relative group overflow-hidden rounded-2xl shadow-luxury hover-lift">
               <div className="w-full h-80 relative overflow-hidden">
                 <div 
                   className="absolute inset-0 animate-gradient-xy"
                   style={{
                     background: 'linear-gradient(-45deg, hsl(var(--luxury-gold) / 0.3), hsl(var(--luxury-rose) / 0.3), hsl(var(--luxury-purple) / 0.3), hsl(var(--luxury-gold) / 0.3))',
                     backgroundSize: '400% 400%'
                   }}
                 ></div>
                 <div className="relative z-10 h-full flex items-center justify-center">
                   <div className="text-center p-8">
                     <Music className="w-24 h-24 mx-auto mb-6 text-gradient-luxury" />
                     <h3 className="text-2xl font-luxury font-bold mb-4">Book Now</h3>
                     <p className="text-muted-foreground font-elegant mb-6">Experience the difference</p>
                     <a href="tel:+6582808072">
                       <Button variant="luxury" className="gap-2">
                         <Phone className="w-4 h-4" />
                         +65 8280 8072
                       </Button>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Our <span className="text-gradient-luxury">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
              Premium entertainment with exceptional Vietnamese hostesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-effect border-gradient hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury flex-shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-luxury font-bold">Operating Hours</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="font-elegant">Daily:</span>
                    <span className="font-semibold text-gradient-luxury">4PM - 3AM</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 mt-3">
                    <p className="text-sm font-elegant">Happy Hour: 3:30PM - 7PM</p>
                    <p className="text-sm font-elegant">Normal Hours: 7PM - 3AM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gradient hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-luxury font-bold">Hostesses</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="font-elegant">Number:</span>
                    <span className="font-semibold text-gradient-luxury">30 - 35</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-elegant">Age:</span>
                    <span className="font-semibold">20 - 26</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-elegant">Nationality:</span>
                    <span className="font-semibold">Vietnamese</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 mt-3">
                    <p className="text-sm font-elegant">Languages: Vietnamese, English, Chinese</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gradient hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center shadow-luxury flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-luxury font-bold">Pricing</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="font-elegant">Hostess Tip (HH):</span>
                    <span className="font-semibold text-gradient-luxury">S$70</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-elegant">Hostess Tip (NH):</span>
                    <span className="font-semibold text-gradient-luxury">S$100</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 mt-3">
                    <p className="text-sm font-elegant">Small Room: 1 Tower</p>
                    <p className="text-sm font-elegant">Medium Room: 2 Towers/1 Bottle</p>
                    <p className="text-sm font-elegant">Large Room: 4 Towers/2 Bottles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-20 bg-gradient-surface" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Visit <span className="text-gradient-luxury">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
              Located at the heart of Singapore's entertainment district
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-effect border-gradient h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-3xl font-luxury font-bold mb-8 text-gradient-luxury">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center flex-shrink-0 shadow-luxury">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Address</h4>
                      <p className="text-muted-foreground font-elegant">
                        200 Jalan Sultan<br />
                        Textile Centre Level 7<br />
                        Singapore 199018
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center flex-shrink-0 shadow-luxury">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Contact</h4>
                      <p className="text-muted-foreground font-elegant">
                        Phone: <span className="text-gradient-luxury font-semibold">+65 8280 8072</span><br />
                        WhatsApp: <span className="text-gradient-luxury font-semibold">+65 8280 8072</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center flex-shrink-0 shadow-luxury">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Hours</h4>
                      <p className="text-muted-foreground font-elegant">
                        Monday - Sunday<br />
                        <span className="text-gradient-luxury font-semibold">4:00 PM - 3:00 AM</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <a href="tel:+6582808072">
                    <Button size="lg" variant="luxury" className="w-full gap-3 text-lg shadow-luxury">
                      <Phone className="w-5 h-5" />
                      Book Your Room Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gradient overflow-hidden h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="w-full h-full flex-1 min-h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.981179286241!2d103.8589041768311!3d1.3038333617181594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da192893a8daaf%3A0x3513e16c39884197!2sCATWALK%20Restaurant!5e1!3m2!1sen!2s!4v1761460444426!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0, minHeight: '500px'}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CATWALK KTV Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" aria-label="Call to action section">
        <div 
          className="absolute inset-0 blur-3xl animate-gradient-xy-fast"
          style={{
            background: 'linear-gradient(-45deg, hsl(var(--luxury-gold) / 0.3), hsl(var(--luxury-rose) / 0.3), hsl(var(--luxury-purple) / 0.3), hsl(var(--luxury-gold) / 0.3))',
            backgroundSize: '400% 400%'
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <BlurFade delay={0.2} direction="up">
            <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Ready for an <span className="text-gradient-luxury">Unforgettable</span> Experience?
            </h2>
          </BlurFade>
          <BlurFade delay={0.4} direction="up">
            <p className="text-xl text-muted-foreground mb-10 font-elegant leading-relaxed">
              Book your private room today and enjoy Singapore's finest KTV entertainment
            </p>
          </BlurFade>
          <BlurFade delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+6582808072">
                <Button size="lg" variant="luxury" className="gap-3 text-xl px-10 py-4 shadow-luxury">
                  <Phone className="w-5 h-5" />
                  Call to Book: +65 8280 8072
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Floating Call Button */}
      <a 
        href="tel:+6582808072"
        className="fixed bottom-8 left-8 z-50 group"
        aria-label="Call us at +65 8280 8072"
      >
        <div className="relative">
          {/* Ripple effect layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-luxury-purple/40 to-luxury-rose/40 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-luxury-purple/30 to-luxury-rose/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-luxury-purple/60 to-luxury-rose/60 blur-xl animate-pulse-slow"></div>
          <div className="relative w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-luxury">
            <Phone className="w-6 h-6 text-white" />
          </div>
        </div>
      </a>

             {/* Social Links Panel - Right Side */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/6582808072"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative touch-target-large"
          aria-label="Contact us on WhatsApp at +65 8280 8072"
        >
          <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="transition-transform group-hover:scale-110" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.645.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </a>

        {/* Telegram */}
        <a 
          href="https://t.me/+6582808072"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative touch-target-large"
          aria-label="Contact us on Telegram"
        >
          <div className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="transition-transform group-hover:scale-110" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.83 8.618c-.138.579-.492.722-.998.449l-2.755-2.03-1.33 1.277c-.147.147-.27.27-.553.27l.198-2.797 5.11-4.617c.223-.195-.049-.304-.345-.11l-6.304 3.97-2.717-.843c-.591-.194-.607-.59.112-.882l10.557-4.08c.49-.18.916.114.752.734z"/>
            </svg>
          </div>
        </a>

        {/* YouTube */}
        <a 
          href="https://youtube.com/@catwalkktv"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative touch-target-large"
          aria-label="Follow us on YouTube"
        >
          <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="transition-transform group-hover:scale-110" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </a>
      </div>
      </main>
    </>
  );
};

export default HomePage;

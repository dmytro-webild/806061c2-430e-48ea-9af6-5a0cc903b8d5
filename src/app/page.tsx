"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Star, Heart, Sparkles, Check, Images, Users, Wand2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="The Foundry"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Gallery", id: "gallery" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
          ]}
          button={{ text: "Book Now", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="New Braunfels' Most Trusted Hair Salon"
          description="Expert cuts, color, and styling from highly rated stylists. Experience the Foundry difference."
          tag="4.9★ Rating from 1,286+ Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Book Now – Limited Slots", href: "contact" },
            { text: "Call Now", href: "tel:(830) 387-4341" },
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230930.jpg?_wi=1",              imageAlt: "The Foundry Salon Interior"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-cutting-hair-client_23-2147778763.jpg?_wi=1",              imageAlt: "Expert Haircut Services"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-mixing-hair-dye-bowl_23-2149167378.jpg?_wi=1",              imageAlt: "Professional Hair Coloring"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-posing-with-black-background_1122-935.jpg?_wi=1",              imageAlt: "Beautiful Hair Highlights"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-standing-looking-away-isolated-gray-wall_114579-55343.jpg?_wi=1",              imageAlt: "Hair Transformation Results"
            },
          ]}
          className="min-h-screen"
          containerClassName="px-4 md:px-8"
          titleClassName="text-5xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
          buttonClassName="px-6 py-3 rounded-full font-medium"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by New Braunfels"
          description="With over 1,200 five-star reviews, The Foundry Salon is the community's top choice for quality hair services."
          tag="Client Reviews"
          tagIcon={Heart}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              title: "Exceptional Stylist Skills",              quote: "Sarah has been my stylist for 3 years. She listens to what I want and delivers every single time. The quality is unmatched in this area.",              name: "Jennifer Martinez",              role: "Regular Client",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-cheerful-manager-sunny-day_1139-417.jpg",              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",              title: "Welcoming & Relaxing Atmosphere",              quote: "The moment I walk in, I feel welcomed. The free coffee and wine, the friendly staff—it's more than just a salon visit, it's an experience.",              name: "Michael Thompson",              role: "First-Time Visitor",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-confident-young-businesswoman_23-2147943798.jpg",              imageAlt: "Michael Thompson"
            },
            {
              id: "3",              title: "Amazing Color Work",              quote: "I've tried salons all over San Antonio. The Foundry's color specialists are in a league of their own. My highlights look natural and vibrant.",              name: "Ashley Chen",              role: "Color & Highlight Client",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-happy-corporate-woman-suit-stands-street-smiles-poses-near-office-bu_1258-119148.jpg",              imageAlt: "Ashley Chen"
            },
            {
              id: "4",              title: "Found My Stylist",              quote: "I was nervous about switching salons, but the team made me feel at home immediately. Mark cuts my hair perfectly every time.",              name: "Rebecca Williams",              role: "Loyal Client",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-chinese-lady-recording-voice-message_1262-18163.jpg",              imageAlt: "Rebecca Williams"
            },
          ]}
          className="py-20"
          containerClassName="px-4 md:px-8"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/70 mt-4"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBento
          title="Our Services"
          description="Premium hair services designed to enhance your natural beauty and boost your confidence."
          tag="What We Offer"
          tagIcon={Sparkles}
          tagAnimation="opacity"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          carouselMode="buttons"
          features={[
            {
              title: "Haircuts",              description: "Expert cuts tailored to your face shape and style preferences. Men's cuts, women's cuts, and everything in between.",              bentoComponent: "media-stack",              items: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-cutting-hair-client_23-2147778763.jpg?_wi=2",                  imageAlt: "Professional Haircut"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/woman-posing_1303-3780.jpg?_wi=1",                  imageAlt: "Haircut Transformation"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/stylish-blond-bearded-male-dressed-suit-sunglasses_613910-11921.jpg?_wi=1",                  imageAlt: "Men's Haircut"
                },
              ],
            },
            {
              title: "Hair Coloring",              description: "Full color, root touch-ups, and custom color consultations. From subtle tones to bold statements.",              bentoComponent: "media-stack",              items: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/woman-mixing-hair-dye-bowl_23-2149167378.jpg?_wi=2",                  imageAlt: "Hair Coloring Service"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-getting-her-hair-straightened-by-hairdresser-home_23-2148817237.jpg?_wi=1",                  imageAlt: "Color Transformation"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-standing-looking-away-isolated-gray-wall_114579-55343.jpg?_wi=2",                  imageAlt: "Hair Color Results"
                },
              ],
            },
            {
              title: "Highlights & Balayage",              description: "Dimensional, sun-kissed highlights and hand-painted balayage for a naturally beautiful look.",              bentoComponent: "media-stack",              items: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-posing-with-black-background_1122-935.jpg?_wi=2",                  imageAlt: "Hair Highlights"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230943.jpg?_wi=1",                  imageAlt: "Highlight Results"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-standing-looking-away-isolated-gray-wall_114579-55343.jpg?_wi=3",                  imageAlt: "Balayage Highlights"
                },
              ],
            },
            {
              title: "Styling & Treatments",              description: "Blow-outs, special event styling, keratin treatments, and deep conditioning for healthy, beautiful hair.",              bentoComponent: "reveal-icon",              icon: Wand2,
            },
          ]}
          className="py-20"
          containerClassName="px-4 md:px-8"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/70 mt-4"
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <MediaAbout
          title="Why Choose The Foundry?"
          description="We're not just a salon—we're a community of skilled professionals dedicated to making you feel confident and beautiful. With 1,200+ five-star reviews and a reputation for excellence, here's what sets us apart."
          tag="Our Difference"
          tagIcon={Check}
          tagAnimation="opacity"
          imageSrc="http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230930.jpg?_wi=2"
          imageAlt="The Foundry Salon Welcoming Interior"
          buttons={[{ text: "Schedule Now", href: "contact" }]}
          buttonAnimation="opacity"
          useInvertedBackground={true}
          className="py-20"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg text-foreground/70 mt-4"
        />
      </div>

      <div id="highlights" data-section="highlights">
        <MetricCardFourteen
          title="Highly Experienced Stylists | Relaxing Boutique Atmosphere | Complimentary Beverages | 1,200+ Five-Star Reviews"
          tag="The Foundry Promise"
          tagAnimation="opacity"
          metrics={[
            {
              id: "1",              value: "4.9★",              description: "Average rating from 1,286+ verified Google reviews. Our commitment to excellence is proven by our clients."
            },
            {
              id: "2",              value: "15+",              description: "Years of combined expertise from our master stylists, ensuring quality cuts and color every single time."
            },
            {
              id: "3",              value: "100%",              description: "Client satisfaction guarantee. Free consultations and honest recommendations to get the look you want."
            },
            {
              id: "4",              value: "Open Until 8PM",              description: "Evening appointments available. We work around your schedule for your convenience."
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          className="py-20"
          containerClassName="px-4 md:px-8"
          titleClassName="text-4xl md:text-5xl font-bold"
          tagClassName="text-sm font-medium"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardTwo
          title="Gallery of Transformations"
          description="See the quality of our work through real results from real clients."
          tag="Before & After"
          tagIcon={Images}
          tagAnimation="opacity"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          gridVariant="bento-grid"
          carouselMode="buttons"
          products={[
            {
              id: "1",              brand: "Color Transformation",              name: "Brunette to Blonde Highlights",              price: "Starting at $120",              rating: 5,
              reviewCount: "50+",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-standing-looking-away-isolated-gray-wall_114579-55343.jpg?_wi=4",              imageAlt: "Blonde Highlights Transformation"
            },
            {
              id: "2",              brand: "Cut Transformation",              name: "Modern Bob Makeover",              price: "Starting at $65",              rating: 5,
              reviewCount: "45+",              imageSrc: "http://img.b2bpic.net/free-photo/woman-posing_1303-3780.jpg?_wi=2",              imageAlt: "Bob Cut Transformation"
            },
            {
              id: "3",              brand: "Styling",              name: "Textured Waves Styling",              price: "Starting at $45",              rating: 5,
              reviewCount: "38+",              imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230943.jpg?_wi=2",              imageAlt: "Textured Waves Results"
            },
            {
              id: "4",              brand: "Color Correction",              name: "Dark to Light Hair Color",              price: "Starting at $150",              rating: 5,
              reviewCount: "52+",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-getting-her-hair-straightened-by-hairdresser-home_23-2148817237.jpg?_wi=2",              imageAlt: "Hair Color Correction"
            },
            {
              id: "5",              brand: "Men's Cuts",              name: "Professional Fade Cut",              price: "Starting at $35",              rating: 5,
              reviewCount: "48+",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-blond-bearded-male-dressed-suit-sunglasses_613910-11921.jpg?_wi=2",              imageAlt: "Men's Fade Haircut"
            },
          ]}
          className="py-20"
          containerClassName="px-4 md:px-8"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/70 mt-4"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Master Stylists"
          description="Each member of our team brings expertise, passion, and a commitment to making you look and feel your best."
          tag="Our Stylists"
          tagIcon={Users}
          tagAnimation="opacity"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          members={[
            {
              id: "1",              name: "Sarah Martinez",              role: "Master Stylist & Color Specialist",              imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-beautiful-female-barber-uniform-holding-barber-tools-isolated-pink-wall_141793-106141.jpg",              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",              name: "Mark Thompson",              role: "Expert Barber & Men's Cuts",              imageSrc: "http://img.b2bpic.net/free-photo/this-is-so-cute-portrait-attractive-unshaven-young-male-with-muscular-tattoo-body-crossing-arms-his-chest-smiling-being-touched-by-something-expressing-distrust-suspicion-doubt_343059-1710.jpg",              imageAlt: "Mark Thompson"
            },
            {
              id: "3",              name: "Jessica Lopez",              role: "Color Correction Specialist",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-outdoor_624325-50.jpg",              imageAlt: "Jessica Lopez"
            },
          ]}
          className="py-20"
          containerClassName="px-4 md:px-8"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/70 mt-4"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready for Your Best Hair Yet?"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Book Your Appointment Today"
          description="Join hundreds of satisfied clients who trust The Foundry for their hair needs. Call us or book online—we're open until 8 PM."
          buttons={[
            { text: "Book Online", href: "contact" },
            { text: "Call (830) 387-4341", href: "tel:(830) 387-4341" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          className="py-20"
          containerClassName="px-4 md:px-8"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg text-foreground/70 mt-4"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="The Foundry Salon"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}

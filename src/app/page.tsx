import Navigation from '@/components/sections/navigation';
import HeroBanners from '@/components/sections/hero-banners';
import ServicesNav from '@/components/sections/services-nav';
import Announcements from '@/components/sections/announcements';
import FeatureCards from '@/components/sections/feature-cards';
import PartnerLogos from '@/components/sections/partner-logos';
import Footer from '@/components/sections/footer';
import AnnualCalendar from '@/components/sections/annual-calendar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <HeroBanners />
        <ServicesNav />
        <Announcements />
        <FeatureCards />
        <PartnerLogos />
        <AnnualCalendar />
      </main>
      
      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WashTypeSection from "@/components/WashTypeSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import AppSection from "@/components/AppSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <WhyChooseSection />
      <WashTypeSection />
      <PricingSection />
      <LocationsSection />
      <AppSection />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    <MobileStickyNav />
    <ChatbotWidget />
  </>
);

export default Index;

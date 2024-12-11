import About from "./sections/about/About";
import AdvertismentBanner from "./sections/advertismentBanner/AdvertismentBanner";
import Faqs from "./sections/faqs/Faqs";
import GoogleTestimonialSection from "./sections/googleTestimonialSection/GoogleTestimonialSection";
import HeroSection from "./sections/heroSection/HeroSection";
import Pricing from "./sections/pricing/Pricing";
import ServiceDeliveryMethod from "./sections/serviceDeliveryMethod/ServiceDeliveryMethod";
import ServicesSection from "./sections/serviceSection/ServicesSection";
import UspSection from "./sections/uspSection/UspSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UspSection />
      <GoogleTestimonialSection />
      <ServicesSection />
      <ServiceDeliveryMethod />

      <About />
      <Pricing />
      <Faqs />
      <AdvertismentBanner />
    </main>
  );
}

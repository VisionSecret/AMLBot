import HeroSection from "@/components/homepage/HeroSection";
import HomeBanner from "@/components/homepage/HomeBanner";
import Partners from "@/components/homepage/Partners";
import TrustedBy from "@/components/homepage/TrustedBy";
import BlogSection from "@/components/homepage/BlogSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import CertifiedSection from "@/components/homepage/CertifiedSection";
import PricingSection from "@/components/homepage/PricingSection";
import WhyAMLBot from "@/components/homepage/WhyAMLBot";
import TeamSection from "@/components/homepage/TeamSection";
import FaqSection from "@/components/homepage/FAQSection";

export default function HomePage() {
  return (
    <>
      <div className="p-2 min-h-full bg-[#EFEFEF]">
        <HeroSection />
        <TrustedBy />
        <Partners />
        <HomeBanner />
        <BlogSection />
        <ServicesSection />
        <CertifiedSection />
        <PricingSection />
        <WhyAMLBot />
        <TeamSection />
        <FaqSection />
      </div>
    </>
  );
}

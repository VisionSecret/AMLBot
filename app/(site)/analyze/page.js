import React from "react";
import HeroSection from "@/components/analyze/HeroSection";
import DangerSection from "@/components/analyze/DangerSection";
import SuspiciousSection from "@/components/analyze/SuspiciousSection";
import TrustedSection from "@/components/analyze/TrustedSection";

const page = () => {
  return (
    <div className="p-2 min-h-full bg-[#FFFFFF]">
      <HeroSection />
      <DangerSection />
      <SuspiciousSection />
      <TrustedSection />
    </div>
  );
};

export default page;

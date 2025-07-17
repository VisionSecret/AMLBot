import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <section className=" py-20 px-12">
      <div className="max-w-7xl bg-[#0057FF] p-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 items-start rounded-3xl">
        {/* Left Stat */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
            +$100,000,000
          </h1>
          <p className="text-lg md:text-3xl max-w-md font-medium text-[#E4EDFF] leading-snug">
            Amount of risky funds detected
          </p>
        </div>

        {/* Center Logos + Text */}
        <div className="text-left">
          <div className="flex items-center justify-start gap-1 mb-10">
            <div className="relative w-[90px] h-[60px] rounded-lg bg-white">
              <Image
                src="/images/logos/BinanceLogo.png"
                alt="Binance Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="relative w-[90px] h-[60px] rounded-lg bg-white">
              <Image
                src="/images/logos/HuobiLogo.png"
                alt="Huobi Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="relative w-[90px] h-[60px] rounded-lg bg-white">
              <Image
                src="/images/logos/OkXLogo.png"
                alt="OkX Logo"
                fill
                className="object-contain p-1"
              />
            </div>
          </div>
          <p className="text-lg md:text-2xl max-w-xs font-medium text-[#E4EDFF] leading-snug">
            Compliance departments that accept our AML procedures
          </p>
        </div>

        {/* Right Stat */}
        <div className="text-left">
          <h1 className="text-xl md:text-5xl font-bold text-white mb-10">
            60,000+
          </h1>
          <p className="text-lg md:text-3xl font-medium text-[#E4EDFF] leading-snug">
            Service providers verified
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center pt-20 px-10">
      <div className="flex w-full max-w-8xl mx-auto h-full overflow-hidden">
        {/* Left: Content */}
        <div className="w-[55%] flex flex-col justify-center px-12 py-8">
          <h1 className="text-5xl md:text-[85px] font-extrabold text-zinc-950 mb-14">
            What do we analyze?
          </h1>
          <p className="text-lg md:text-2xl tracking-wide leading-8 font-medium text-zinc-800">
            We analyze addresses for belonging to more than 20 sources of risk to
            find suspicious transactions and determine the risk factor. All
            sources are divided into three categories.
          </p>
        </div>
        {/* Right: Image */}
        <div className="w-[45%] flex items-center justify-center">
          <Image
            src="/images/hero/analyzeHero.webp"
            alt="Analysis Hero"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

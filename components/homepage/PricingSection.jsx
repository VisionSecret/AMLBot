"use client";
import Image from "next/image";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="group max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-[20px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer">
        {/* Left Content */}
        <div className="w-full md:w-[60%] px-10 py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            How much for your <br /> assurance?
          </h2>

          <p className="text-3xl font-semibold text-zinc-900 mb-6">From</p>

          <div className="flex items-end mb-12">
            <span className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text mr-2">
              $0.2
            </span>
            <span className="text-3xl text-zinc-800">/ per check</span>
          </div>

          <Link
            href="/contact"
            className="text-black text-2xl font-semibold group-hover:rounded-full group-hover:px-7 group-hover:py-2.5 group-hover:text-white group-hover:bg-blue-700 transition-all duration-700"
          >
            Contact us →
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[40%] h-fit relative flex items-end justify-end">
          <Image
            src="/images/pricingSection.webp"
            alt="Pricing Visual"
            width={380}
            height={400}
            className="object-contain transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
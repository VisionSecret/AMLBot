import React from "react";
import Image from "next/image";

const logos = [
  "/images/logos/partner1.webp",
  "/images/logos/partner2.webp",
  "/images/logos/partner3.webp",
  "/images/logos/partner4.webp",
  "/images/logos/partner5.webp",
  "/images/logos/partner6.webp",
  "/images/logos/partner7.webp",
  "/images/logos/partner8.webp",
  "/images/logos/partner9.webp",
  "/images/logos/partner10.webp",
  "/images/logos/partner11.webp",
];

const Partners = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center tracking-tighter text-zinc-900">
          Our 300+ Clients & Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll whitespace-nowrap">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-[#FFFFFF] px-8 py-4 rounded-lg min-w-56 h-24 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  width={180} // logo rendered size
                  height={80}
                  className="object-contain max-h-20" // never exceeds box height
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

import React from "react";
import Image from "next/image";

const companies = [
  { src: "/images/logos/company1.png", alt: "Trusted by Company 1" },
  { src: "/images/logos/company2.png", alt: "Trusted by Company 2" },
  { src: "/images/logos/company3.png", alt: "Trusted by Company 3" },
  { src: "/images/logos/company4.png", alt: "Trusted by Company 4" },
  { src: "/images/logos/company5.png", alt: "Trusted by Company 5" },
  { src: "/images/logos/company6.png", alt: "Trusted by Company 6" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <hr className="border-gray-300 mb-14" />

      <div className="flex flex-wrap items-center justify-center gap-10">
        <h2 className="text-xl sm:text-2xl text-[#637381] whitespace-nowrap">
          Trusted by
        </h2>

        {companies.map((company, index) => (
          <div key={index} className="relative w-[120px] h-[58px]">
            <Image
              src={company.src}
              alt={company.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100px, 120px"
            />
          </div>
        ))}
      </div>

      <hr className="border-gray-300 mt-14" />
    </section>
  );
};

export default TrustedBy;

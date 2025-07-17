import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const services = [
  {
    title: "AML/KYT screening",
    description:
      "API solutions that empower AML compliance tools within your current system. All transactions are automatically verified to comply with AML and FATF requirements and reduce your business risk exposure.",
    image: "/images/icons/serviceIcon1.webp",
    link: "/services/aml-kyt-screening",
    isActive: true,
  },
  {
    title: "KYC for business",
    description:
      "The streamlined and automated verification process empowers your business to swiftly onboard customers, reducing manual effort and mitigating identity fraud and illicit activity risks.",
    image: "/images/icons/serviceIcon2.webp",
    link: "/services/kyc-for-business",
    isActive: false,
  },
  {
    title: "AML/KYC procedures",
    description:
      "Launch your crypto venture with ease, simplicity, and confidence through our streamlined AML and KYC consulting, ensuring smooth compliance and effective risk management right from the beginning. Learn more",
    image: "/images/icons/serviceIcon3.webp",
    link: "/services/aml-kyc-procedures",
    isActive: false,
  },
  {
    title: "Corporate accounts at CEX/EMI",
    description:
      "Streamline corporate account opening on CEX EMI with our expert assistance, ensuring your focus remains on business growth in the crypto industry.",
    image: "/images/icons/serviceIcon4.webp",
    link: "/services/corporate-accounts",
    isActive: false,
  },
  {
    title: "Blockchain investigations",
    description:
      "Recover stolen cryptocurrencies with AMLBot's expert blockchain investigations, swiftly identifying culprits and tracing funds for effective recovery.",
    image: "/images/icons/serviceIcon3.webp",
    link: "/services/blockchain-investigations",
    isActive: false,
  },
];

const ServicesSection = () => {
  return (
    <div className="p-6 md:p-16 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-5">
          AMLBot's services
        </h2>
        <p className="text-xl md:text-2xl font-medium tracking-tight">
          We provide full pack of options for safe work with crypto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 group flex flex-col justify-between ${
              service.isActive ? "bg-[#323D46]" : "bg-[#FFFFFF]"
            }`}
          >
            <div>
              <div className="w-16 h-16 mb-2 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3
                className={`${
                  service.isActive ? "text-[#FFFFFF]" : "text-[#010101]"
                } text-xl font-bold mb-3`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm mb-3 ${
                  service.isActive ? "text-[#FFFFFF]" : "text-[#323D46]"
                }`}
              >
                {service.description}
              </p>
            </div>
            <Button
              link={service.link}
              type="button"
              children="Learn more"
              icon={
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              }
              className={`group font-bold group-hover:px-4 py-2 flex items-center w-fit rounded-full group-hover:bg-[#0057FF] group-hover:text-white ${
                  service.isActive ? "text-[#FFFFFF]" : "text-[#0057FF]"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

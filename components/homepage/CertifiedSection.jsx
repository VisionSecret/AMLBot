import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const CertifiedSection = () => {
  return (
    <section className="h-full py-24 px-24">
      <div className=" max-w-7xl h-fit bg-[#FFFFFF] mx-auto flex flex-col md:flex-row items-center gap-10 rounded-3xl p-12">
        {/* Left Image */}
        <div className="w-full md:w-1/4 flex justify-center">
          <div className="relative w-52 h-52">
            <Image
              src="/images/CertifiedSection.webp"
              alt="Certified Badge"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-3/4 flex flex-col justify-center text-center md:text-left sm:ml-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">
            ISO certified
          </h2>
          <p className="text-xl font-semibold text-zinc-800 mb-6">
            We continually improve our security measures to uphold trust and
            safety. Learn more about our certifications
          </p>
          <Button
            link={"/certifications"}
            type="button"
            children="Learn more"
            icon={
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
            }
            className="group font-bold hover:px-6 py-2.5 flex items-center w-fit rounded-full hover:bg-[#0057FF] hover:text-white text-[#0057FF]"
          />
        </div>
      </div>
    </section>
  );
}; 

export default CertifiedSection;

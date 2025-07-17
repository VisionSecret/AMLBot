import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-heroSection min-h-screen w-full rounded-[40px] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-28">
        {/* Left Content */}
        <div className="w-[60%] space-x-12">
          <button className="ml-10 bg-transparent border border-[#7D9FEB] text-[#7D9FEB] text-lg px-5 py-0.5 rounded-full mb-6">
            Big Update
          </button>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#FFFFFF] to-[#cbdcff] text-transparent bg-clip-text mb-8">
            Three New Plans <br className="hidden sm:block" /> for the Perfect
            Fit
          </h1>

          <div className="space-y-6">
            <div className="flex flex-wrap items-start gap-x-6">
              <span className="bg-[#008D5E] px-4 py-1 rounded-md text-lg font-black text-white">
                LITE
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white max-w-lg">
                Simple checks for basic needs
              </p>
            </div>

            <div className="flex flex-wrap items-start gap-x-6">
              <span className="bg-[#01359D] px-4 py-1 rounded-md text-lg font-black text-white">
                PRO
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white max-w-lg">
                Advanced checks with medium-level detail
              </p>
            </div>

            <div className="flex flex-wrap items-start gap-x-6">
              <span className="bg-[#141822] px-3 py-1 rounded-md text-lg font-black text-white">
                PRO+
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white max-w-lg">
                Full investigation tools, exact risk scores, and all blockchain
                signals unlocked
              </p>
            </div>
          </div>

          {/* Button Component */}
          <div className="mt-20">
            <Button
              link="/request-demo-home"
              type="button"
              children={"Request a demo"}
              className="text-2xl bg-[#0057FF] hover:bg-[#0057dd] font-semibold text-white px-10 py-4 rounded-full"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[40%] h-fit mt-20">
          <Image
            src="/images/heroSection.png"
            alt="AML Dashboard"
            width={700}
            height={600}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WhyAMLBot = () => {
  return (
    <section className="w-full min-h-screen py-20 px-4">
      <div className="flex items-center justify-center flex-col gap-3 text-center mb-28">
        <h2 className="text-lg md:text-[28px] tracking-tight text-zinc-900">
          Per our data,{" "}
          <span className="text-black font-bold">
            one in four wallets is suspicious.
          </span>
        </h2>
        <h2 className="text-lg md:text-[28px] tracking-tight text-zinc-900">
          Spending a few dollars on a check may save you a large sum.
        </h2>
      </div>

      <h2 className="text-6xl font-bold tracking-tighter my-10 ml-10">
        Why AMLBot?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 p-8">
        {/* First row: full width container */}
        <div className="row-span-1 col-span-2 bg-[#FFFFFF] flex items-stretch justify-between rounded-3xl p-12 h-[400px]">
          {/* Left Image */}
          <div className="w-full md:w-1/4 flex justify-center items-center">
            <div className="relative w-72 h-72">
              <Image
                src="/images/whySection1.webp"
                alt="Why AML Badge"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-3/4 flex flex-col justify-center gap-5 px-10">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4 text-zinc-900">
              Personalized Approach
            </h2>

            <ul className="mb-6 list-disc pl-5 text-2xl text-zinc-800 space-y-4">
              <li>
                AMLBot offers a wide range of compliance solutions customized
                for each client.
              </li>
              <li>
                We're confident in meeting your demands{" "}
                <span className="text-black font-bold">
                  {" "}
                  after helping 300+ crypto enterprise
                </span>
                s of all sizes in 25 jurisdictions.
              </li>
            </ul>

            <Button
              link={"/certifications"}
              type="button"
              children="Let's discuss"
              className="font-bold px-10 py-4 text-xl w-fit rounded-full bg-[#0057FF] hover:bg-[#417aeb] text-white"
            />
          </div>
        </div>

        {/* Second row: two half-width containers */}
        <div className="col-span-2 flex gap-6">
          <div className="bg-[#323D46] w-[60%] p-10 flex flex-col items-center gap-1 rounded-2xl">
            {/* Top Image */}
            <div className="w-full flex mb-1">
              <Image
                src="/images/whySection2.webp"
                alt="Feature Illustration"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            {/* Content (Heading + Paragraphs) */}
            <div className="text-white flex flex-col gap-10">
              <h3 className="text-4xl tracking-tighter font-bold">
                Integrated Compliance Platform
              </h3>
              <ul className="text-[#eeeeee] list-disc pl-5 font-medium text-2xl space-y-6">
                <li>
                  We offer KYT/Wallet Screening, KYC, AML, and more for crypto
                  businesses.
                </li>
                <li>
                  AMLBot' risk scoring is based on multiple data sources,
                  ensuring that we have the most reliable data in the industry.
                </li>
                <li>
                  Our user-friendly services and solutions streamline your
                  company processes, removing compliance provider complexity.
                </li>
              </ul>
            </div>
          </div>

          <div className="group bg-[#FFFFFF] w-[40%] p-10 flex flex-col items-center gap-1 rounded-2xl">
            {/* Top Image */}
            <div className="w-full flex mb-1">
              <Image
                src="/images/whySection3.webp"
                alt="Customer Support"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            {/* Content (Heading + Paragraphs) */}
            <div className="flex flex-col items-start gap-10">
              <h3 className="text-4xl tracking-tighter font-bold">
                Customer Support
              </h3>
              <p className="text-zinc-700 text-2xl tracking-tight leading-9 font-medium">
                AMLBot understands the significance of fast, friendly customer
                support, thus we're always here for our clients. 24/7 support.
              </p>
              <p className="text-lg tracking-tighter font-medium text-gray-500">
                An answer during the night may take a bit longer
              </p>
              <Button
                link={"/contact"}
                type="button"
                children="Contact"
                icon={
                  <ArrowRight className="inline-block" />
                }
                className="font-bold group-hover:px-10 py-2 text-xl w-fit group-hover:rounded-full text-[#0057FF] group-hover:bg-[#0057FF] group-hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAMLBot;

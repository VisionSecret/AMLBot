import React from "react";

const suspiciousData = [
  {
    title: "ATM",
    description: "Coins obtained via cryptocurrency ATM operator.",
  },
  {
    title: "Exchange | High Risk",
    description:
      "An entity becomes high-risk based on the following criteria: No KYC: does not require any customer information before allowing any level of deposit/withdrawal, or makes no attempt to verify that information.",
  },
  {
    title: "Liquidity Pools",
    description:
      "The smart contracts where tokens are locked for the purpose of providing liquidity.",
  },
  {
    title: "P2P Exchange | High Risk",
    description:
      "The entity does not have any special license to conduct and provide cryptocurrency exchange services, when participants exchange directly with each other, without intermediaries.",
  },
  {
    title: "Illegal Service",
    description: "Coins associated with illegal activities.",
  },
  {
    title: "Unnamed Service",
    description:
      "The category refers to currently unidentified clusters that exhibit the behavior expected of a service, by a large number of addresses and transactions.",
  },
  { title: "Scam", description: "Coins that were obtained by deception." },
  {
    title: "Stolen Coins",
    description: "Coins obtained by stealing someone else's cryptocurrency.",
  },
  {
    title: "Terrorism Financing",
    description: "Entities associated with terrorism financing.",
  },
];

const SuspiciousSection = () => {
  return (
    <section className="w-full min-h-screen p-20">
      <div className="max-w-7xl mx-auto flex gap-8 items-start">
        <div className="w-[65%]">
          <h2 className="text-6xl font-bold tracking-tighter mb-14 text-black">
            Suspicious sources
          </h2>
          <ul className="space-y-8">
            {suspiciousData.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 rounded-full bg-yellow-600 mr-3 inline-block" />
                  <span className="text-3xl tracking-tighter font-semibold text-zinc-950">
                    {item.title}
                  </span>
                </div>
                <span className="text-[25px] font-medium tracking-tighter text-gray-900 ml-6">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky top-16 pt-10 z-30">
          <div className="bg-[#fff3cd] rounded-2xl p-8 shadow-lg w-full max-w-sm">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-5">⚠️</span>
              <span className="text-3xl font-medium">Caution Advised!</span>
            </div>
            <p className="text-xl tracking-tighter font-medium text-zinc-900 pl-12 mb-4">
              The presence of{" "}
              <span className="text-zinc-950 font-bold">
                Suspicious Activity
              </span>{" "}
              is a cause for concern.
            </p>
            <p className="text-xl tracking-tighter font-medium text-zinc-900 pl-12">
              We recommend conducting further analysis to mitigate potential
              risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuspiciousSection;

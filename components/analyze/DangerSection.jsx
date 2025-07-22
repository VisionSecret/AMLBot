import React from "react";

const dangerData = [
  {
    title: "Child Exploitation",
    description: "Entities associated with child exploitation.",
  },
  {
    title: "Dark Market",
    description: "Coins associated with illegal activities.",
  },
  {
    title: "Dark Service",
    description:
      "Coins related to child abuse, terrorist financing or drug trafficking.",
  },
  {
    title: "Enforcement action",
    description:
      "The entity is subject to legal proceedings with the judicial authorities.",
  },
  {
    title: "Fraudulent Exchange",
    description:
      "Exchanges involved in exit scams, illegal behavior, or whose funds have been confiscated by government authorities.",
  },
  {
    title: "Gambling",
    description: "Coins associated with unlicensed online games",
  },
  {
    title: "Illegal Service",
    description: "Coins associated with illegal activities.",
  },
  {
    title: "Mixer",
    description:
      "Coins that passed via a mixer to make tracking difficult or impossible. Mixers are mainly used for money laundering.",
  },
  { title: "Ransom", description: "Coins obtained by extortion or blackmail." },
  { title: "Sanctions", description: "Entities subject to sanctions." },
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

const DangerSection = () => {
  return (
    <section className="relative w-full p-20">
      <div className="max-w-7xl mx-auto flex gap-8 items-start">
        {/* Left Column: Scrollable List */}
        <div className="w-[65%]">
          <h2 className="text-6xl font-bold tracking-tighter mb-14 text-black">
            Danger
          </h2>
          <ul className="space-y-8">
            {dangerData.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-600 mr-3 inline-block" />
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

        {/* Right Column: Sticky Box */}
        <div className="sticky top-16 pt-10 z-30">
          <div className="bg-[#eafffa] rounded-2xl p-8 shadow-lg w-full max-w-sm">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-5">☝</span>
              <span className="text-3xl font-medium">Be Careful!</span>
            </div>
            <p className="text-xl tracking-tighter font-medium text-zinc-900 pl-12 mb-4">
              The presence of{" "}
              <span className="text-zinc-950 font-bold">Dark Market</span>,{" "}
              <span className="text-zinc-950 font-bold">Dark Service</span>,{" "}
              <span className="text-zinc-950 font-bold">Illegal Service</span>{" "}
              is a bad sign.
            </p>
            <p className="text-xl tracking-tighter font-medium text-zinc-900 pl-12">
              We recommend conducting additional investigations not to lose your
              funds due to blocking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DangerSection;

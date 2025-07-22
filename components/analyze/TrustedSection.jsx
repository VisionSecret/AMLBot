import React from "react";

const trustedData = [
  {
    title: "Exchange",
    description:
      "Organizations that allow users to buy, sell, and trade cryptocurrencies with proper trading licenses. They provide services like depository, brokerage, or other centralized exchange services. Excludes non-specific licenses and jurisdictions on the FATF non-cooperative list. Exchanges represent the most important category in the crypto industry, accounting for 90% of funds moved.",
  },
  {
    title: "ICO",
    description:
      "Organizations that raise capital by selling newly minted cryptocurrency to investors in exchange for fiat or common cryptocurrencies like Bitcoin or Ether. While many are legitimate, some have been used by bad actors to scam investors.",
  },
  {
    title: "Marketplace",
    description:
      "Coins used for legal activities on various online marketplaces.",
  },
  {
    title: "Merchant Services",
    description:
      "Entities that enable businesses to accept customer payments, often converting crypto to fiat and transferring it to bank accounts. Also known as payment processors or gateways.",
  },
  {
    title: "Miner",
    description:
      "Coins that have been mined and are not yet forwarded or spent.",
  },
  {
    title: "Other",
    description:
      "Coins obtained through means such as airdrops, token sales, or miscellaneous sources.",
  },
  {
    title: "P2P Exchange",
    description:
      "Licensed platforms enabling users to exchange crypto directly with each other without intermediaries. Excludes non-specific licenses and jurisdictions listed by FATF as non-cooperative.",
  },
  {
    title: "Payment Management",
    description:
      "Coins associated with services that facilitate crypto payment processing.",
  },
  {
    title: "Seized Assets",
    description:
      "Cryptocurrency assets that have been seized by government authorities.",
  },
  {
    title: "Wallet",
    description:
      "Services for storing and transacting cryptocurrencies. Hosted wallets (custodial) hold users’ private keys, posing potential risks but possibly offering better security than self-custody by non-experts.",
  },
];

const TrustedSection = () => {
  return (
    <section className="w-full min-h-screen p-20">
      <div className="max-w-7xl mx-auto flex gap-8 items-start">
        <div className="w-[65%]">
          <h2 className="text-6xl font-bold tracking-tighter mb-14 text-black">
            Trusted sources
          </h2>
          <ul className="space-y-8">
            {trustedData.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#38D482] mr-3 inline-block" />
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
          <div className="bg-[#f0fef8] border-l-8 border-[#38D482] rounded-2xl p-8 shadow-lg w-full max-w-sm">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-5 text-[#38D482]">✅</span>
              <span className="text-3xl font-medium text-zinc-950">
                Verified Source
              </span>
            </div>
            <p className="text-xl tracking-tighter font-medium text-zinc-800 pl-12 mb-4">
              This address is linked to a{" "}
              <span className="text-zinc-950 font-bold">
                trusted and regulated entity
              </span>{" "}
              such as a licensed exchange or gateway.
            </p>
            <p className="text-xl tracking-tighter font-medium text-zinc-800 pl-12">
              You're likely in safe territory, but always stay informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;

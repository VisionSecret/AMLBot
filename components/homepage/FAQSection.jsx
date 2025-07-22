"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does the AMLBot check show?",
    answer: `The basic AMLBot check result includes risk score percentage, sources of risk, and belonging to the blacklist.

In addition, the check result may include various optional information about the address, such as belonging to the cluster, actual balance, and transferred funds amount.

The check result may be incomplete in relation to the described data if the necessary information is missing.

Please note that for blockchains that are in the limited mode, clustering and percentage value of the check risk score are not available. A risk score can be provided for a counterparty only if it relates to an entity.`,
  },
  {
    question: "What does the percentage risk score mean?",
    answer:
      "The overall risk score (percentage) is the probability that the address is associated with illegal activity.\n\nAMLBot finds connections of a checked address to other addresses on the blockchain and with entities of different categories, each with a different conditional risk score, and calculates the overall risk score based on those connections.\n\nThe overall risk score calculation takes into account the risk severity of connections found. For example, in the case of connections to entity categories Mining (0% risk) and Darknet (100% risk), the risk impact of Darknet, as a more risky category, will be higher, and Mining will have less weight in the risk assessment.",
  },
  {
    question: "What do the sources of risk mean?",
    answer:
      "AMLBot checks the specified wallet address for connections to known blockchain services - entities. AMLBot conventionally groups these services into groups with different risk levels of illegal activity - entity categories.\n\nThe AML check shows the connections of the checked address to these entity categories as the sources of risk, with which the address interacted, and the percentage of funds transferred from/to these services.\n\nBased on all the sources of risk, an overall risk score is calculated, which helps the user to make further decisions about the assets.",
  },
  {
    question:
      "What is the difference between an address and a transaction check?",
    answer:
      "An address check is an analysis of all its connections to other addresses and entities on blockchains, considering incoming and outgoing funds movement.\n\nA transaction check process differs from the address check, and the result depends on your side in the transaction. The overall risk score always relates to the counterparty.\n\nTo check a transaction you need to specify the TxID and the destination address of the transaction and select your side in the transaction:\n- Recipient (you got a deposit to your wallet) - the addresses from which the funds were received are checked. The sources of risk describe the services from which the TX senders accumulated the transferred funds with a percentage breakdown.\n- Sender (you made a withdrawal from your wallet) - the wallet that received the funds is checked. The sources of risk describe all connections of the recipient address with a percentage breakdown.\n\nThus, when checking a transaction, the risks for the recipient are checked if you receive funds, and the risks for the sender if you send funds.",
  },
  {
    question: "How do I understand risk assessment?",
    answer:
      "Each client determines for himself what percentage of risk is acceptable for him. Conventionally, the risk score can be divided as follows:\n- 0-25% is a clean wallet/transaction;\n- 25-75% is the average level of risk;\n- 75%+ such a wallet/transaction is considered risky.\nIt is also worth paying attention to the red sources of risk in the detailed analysis, described in page",
  },
  {
    question: "What cryptocurrencies does AMLBot analyze?",
    answer:
      "AMLBot supports all major blockchains and tokens on them. We are constantly adding support for additional cryptocurrencies. You can always check the up-to-date list of supported cryptocurrencies in web dashboard or in API Documentation .",
  },
  {
    question: "How does AMLBot help to protect you against blocking?",
    answer:
      "By checking counterparties' wallets before a transaction, you can reject their assets if the risk score is high. Also, before transferring funds to other services, you can check your wallet address and save the result (make a screenshot).\n\nIf the check shows that your assets had no connection with illegal activity and the service blocked you, you can provide the saved result to confirm the purity of your assets.",
  },
  {
    question:
      "The risk is higher than 50%, but I am certain that the address is reliable. What to do?",
    answer:
      "The check results are based on the international databases, which are constantly updated. So an address that had 0% risk yesterday may have received or given the asset to a risky counterparty today. In this case, the risk score will change. If you want to be sure of the result and determine what the cause of the high risk is, we can do a detailed check for you. To do it, email us at info@amlbot.com",
  },
  {
    question: "How often are checks recommended to do?",
    answer:
      "An answer to this question depends on your unique risk model. The general recommendation would be to perform an AML check every time you interact with an unknown wallet or a smart contract.",
  },
  {
    question: "How quickly is the balance replenished?",
    answer:
      "After transaction confirmation, the balance is replenished:\n• up to 10 minutes if the payment was made within 24 hours after the invoice was issued,\n• up to 25 minutes if the payment was made after 24 hours after the invoice issuance. Overall, BTC, ETH, USDT, and fiat are processed faster than other cryptocurrencies.",
  },
  {
    question: "What happens if I don't use all my checks each month?",
    answer:
      "If you purchased checks without expiration date - they remain in your account, and you can use them at any time.\n\nIf you purchased checks with a time limit - they will be deducted from your account after expiration date.",
  },
  {
    question: "What if I will need more checks?",
    answer:
      "You can buy additional checks as needed. The number of checks is always displayed within your user information.",
  },
  {
    question: "How does AMLBot ensure data protection?",
    answer:
      "AMLBot safeguards data by adhering to rigorous standards, as validated by our ISO 9001 and ISO 27001 certifications.\n\nOur ISO 9001 certification highlights our commitment to delivering consistent quality and enhancing customer satisfaction. More crucially, our ISO 27001 certification demonstrates our dedication to maintaining high standards of information security, ensuring the protection of sensitive data, and achieving regulatory compliance.\n\nLearn more about our certifications here.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faqs" className="py-24 px-4 md:px-16">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-zinc-900">FAQs</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Box */}
        <div className="md:col-span-1 sticky top-32 self-start bg-[#DFF1FB] rounded-3xl p-8">
          <h2 className="text-3xl font-semibold text-zinc-700 mb-5">
            Is your question not on the list?
          </h2>
          <p className="text-lg font-medium text-zinc-600 mb-4">
            Contact us via messenger. We are in touch
            <span className="font-bold text-zinc-700 text-xl"> 24/7</span>, so
            any issue can be resolved quickly and in a live chat format.
          </p>
          <div className="bg-white rounded-2xl px-5 py-3 flex items-center gap-3 w-fit">
            <div className="w-8 h-8 rounded-full bg-[#34AADF] flex items-center justify-center text-lg">
              💬
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-[#34AADF]">
                We're in messenger
              </p>
              <p className="text-xs text-[#9EC3D4]">
                We'll answer within the 30 seconds.
              </p>
            </div>
          </div>
          <p className="text-sm tracking-tighter text-[#5b8491] mt-3">
            It may take a little longer to respond during the night.
          </p>
        </div>

        {/* Right FAQ List */}
        <div className="md:col-span-2 flex flex-col divide-y divide-zinc-800">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="py-8 px-4 md:px-6 cursor-pointer transition-all duration-1000"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between">
                <p className="text-lg md:text-2xl font-semibold text-zinc-900">
                  {faq.question}
                </p>
                {openIndex === i ? (
                  <Minus className="w-10 h-10 font-bold text-zinc-800" />
                ) : (
                  <Plus className="w-10 h-10 font-bold text-zinc-800" />
                )}
              </div>
              {openIndex === i && (
                <p className="mt-4 text-2xl font-medium text-[#647482] tracking-tight">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

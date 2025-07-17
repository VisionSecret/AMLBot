import {
  Linkedin,
  Youtube,
  X,
  SendHorizontal,
  MessageCircle,
  PenLine, // ✅ Replacing Medium with PenLine
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 px-4 sm:px-8 md:px-20 pb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Logo + Address */}
        <div className="mb-10 md:mb-0">
          <div className="flex items-center mb-10">
              <Link href={"/"}
              className="flex items-center gap-3"
              >
              <Image
              src="/images/logos/AMLBot.webp"
              alt="AMLBot Logo"
              width={50}
              height={50}
              />
              <h1 className="text-4xl font-extrabold">AMLBot</h1>
             </Link>
          </div>
          <div className="text-gray-300">
            <div className="text-lg font-semibold mb-2">SAFELEMENT LIMITED,</div>
            <div className="text-sm font-medium">OFFICE 1111, SUITE 1102, LEE GARDEN ONE,</div>
            <div className="text-sm font-medium">33 HYSAN AVENUE, CAUSEWAY BAY, HONG KONG</div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* For Business */}
          <div>
            <h4 className="uppercase text-sm font-semibold mb-3 text-gray-400">
              For Business
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Transaction Monitoring</li>
              <li>KYT</li>
              <li>KYC/KYB</li>
              <li>
                AMLBot{" "}
                <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded ml-1">
                  Tracer
                </span>
              </li>
              <li>AML Training</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* For Personal Use */}
          <div>
            <h4 className="uppercase text-sm font-semibold mb-3 text-gray-400">
              For Personal Use
            </h4>
            <ul className="space-y-2 text-sm">
              <li>AML Chat Bot</li>
              <li>Investigation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase text-sm font-semibold mb-3 text-gray-400">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Analysis</li>
              <li>Certifications</li>
              <li>Blog</li>
              <li>Press kit</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="uppercase text-sm font-semibold mb-3 text-gray-400">
              Social Networks
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} /> Telegram
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <X size={16} /> X
              </li>
              <li className="flex items-center gap-2">
                <Youtube size={16} /> YouTube
              </li>
              <li className="flex items-center gap-2">
                <PenLine size={16} /> Medium
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400">
        <div className="mb-4 md:mb-0">&copy; 2025 AMLBot</div>
        <div className="flex items-center gap-4">
          <button className="flex items-center bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full">
            <SendHorizontal size={14} className="mr-2" />
            Support
          </button>
          <span className="hover:underline cursor-pointer">User Agreement</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

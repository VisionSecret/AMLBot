"use client";

import React, { useState, useRef } from "react";
import Button from "./ui/Button";
import {
  ShieldCheck,
  UserCheck,
  SearchCheck,
  BookOpenCheck,
  Briefcase,
  FileText,
  MessageCircleQuestion,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutTimeoutRef = useRef(null);
  const [language, setLanguage] = useState("EN");
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between bg-white/90 backdrop-blur-lg text-black shadow-xl">
      <div className="relative flex justify-between items-center w-full py-5 px-6 md:px-20">
        {/* LEFT - Logo */}
        <Link
          href={"/"}
          className="flex items-center gap-1 text-3xl font-black px-4"
        >
          <Image
            src="/images/logos/AMLBot.webp"
            alt="AMLBot Logo"
            width={40}
            height={40}
          />
          <h1>AMLBot</h1>
        </Link>

        {/* CENTER - Links */}
        <div className="flex items-center space-x-6">
          {/* PRODUCTS */}
          <div onClick={() => setIsProductsOpen((prev) => !prev)}>
            <button className="flex items-center space-x-1 text-lg font-medium text-zinc-800 p-1 rounded-lg hover:bg-[#ffffff67] hover:text-black">
              <span>Products</span>
              <ChevronDown size={20} />
            </button>

            {isProductsOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-[85%] bg-[#F5F6FA] text-black rounded-xl shadow-2xl z-20 px-8 py-6 transition-all duration-700 ease-in grid grid-cols-3 gap-10">
                {/* Left Section - 2 Columns */}
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  {/* Column 1 */}
                  <div className="space-x-5">
                    <h4 className="text-xs font-semibold text-gray-500 ml-6 mb-4">
                      FOR BUSINESS
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Transaction Monitoring",
                          desc: "A comprehensive solution for the automatic monitoring of cryptocurrency transactions and wallets, featuring continuous risk monitoring capabilities.",
                          icon: (
                            <ShieldCheck
                              size={26}
                              className="mr-2 text-blue-600"
                            />
                          ),
                          link: "#",
                        },
                        {
                          title: "KYC/KYB",
                          desc: "Verify more users with a fast, secure, automated and efficient verification.",
                          icon: (
                            <UserCheck
                              size={26}
                              className="mr-2 text-blue-600"
                            />
                          ),
                          link: "#",
                        },
                        {
                          title: "AMLBot",
                          desc: "Trace the source and destinations of transactions.",
                          tag: "Tracer",
                          icon: (
                            <SearchCheck
                              size={26}
                              className="mr-2 text-blue-600"
                            />
                          ),
                          link: "#",
                        },
                      ].map((item, idx) => (
                        <Link
                          href={item.link}
                          key={idx}
                          className="group block transition-all duration-300"
                        >
                          <p className="font-semibold text-[17px] flex items-center text-black group-hover:text-blue-600">
                            {item.icon}
                            {item.title}
                            {item.tag && (
                              <span className="text-xs bg-blue-100 text-blue-600 rounded px-2 py-0.5 ml-2">
                                {item.tag}
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-gray-600 mt-1 w-[280px] min-h-[60px]">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="pt-10 space-y-3">
                    {[
                      {
                        title: "AML Training",
                        desc: "Specialized training programs for the cryptocurrency industry.",
                        icon: (
                          <BookOpenCheck
                            size={26}
                            className="mr-2 text-blue-600"
                          />
                        ),
                        link: "#",
                      },
                      {
                        title: "Consulting",
                        desc: "Helping crypto businesses with AML procedures, training, and bank account setup.",
                        icon: (
                          <Briefcase size={26} className="mr-2 text-blue-600" />
                        ),
                        link: "#",
                      },
                    ].map((item, idx) => (
                      <Link
                        href={item.link}
                        key={idx}
                        className="group block transition-all duration-300"
                      >
                        <p className="font-semibold text-[17px] flex items-center text-black group-hover:text-blue-600">
                          {item.icon}
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1 w-[280px] min-h-[60px]">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Section */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 mb-4">
                    FOR PERSONAL USE
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Investigation",
                        desc: "Assistance with the recovery of stolen crypto.",
                        icon: (
                          <FileText size={26} className="mr-2 text-blue-600" />
                        ),
                        link: "#",
                      },
                      {
                        title: "AML Chat Bot",
                        desc: "Instant AML checks, the easiest way to try our products.",
                        icon: (
                          <MessageCircleQuestion
                            size={26}
                            className="mr-2 text-blue-600"
                          />
                        ),
                        link: "#",
                      },
                    ].map((item, idx) => (
                      <Link
                        href={item.link}
                        key={idx}
                        className="group block transition-all duration-300"
                      >
                        <p className="font-semibold text-[17px] flex items-center text-black group-hover:text-blue-600">
                          {item.icon}
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1 w-[280px] min-h-[60px]">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#pricing"
            className="text-lg font-medium text-zinc-800 py-0.5 px-1.5 rounded-lg hover:bg-[#ffffff67] hover:text-black"
          >
            Pricing
          </Link>
          <Link
            href="/analyze"
            className="text-lg font-medium text-zinc-800 py-0.5 px-1.5 rounded-lg hover:bg-[#ffffff67] hover:text-black"
          >
            Analysis
          </Link>
          <Link
            href="#faq"
            className="text-lg font-medium text-zinc-800 py-0.5 px-1.5 rounded-lg hover:bg-[#ffffff67] hover:text-black"
          >
            FAQ
          </Link>
          <a
            href="#"
            className="text-lg font-medium text-zinc-800 py-0.5 px-1.5 rounded-lg hover:bg-[#ffffff67] hover:text-black"
          >
            Blog
          </a>

          <div
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button className="flex items-center space-x-1 text-lg font-medium text-zinc-800 py-0.5 px-1.5 rounded-lg hover:bg-[#ffffff67] hover:text-black">
              <span>About Us</span>
              <ChevronDown size={16} />
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-fit bg-[#ffffff] text-black rounded-lg shadow-2xl p-2 z-20">
                <Link
                  href="/career"
                  className="block px-2 py-1 font-semibold hover:text-white hover:bg-[#0057FF] rounded-lg"
                >
                  Career
                </Link>
                <Link
                  href="/certification"
                  className="block px-2 py-1 font-semibold hover:text-white hover:bg-[#0057FF] rounded-lg"
                >
                  Certification
                </Link>
                <Link
                  href="/press-kit"
                  className="block px-2 py-1 font-semibold hover:text-white hover:bg-[#0057FF] rounded-lg"
                >
                  Press-kit
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - Auth & Language */}
        <div className="flex items-center space-x-4">
          <Button
            link="/login"
            type="button"
            children={"Log In"}
            className="text-lg font-bold text-zinc-800 py-2 px-4 rounded-full hover:bg-[#ffffff67] hover:text-black"
          />
          <Button
            link="/signup"
            type="button"
            children={"Create an account"}
            className="text-lg font-semibold px-4 py-2.5 rounded-full bg-[#0157FE] text-white hover:bg-zinc-900"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

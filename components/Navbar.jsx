"use client";

import React, { useState, useEffect, useRef } from "react";
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

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutTimeoutRef = useRef(null);
  const [language, setLanguage] = useState("EN");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`transition-all duration-500 ${
        scrolled
          ? "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#EDF1F8] text-black shadow-xl rounded-full"
          : "absolute top-14 left-1/2 -translate-x-1/2 w-[90%] bg-transparent text-white rounded-full"
      } z-50 p-3`}
    >
      <div className="relative flex justify-between items-center">
        {/* LEFT - Logo */}
        <Link href={"/"}
          className={`flex items-center gap-1 text-3xl font-black px-4 ${
            scrolled ? "text-black" : "text-white"
          }`}
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
            <button
              className={`flex items-center space-x-1 ${
                scrolled
                  ? "text-lg font-medium text-gray-800 p-1 rounded-lg hover:bg-[#DDE0E7] hover:text-black"
                  : "text-lg font-medium text-gray-200 p-1 rounded-lg hover:bg-[#333672] hover:text-white"
              }`}
            >
              <span>Products</span>
              <ChevronDown size={20} />
            </button>

            {isProductsOpen && (
              <div className="absolute left-0 mt-8 w-full bg-[#F5F6FA] text-black rounded-xl shadow-2xl z-20 px-8 py-6 transition-all duration-700 ease-in grid grid-cols-3 gap-10">
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
                        <a
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
                        </a>
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
                      <a
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
                      </a>
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
                      <a
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
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#"
            className={`${
              scrolled
                ? "text-lg font-medium text-gray-800 py-0.5 px-1.5 rounded-lg hover:bg-[#DDE0E7] hover:text-black"
                : "text-lg font-medium text-gray-200 py-0.5 px-1.5 rounded-lg hover:bg-[#333672] hover:text-white"
            }`}
          >
            Pricing
          </a>
          <a
            href="#"
            className={`${
              scrolled
                ? "text-lg font-medium text-gray-800 py-0.5 px-1.5 rounded-lg hover:bg-[#DDE0E7] hover:text-black"
                : "text-lg font-medium text-gray-200 py-0.5 px-1.5 rounded-lg hover:bg-[#333672] hover:text-white"
            }`}
          >
            Analysis
          </a>
          <a
            href="#"
            className={`${
              scrolled
                ? "text-lg font-medium text-gray-800 py-0.5 px-1.5 rounded-lg hover:bg-[#DDE0E7] hover:text-black"
                : "text-lg font-medium text-gray-200 py-0.5 px-1.5 rounded-lg hover:bg-[#333672] hover:text-white"
            }`}
          >
            FAQ
          </a>
          <a
            href="#"
            className={`${
              scrolled
                ? "text-lg font-medium text-gray-800 py-0.5 px-1.5 rounded-lg hover:bg-[#DDE0E7] hover:text-black"
                : "text-lg font-medium text-gray-200 py-0.5 px-1.5 rounded-lg hover:bg-[#333672] hover:text-white"
            }`}
          >
            Blog
          </a>

          <div
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button
              className={`flex items-center space-x-1 ${
                scrolled
                  ? "text-lg font-medium text-gray-800 py-0.5 px-1.5 rounded-lg hover:bg-[#DDE0E7] hover:text-black"
                  : "text-lg font-medium text-gray-200 py-0.5 px-1.5 rounded-lg hover:bg-[#333672] hover:text-white"
              }`}
            >
              <span>About Us</span>
              <ChevronDown size={16} />
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-fit bg-[#ffffff] text-black rounded-lg shadow-2xl p-2 z-20">
                <a
                  href="#"
                  className="block px-2 py-1 font-semibold hover:text-white hover:bg-[#0057FF] rounded-lg"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="block px-2 py-1 font-semibold hover:text-white hover:bg-[#0057FF] rounded-lg"
                >
                  Certification
                </a>
                <a
                  href="#"
                  className="block px-2 py-1 font-semibold hover:text-white hover:bg-[#0057FF] rounded-lg"
                >
                  Press-kit
                </a>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - Auth & Language */}
        <div className="flex items-center space-x-4 px-4">

          {/* Button Component */}
          <Button
            link="/login"
            type="button"
            children={"Log In"}
            className={`${
              scrolled
                ? "text-lg font-bold text-gray-800 py-2 px-4 rounded-full hover:bg-[#DDE0E7] hover:text-black"
                : "text-lg font-bold text-gray-200 py-2 px-4 rounded-full hover:bg-[#abaeb623] hover:text-white"
            }`}
          />

          <Button
            link="/signup"
            type="button"
            children={"Create an account"}
            className={`text-lg font-semibold px-4 py-2.5 rounded-full ${
              scrolled
                ? "bg-black text-white hover:bg-[#3056D3]"
                : "bg-white text-black hover:text-white hover:bg-[#3056D3]"
            }`}
          />

          <div className="relative flex items-center">
            <button
              onClick={() => setLanguageOpen((prev) => !prev)}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition ${
                scrolled
                  ? "hover:bg-[#DDE0E7] hover:text-black"
                  : "hover:bg-[#333672] hover:text-white"
              }`}
            >
              {language}
              <ChevronDown size={14} className="mt-[1px]" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full right-0 mt-2 min-w-[60px] z-50 rounded-md overflow-hidden shadow-xl transition-all duration-200 origin-top ${
                languageOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible"
              } ${scrolled ? "bg-white text-black" : "bg-[#fff] text-black"}`}
              onMouseLeave={() => setLanguageOpen(false)}
            >
              {["EN", "ES"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setLanguageOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition ${
                    scrolled
                      ? "hover:bg-[#DDE0E7] hover:text-black"
                      : "hover:bg-[#0057FF] hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

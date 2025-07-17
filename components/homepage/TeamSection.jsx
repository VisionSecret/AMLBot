import Image from "next/image";
import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Slava Demchuk",
    role: "Co-Founder",
    image: "/images/teamSection1.webp",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "M_ALi",
    role: "Frontend Developer",
    image: "/images/teamSection2.webp",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Anmol Jain",
    role: "VP",
    image: "/images/teamSection3.webp",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="w-full min-h-screen py-24 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
          Meet the Core Team
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-3xl flex flex-col shadow-smd hover:shadow-md transition-all duration-500"
          >
            <div className="relative w-full h-80 overflow-hidden mb-2">
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={500}
                className="object-cover rounded-t-3xl"
              />
            </div>
           <div className="px-5 pb-5">
             <h3 className="text-xl font-semibold text-zinc-800">
              {member.role}
            </h3>
            <p className="text-2xl font-bold text-zinc-900 mt-2">
              {member.name}
            </p>
            <div className="flex gap-4 mt-4 text-[#000000] font-bold mb-3">
              <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 hover:scale-110 transition" />
              </a>
              <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                <Twitter className="w-5 h-5 hover:scale-110 transition" />
              </a>
              <a href={member.socials.github} target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 hover:scale-110 transition" />
              </a>
            </div>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

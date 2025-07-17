'use client';

import ScrollContainer from 'react-indiana-drag-scroll';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    image: "/images/blogPost1.webp",
    title: "How to Open a Financial Institution Account at Binance",
    date: "2 min read",
    description: "Explore how AML procedures are evolving in the blockchain ecosystem...",
    link: "/blog/top-compliance-tools",
  },
  {
    id: 2,
    image: "/images/blogPost2.webp",
    title: "AMLBot Team Attends EU Crypto Regulation Round Table",
    date: "1 min read",
    description: "With the application of the Markets in Crypto Assets (MiCA) on the horizon...",
    link: "/blog/top-compliance-tools",
  },
  {
    id: 3,
    image: "/images/blogPost3.webp",
    title: "How AML Regulations Are Changing in 2023",
    date: "7 min read",
    description: "Organized crime`s motivation is the money perpetrators stand to make out...",
    link: "/blog/detect-risky-funds",
  },
  {
    id: 4,
    image: "/images/blogPost4.webp",
    title: "AMLBot Team Attends The Web3 Euro Summit 2023",
    date: "2 min read",
    description: "At AMLBot, we constantly strive to connect with projects and ...",
    link: "/blog/regulator-requirements",
  },
];

const BlogScrollContainer = () => {
  return (
  <ScrollContainer
  className="flex gap-8 overflow-x-auto cursor-grab no-scrollbar scroll-smooth will-change-transform scroll-snap-x snap-mandatory"
  horizontal
>
  {blogPosts.map((post) => (
    <Link
      key={post.id}
      href={post.link}
      className="min-w-[300px] max-w-[360px] p-6 rounded-3xl snap-start bg-[#FFFFFF] hover:scale-[1.02] transition-transform duration-700 flex-shrink-0"
    >
      <div>
        <div className="relative w-full h-fit rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={420}
            height={224}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-800 mb-1">{post.date}</p>
          <h3 className="text-2xl font-bold text-zinc-900 mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-base text-zinc-900 line-clamp-3">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  ))}
</ScrollContainer>

  );
};

export default BlogScrollContainer;

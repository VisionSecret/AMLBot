import BlogScrollContainer from "../shared/BlogScrollContainer";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const BlogSection = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-zinc-900">
            Our initiatives
          </h2>
          <Button
            link="/blog-post"
            type="button"
            children="More in our blog"
            icon={
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            }
            className="group text-blue-600 font-bold px-4 py-2 flex items-center w-fit rounded-full hover:bg-[#0057FF] hover:text-white"
          />
        </div>
        <BlogScrollContainer />
      </div>
    </section>
  );
};

export default BlogSection;

import { Post } from "contentlayer/generated";
import { CustomLink, SeoContainer } from "components";
import { sortedBlogPosts } from "lib/helpers";
import type { GetStaticProps } from "next";
import Image from "next/image";

type HomeProps = {
  mostRecent: Post[];
};

export const getStaticProps: GetStaticProps = async () => {
  const mostRecent = sortedBlogPosts.slice(0, 3);
  return {
    props: {
      mostRecent,
    },
  };
};

export default function Home({ mostRecent }: HomeProps) {
  return (
    <SeoContainer
      title={"Home | devkanisk"}
      description={
        "Kanisk is a software engineer based in Toronto, Canada. Welcome to his personal corner on the internet, hope you enjoy your stay!"
      }
      url={"devkanisk.com"}
    >
      <section className="flex flex-col justify-center">
        <div className="flex flex-col-reverse sm:flex-row md:items-start">
          <div className="flex flex-col pr-8">
            <h1 className="text-3xl md:text-5xl mb-1 text-black dark:text-white">
              @devkanisk
            </h1>
            <section>
              <h2 className="text-gray-700 mt-3 dark:text-zinc-200">
                Software Engineer at{" "}
                <CustomLink
                  href="https://www.waveapps.com/"
                  aria-label="Waveapps website"
                >
                  <span className="font-semibold">Wave</span>
                </CustomLink>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Software Engineer based in Toronto, Canada, currently
                working remotely within the Finance and eCommerce sectors.
              </p>
            </section>
          </div>
          <div className="w-[120px] sm:w-[400px]">
            <Image
              className="rounded-full"
              alt="UI/UX design"
              src="/static/images/devkanisk.jpg"
              width={176}
              height={176}
              placeholder="blur"
              blurDataURL="/static/images/devkanisk.jpg"
              priority
            />
          </div>
        </div>
      </section>
      <hr className="my-1 border-1 border-gray-400 dark:border-zinc-500" />
      <section>
        <h2 className="mt-4 font-bold md:text-3xl mb-1 text-black dark:text-white">
          Recent Blog Posts
        </h2>
        <ul className="flex flex-col">
          {mostRecent.map((post: Post) => (
            <li key={post.slug}>
              <CustomLink href={`/blog/${post.slug}`}>{post.title}</CustomLink>
            </li>
          ))}
        </ul>
        <CustomLink
          href="/blog"
          className="flex mt-2 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          Read all posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </CustomLink>
      </section>
    </SeoContainer>
  );
}

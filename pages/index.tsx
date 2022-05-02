import { Post } from ".contentlayer/generated";
import { CustomLink, SeoContainer } from "components";
import { sortedPosts } from "lib/helpers";
import type { GetStaticProps } from "next";
import Image from "next/image";

type HomeProps = {
  mostRecent: Post[];
};

export const getStaticProps: GetStaticProps = async () => {
  const mostRecent = sortedPosts.slice(0, 3);
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
        "A starter template for NextJS leveraging Contentlayer + MDX to get you started fast!"
      }
      url={"next-js-mdx-starter.vercel.app"}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              @devkanisk
            </h1>
            <section>
              <h5 className="text-gray-700 dark:text-zinc-200 mb-4">
                Software Engineer at{" "}
                <CustomLink
                  href="https://www.waveapps.com/"
                  aria-label="Waveapps website"
                >
                  <span className="font-semibold">Wave</span>
                </CustomLink>
              </h5>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Full Stack Software Engineer based in Toronto, Canada, currently
                working remotely within the Finance and eCommerce sectors.
              </p>
            </section>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              className="rounded-full"
              alt="UI/UX design"
              src="/static/images/devkanisk.jpg"
              width={176}
              height={176}
              placeholder="blur"
              blurDataURL="/static/images/devkanisk.jpg"
            />
          </div>
        </div>
        <section>
          <h5 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
            Recent Posts
          </h5>
          <ul className="flex flex-col">
            {mostRecent.map((post: Post) => (
              <li key={post.slug}>
                <CustomLink href={`/posts/${post.slug}`}>
                  {post.title}
                </CustomLink>
              </li>
            ))}
          </ul>
          <CustomLink
            href="/posts"
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
      </div>
    </SeoContainer>
  );
}

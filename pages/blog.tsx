import { useState, Suspense } from "react";
import { PostCard, SeoContainer } from "components";
import { sortedBlogPosts as posts, PickedPost } from "lib/helpers";

type BlogProps = {
  posts: PickedPost[];
};

export default function Blog({ posts }: BlogProps) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <SeoContainer
        title={"Blog | devkanisk"}
        description={
          "Thoughts on the software industry, programming, tech, videography, music, and my personal life."
        }
        url={"devkanisk.com/blog"}
      >
        <div>
          <h1>Blog</h1>
          <section>
            <p>
              I&apos;ve been writing and taking notes of random subject-matter
              ranging from technical bits to abstract thoughts using various
              tools and services since early 2019.
            </p>
            <p>
              Some tend to exercise my writing skills, but most tend to be a
              smattering of thoughts cobbled together into an <em>informal</em>,
              yet readable format for anyone who&apos;s dared to venture into
              this corner of the internet.
            </p>
            <p>{`Thus far, I've written ${posts.length} articles on my blog. Feel free to use the search to filter by title.`}</p>
          </section>
          <div className="relative w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {!searchValue &&
            posts.map((post) => <PostCard post={post} key={post.slug} />)}
        </div>
        <Suspense fallback={null}>
          {!filteredBlogPosts.length && (
            <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
          )}
          {searchValue &&
            filteredBlogPosts.map((post) => (
              <PostCard post={post} key={post.slug} />
            ))}
        </Suspense>
      </SeoContainer>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      posts,
    },
  };
};

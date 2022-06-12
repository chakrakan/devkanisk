import { Post } from "../.contentlayer/generated";
import { PostCard, SeoContainer } from "components";
import { sortedPosts as posts } from "lib/helpers";

export default function Blog({ posts }: { posts: Post[] }) {
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
          <p>
            I&apos;ve been writing and taking notes of random subject-matter
            ranging from technical bits to abstract thoughts using various tools
            and services since early 2020.
          </p>
          <p>
            The following are a smattering of those thoughts cobbled together
            into an <em>informal</em>, yet readable format for anyone who dared
            to venture into this corner of the internet.
          </p>
          <p>Happy reading! 📖</p>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
            {posts.map((post) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
        </div>
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

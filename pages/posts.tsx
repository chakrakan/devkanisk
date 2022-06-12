import { Post } from "../.contentlayer/generated/";
import { PostCard, SeoContainer } from "components";
import { sortedPosts as posts } from "lib/helpers";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <SeoContainer
        title={"Posts | devkanisk"}
        description={
          "A starter template for NextJS leveraging Contentlayer + MDX to get you started fast!"
        }
        url={"devkanisk.com/posts"}
      >
        <div>
          <h1>Posts</h1>
          <p>
            I&apos;ve been creating written content across a smattering of
            web-services since 2020{" "}
          </p>
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

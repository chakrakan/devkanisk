import { Post } from "../.contentlayer/generated/";
import "prismjs/themes/prism-tomorrow.css";
import { PostCard, SeoContainer } from "components";
import { sortedPosts as posts } from "lib/helpers";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <SeoContainer
      title={"Posts | devkanisk"}
      description={
        "A starter template for NextJS leveraging Contentlayer + MDX to get you started fast!"
      }
      url={"next-js-mdx-starter.vercel.app"}
    >
      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </SeoContainer>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      posts,
    },
  };
};

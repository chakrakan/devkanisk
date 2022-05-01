import { allPosts, Post } from "../.contentlayer/generated/";
import "prismjs/themes/prism-tomorrow.css";
import { PostCard, SeoContainer } from "components";

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
  const posts = allPosts.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return {
    props: {
      posts,
    },
  };
};

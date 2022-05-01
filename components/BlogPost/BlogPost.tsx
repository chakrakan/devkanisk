import { Post } from ".contentlayer/generated";
import SeoContainer from "components/SeoContainer/SeoContainer";

type BlogPostProps = {
  children: React.ReactNode;
  post: Post;
};

export default function BlogPost({ children, post }: BlogPostProps) {
  return (
    <SeoContainer
      title={`${post.title} | devkanisk`}
      description={post.description}
      url={`https://devkanisk.com/posts/${post.slug}`}
    >
      <article>
        <div>
          <h1>{post.title}</h1>
          <p>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime ? ` · ${post.readingTime.text}` : ""}</span>
          </p>
        </div>
        <div className="entry dark:prose-code:text-zinc-300">{children}</div>
      </article>
    </SeoContainer>
  );
}

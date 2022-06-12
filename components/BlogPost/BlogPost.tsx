import { Post } from ".contentlayer/generated";
import SeoContainer from "components/SeoContainer/SeoContainer";
import Tag from "components/Tag/Tag";

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
        <div className="flex flex-col">
          <h1>{post.title}</h1>
          <div className="flex flex-wrap">
            Tags:&nbsp;
            {post.tags?.map((tag) => (
              <Tag key={tag.title} title={tag.title} />
            ))}
          </div>
          <p>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime ? ` · ${post.readingTime.text}` : ""}</span>
          </p>
          <hr className="my-2 border-gray-200 dark:border-zinc-500 mb-8" />
        </div>
        <div className="entry dark:prose-code:text-zinc-300">{children}</div>
      </article>
    </SeoContainer>
  );
}

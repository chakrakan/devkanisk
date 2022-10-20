import { Post } from "contentlayer/generated";
import SeoContainer from "components/SeoContainer/SeoContainer";
import Tag from "components/Tag/Tag";
import ViewCounter from "components/ViewCounter/ViewCounter";

type BlogPostProps = {
  children: React.ReactNode;
  post: Post;
};

export default function BlogPost({ children, post }: BlogPostProps) {
  return (
    <SeoContainer
      title={`${post.title} | devkanisk`}
      description={post.description}
      url={`https://devkanisk.com/blog/${post.slug}`}
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
            <ViewCounter slug={post.slug} />
          </p>
          <hr className="mt-1 border-gray-400 dark:border-zinc-500 mb-4" />
        </div>
        <div className="entry dark:prose-code:text-zinc-300">{children}</div>
      </article>
    </SeoContainer>
  );
}

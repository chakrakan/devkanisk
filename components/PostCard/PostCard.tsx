import { Post } from ".contentlayer/generated";
import CustomLink from "components/CustomLink/CustomLink";
import Image from "next/image";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <CustomLink
      key={`posts/${post.slug}`}
      href={`/posts/${post.slug}`}
      className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg mt-6"
      aria-label={post.title}
    >
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-sky-400">{post.title}</h5>
          <p className="mt-1 text-xs font-medium text-gray-600 dark:text-zinc-300">
            By Kanisk Chakraborty
          </p>
        </div>

        <div className="flex-shrink-0 hidden ml-2 sm:block">
          <Image
            className="object-cover w-16 h-16 rounded-full shadow-sm dark:bg-zinc-400"
            src="/static/images/dk-small.svg"
            width={64}
            height={64}
            alt="Devkanisk"
          />
        </div>
      </div>

      <div className="mt-0 sm:pr-8">
        <p className="text-sm text-gray-500 dark:text-zinc-300">
          {post.description}
        </p>
      </div>

      <dl className="flex mt-2">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Published
          </dt>
          <dd className="text-xs text-zinc-400">{post.publishedAt}</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Reading Time
          </dt>
          <dd className="text-xs text-zinc-400">
            {post.readingTime
              ? `${post.readingTime.text.substring(
                  0,
                  post.readingTime.text.length - 5
                )}`
              : ""}
          </dd>
        </div>
      </dl>
    </CustomLink>
  );
}
